const { validationResult } = require('express-validator');
const { BacaanHarian, Komentar, User } = require('../models');

function formatWaktu(waktuBacaanHarian) {
  const selisih = new Date() - new Date(waktuBacaanHarian);
  const detik = Math.floor(selisih / 1000);
  const menit = Math.floor(detik / 60);
  const jam = Math.floor(menit / 60);
  const hari = Math.floor(jam / 24);

  if (detik < 60) {
    return 'Baru saja';
  } else if (menit < 60) {
    return `${menit} menit yang lalu`;
  } else if (jam < 24) {
    return `${jam} jam yang lalu`;
  } else {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(waktuBacaanHarian).toLocaleDateString('id-ID', options);
  }
}

exports.getAllBacaanHarian = async (req, res) => {
  try {
    const bacaanHarians = await BacaanHarian.findAll({
      include: [{ model: Komentar }],
    });
    const bacaanHariansFormatted = bacaanHarians.map(item => ({
      ...item.toJSON(),
      waktuFormatted: formatWaktu(item.tanggal),
    }));
    res.json(bacaanHariansFormatted);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBacaanHarianById = async (req, res) => {
  const { id } = req.params;
  try {
    const bacaanHarian = await BacaanHarian.findByPk(id, {
      include: [{ model: Komentar }],
    });
    if (bacaanHarian) {
      res.json({
        ...bacaanHarian.toJSON(),
        waktuFormatted: formatWaktu(bacaanHarian.tanggal),
      });
    } else {
      res.status(404).json({ error: 'Bacaan Harian tidak ditemukan!' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createBacaanHarian = async (req, res) => {
  const { judul, kategori, isi, deskripsi, tanggal, userId } = req.body;

  try {
    const validCategories = ['Semua', 'Artikel', 'Cerpen', 'Lainnya'];
    if (!validCategories.includes(kategori)) {
      return res.status(400).json({ message: 'Kategori tidak tersedia' });
    }

    const newBacaanHarian = await BacaanHarian.create({
      judul,
      kategori,
      isi,
      deskripsi,
      tanggal: new Date(),
      user_id: userId,
    });
    res.json({
      ...newBacaanHarian.toJSON(),
      waktuFormatted: formatWaktu(newBacaanHarian.tanggal),
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateBacaanHarian = async (req, res) => {
  const { id } = req.params;
  const { judul, kategori, isi, deskripsi, tanggal, userId } = req.body;

  try {
    const validCategories = ['semua', 'artikel', 'cerpen', 'lainnya'];
    if (!validCategories.includes(kategori)) {
      return res.status(400).json({ message: 'Kategori tidak tersedia' });
    }

    const bacaanHarian = await BacaanHarian.findByPk(id);
    if (!bacaanHarian) {
      return res.status(404).json({ message: 'Bacaan Harian tidak ditemukan!' });
    }

    const updatedBacaanHarian = await BacaanHarian.update(
      { judul, kategori, isi, deskripsi, tanggal, userId },
      { where: { bacaan_id: id } }
    );
    res.json({ message: 'Bacaan Harian berhasil diupdate!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteBacaanHarian = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. Hanya Admin yang dapat mengakses fitur ini.' });
    }

    const { id } = req.params;
    await BacaanHarian.destroy({ where: { bacaan_id: id } });
    res.json({ message: 'Bacaan Harian berhasil dihapus!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};