const express = require('express');
const { check } = require('express-validator');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/',
  [
    check('judul').notEmpty(),
    check('bahasa').notEmpty(),
    check('penulis').notEmpty(),
    check('tahun_terbit').isInt(),
    check('kategori').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  bookController.createBook
);

router.put(
  '/:id',
  [
    check('judul').notEmpty(),
    check('bahasa').notEmpty(),
    check('penulis').notEmpty(),
    check('tahun_terbit').isInt(),
    check('kategori').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  bookController.updateBook
);

router.delete('/:id', authMiddleware.authenticateUser, bookController.deleteBook);
router.get('/', authMiddleware.authenticateUser, bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

module.exports = router;

module.exports = router;