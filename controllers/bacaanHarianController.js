const { validationResult } = require('express-validator');
const { BacaanHarian, Komentar, User } = require('../models');

exports.getAllBacaanHarian = async (req, res) => {
  try {
    const bacaanHarians = await BacaanHarian.findAll({
      include: [{ model: Komentar }],
    });
    res.json(bacaanHarians);
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
      res.json(bacaanHarian);
    } else {
      res.status(404).json({ error: 'Bacaan Harian tidak ditemukan!' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createBacaanHarian = async (req, res) => {
  const { judul, kategori, isi, tanggal, userId } = req.body;
  
  const userExists = await User.findByPk(userId);
  if (!userExists) {
    return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }

  try {
    const validCategories = ['semua', 'artikel', 'cerpen', 'lainnya'];
    if (!validCategories.includes(kategori)) {
      return res.status(400).json({ message: 'Kategori tidak tersedia' });
    }

    const newBacaanHarian = await BacaanHarian.create({
      judul,
      kategori,
      isi,
      tanggal,
      user_id: userId,
    });

    res.json(newBacaanHarian);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateBacaanHarian = async (req, res) => {
  const { id } = req.params;
  const { judul, kategori, isi, tanggal, userId } = req.body;

  const userExists = await User.findByPk(userId);
  if (!userExists) {
    return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  }

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
      { judul, kategori, isi, tanggal, userId },
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