const { Komentar } = require('../models');

exports.getAllKomentarByBacaanId = async (req, res) => {
  const { bacaanId } = req.params;
  try {
    const komentars = await Komentar.findAll({
      where: { bacaan_id: bacaanId },
    });
    res.json(komentars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createKomentar = async (req, res) => {
  const { isi, userId, bacaanId } = req.body;
  try {
    const newKomentar = await Komentar.create({
      isi,
      tanggal: new Date(),
      user_id: userId,
      bacaan_id: bacaanId,
    });
    res.json(newKomentar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateKomentar = async (req, res) => {
  const { id } = req.params;
  const { isi } = req.body;
  try {
    const updatedKomentar = await Komentar.update(
      { isi },
      { where: { komentar_id: id } }
    );
    res.json({ message: 'Komentar updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteKomentar = async (req, res) => {
  const { id } = req.params;
  try {
    await Komentar.destroy({ where: { komentar_id: id } });
    res.json({ message: 'Komentar deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
