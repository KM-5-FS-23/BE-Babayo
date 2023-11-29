const { validationResult } = require('express-validator');
const { FavoritBacaanHarian, BacaanHarian } = require('../models');

exports.createFavoritBacaanHarian = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bacaan_id, user_id } = req.body;

    const bacaanHarian = await BacaanHarian.findByPk(bacaan_id);
    if (!bacaanHarian) {
      return res.status(400).json({ message: 'Bacaan harian tidak ditemukan' });
    }

    const existingFavoritBacaanHarian = await FavoritBacaanHarian.findOne({
      where: { bacaan_id, user_id },
    });

    if (existingFavoritBacaanHarian) {
      return res.status(400).json({ message: 'Favorit bacaan harian sudah ada' });
    }

    const newFavoritBacaanHarian = await FavoritBacaanHarian.create({
      bacaan_id,
      user_id,
    });

    res.status(201).json(newFavoritBacaanHarian);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getFavoritBacaanHarianList = async (req, res) => {
  try {
    const favoritBacaanHarianList = await FavoritBacaanHarian.findAll({
      include: {
        model: BacaanHarian,
        attributes: ['judul'],
        as: 'favoritedBacaanHarian',
      },
    });

    res.status(200).json(favoritBacaanHarianList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteFavoritBacaanHarian = async (req, res) => {
  try {
    const favoritBacaanHarianId = req.params.id;
    const favoritBacaanHarian = await FavoritBacaanHarian.findByPk(favoritBacaanHarianId);

    if (!favoritBacaanHarian) {
      return res.status(404).json({ message: 'Favorit bacaan harian tidak ditemukan' });
    }

    await favoritBacaanHarian.destroy();

    res.status(200).json({ message: 'Favorit bacaan harian berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
