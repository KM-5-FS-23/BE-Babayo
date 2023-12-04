const { validationResult } = require('express-validator');
const { Komentar, User } = require('../models');

function formatWaktu(waktuKomentar) {
  const selisih = new Date() - new Date(waktuKomentar);
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
    return new Date(waktuKomentar).toLocaleDateString('id-ID', options);
  }
}

exports.getAllKomentarByBacaanId = async (req, res) => {
  const { bacaanId } = req.params;
  try {
    const komentar = await Komentar.findAll({
      where: { bacaan_id: bacaanId },
    });
    const komentarFormatted = komentar.map(item => ({
      ...item.toJSON(),
      waktuFormatted: formatWaktu(item.tanggal),
    }));
    res.json(komentarFormatted);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createKomentar = async (req, res) => {
  const { isi, userId, bacaanId } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newKomentar = await Komentar.create({
      isi,
      tanggal: new Date(),
      user_id: userId,
      bacaan_id: bacaanId,
    });
    res.json({
      ...newKomentar.toJSON(),
      waktuFormatted: formatWaktu(newKomentar.tanggal),
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateKomentar = async (req, res) => {
  const { id } = req.params;
  const { isi, userId } = req.body;
  const userExists = await User.findByPk(userId);

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedKomentar = await Komentar.update(
      { isi },
      { where: { komentar_id: id } }
    );
    res.json({ message: 'Komentar berhasil diedit!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteKomentar = async (req, res) => {
  const { id } = req.params;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Komentar.destroy({ where: { komentar_id: id } });
    res.json({ message: 'Komentar berhasil dihapus!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};