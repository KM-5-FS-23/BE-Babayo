const { BacaanHarian, Komentar } = require('../models');

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
      res.status(404).json({ error: 'Bacaan Harian not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createBacaanHarian = async (req, res) => {
  const { judul, kategori, isi, tanggal, userId } = req.body;
  try {
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
  const { judul, kategori, isi, tanggal } = req.body;
  try {
    const updatedBacaanHarian = await BacaanHarian.update(
      { judul, kategori, isi, tanggal },
      { where: { bacaan_id: id } }
    );
    res.json({ message: 'Bacaan Harian updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteBacaanHarian = async (req, res) => {
  const { id } = req.params;
  try {
    await BacaanHarian.destroy({ where: { bacaan_id: id } });
    res.json({ message: 'Bacaan Harian deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
