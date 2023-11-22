const { validationResult } = require('express-validator');
const { User, Book } = require('../models');

exports.createBook = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. Hanya Admin yang dapat mengakses fitur ini.' });
    }

    const { judul, bahasa, penulis, tahun_terbit, kategori, user_id } = req.body;

    const userExists = await User.findByPk(user_id);
    if (!userExists) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    const newBook = await Book.create({
      judul,
      bahasa,
      penulis,
      tahun_terbit,
      kategori,
      user_id
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      attributes: ['buku_id', 'judul', 'bahasa', 'penulis', 'tahun_terbit', 'kategori'],
    });

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. Hanya Admin yang dapat mengakses fitur ini.' });
    }

    const bookId = req.params.id;
    const { judul, bahasa, penulis, tahun_terbit, kategori, user_id } = req.body;

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Buku tidak ditemukan' });
    }

    await Book.update({
      judul,
      bahasa,
      penulis,
      tahun_terbit,
      kategori,
      user_id
    }, {
      where: { buku_id: bookId }
    });

    res.status(200).json({ message: 'Data buku berhasil diupdate' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. Hanya Admin yang dapat mengakses fitur ini.' });
    }

    const bookId = req.params.id;

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Buku tidak ditemukan' });
    }

    await Book.destroy({
      where: { buku_id: bookId }
    });

    res.status(200).json({ message: 'Data buku berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Buku tidak ditemukan' });
    }

    res.status(200).json({
      buku_id: book.buku_id,
      judul: book.judul,
      bahasa: book.bahasa,
      penulis: book.penulis,
      tahun_terbit: book.tahun_terbit,
      kategori: book.kategori
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};