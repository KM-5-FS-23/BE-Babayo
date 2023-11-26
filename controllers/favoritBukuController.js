const { validationResult } = require('express-validator');
const { FavoritBuku, Book } = require('../models');

exports.createFavoritBuku = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { buku_id, user_id } = req.body;

    const book = await Book.findByPk(buku_id);
    if (!book) {
      return res.status(400).json({ message: 'Buku tidak ditemukan' });
    }

    const existingFavoritBuku = await FavoritBuku.findOne({
      where: { buku_id, user_id },
    });

    if (existingFavoritBuku) {
      return res.status(400).json({ message: 'Favorit buku sudah ada' });
    }

    const newFavoritBuku = await FavoritBuku.create({
      buku_id,
      user_id,
    });

    res.status(201).json(newFavoritBuku);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getFavoritBukuList = async (req, res) => {
  try {
    const favoritBukuList = await FavoritBuku.findAll({
      include: {
        model: Book,
        attributes: ['judul', 'penulis'],
        as: 'koleksiBuku',
      },
    });

    res.status(200).json(favoritBukuList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteFavoritBuku = async (req, res) => {
  try {
    const favoritBukuId = req.params.id;
    const favoritBuku = await FavoritBuku.findByPk(favoritBukuId);

    if (!favoritBuku) {
      return res.status(404).json({ message: 'Favorit buku tidak ditemukan' });
    }

    await favoritBuku.destroy();

    res.status(200).json({ message: 'Favorit buku berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};