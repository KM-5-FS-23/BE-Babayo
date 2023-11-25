const express = require('express');
const router = express.Router();
const bacaanHarianController = require('../controllers/bacaanHarianController');

router.get('/', bacaanHarianController.getAllBacaanHarian);
router.get('/:id', bacaanHarianController.getBacaanHarianById);
router.post('/', bacaanHarianController.createBacaanHarian);
router.put('/:id', bacaanHarianController.updateBacaanHarian);
router.delete('/:id', bacaanHarianController.deleteBacaanHarian);

module.exports = router;
