const express = require('express');
const router = express.Router();
const komentarController = require('../controllers/komentarController');

router.get('/:bacaanId', komentarController.getAllKomentarByBacaanId);
router.post('/', komentarController.createKomentar);
router.put('/:id', komentarController.updateKomentar);
router.delete('/:id', komentarController.deleteKomentar);

module.exports = router;