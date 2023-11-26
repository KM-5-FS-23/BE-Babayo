const express = require('express');
const { check } = require('express-validator');
const bacaanHarianController = require('../controllers/bacaanHarianController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.authenticateUser, bacaanHarianController.getAllBacaanHarian);
router.get('/:id', authMiddleware.authenticateUser, bacaanHarianController.getBacaanHarianById);

router.post(
  '/',
  [
    check('judul').notEmpty(),
    check('kategori').notEmpty(),
    check('isi').notEmpty(),
    check('tanggal').notEmpty(),
    check('userId').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  bacaanHarianController.createBacaanHarian
);

router.put(
  '/:id',
  [
    check('judul').notEmpty(),
    check('kategori').notEmpty(),
    check('isi').notEmpty(),
    check('tanggal').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  bacaanHarianController.updateBacaanHarian
);

router.delete('/:id', authMiddleware.authenticateUser, bacaanHarianController.deleteBacaanHarian);

module.exports = router;