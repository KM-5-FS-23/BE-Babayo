const express = require('express');
const { check } = require('express-validator');
const komentarController = require('../controllers/komentarController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:bacaanId', authMiddleware.authenticateUser, komentarController.getAllKomentarByBacaanId);

router.post(
  '/',
  [
    check('isi').notEmpty(),
    check('userId').notEmpty(),
    check('bacaanId').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  komentarController.createKomentar
);

router.put(
  '/:id',
  [
    check('isi').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  komentarController.updateKomentar
);

router.delete('/:id', authMiddleware.authenticateUser, komentarController.deleteKomentar);

module.exports = router;
