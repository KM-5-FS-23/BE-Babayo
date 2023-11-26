const express = require('express');
const { check } = require('express-validator');
const favoritBukuController = require('../controllers/favoritBukuController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/',
  [
    check('buku_id').notEmpty(),
  ],
  authMiddleware.authenticateUser, 
  favoritBukuController.createFavoritBuku
);

router.get('/', authMiddleware.authenticateUser, favoritBukuController.getFavoritBukuList);

router.delete('/:id', authMiddleware.authenticateUser, favoritBukuController.deleteFavoritBuku);

module.exports = router;