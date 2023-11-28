const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const favoritBacaanHarianController = require('../controllers/favoritBacaanHarianController');

router.post(
    '/',
    [
      check('bacaan_id').notEmpty(),
    ],
    authMiddleware.authenticateUser, 
    favoritBacaanHarianController.createFavoritBacaanHarian
  );
  
  router.get('/', authMiddleware.authenticateUser, favoritBacaanHarianController.getFavoritBacaanHarianList);
  
  router.delete('/:id', authMiddleware.authenticateUser, favoritBacaanHarianController.deleteFavoritBacaanHarian);

module.exports = router;