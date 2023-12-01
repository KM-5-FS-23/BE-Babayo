const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/register',
  [
    check('username').notEmpty(),
    check('password').isLength({ min: 6 }),
    check('email').notEmpty(),
    check('nama_lengkap').notEmpty(),
  ],
  authController.register
);

router.put(
  '/:id',
  [
    check('username').notEmpty(),
    check('email').notEmpty(),
    check('nama_lengkap').notEmpty(),
  ],
  authMiddleware.authenticateUser,
  authController.updateUser
);

router.post('/login', authController.login);
router.delete('/:id', authMiddleware.authenticateUser, authController.deleteUser);
router.get('/', authController.getAllUsers);
router.post('/refresh-token', authController.refreshToken);

module.exports = router;