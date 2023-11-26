const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./config/config');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const favoritBukuRoutes = require('./routes/favoritBukuRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database berhasil terhubung.');
    
    app.use('/auth', authRoutes);
    app.use('/books', authMiddleware.authenticateUser, bookRoutes);
    app.use('/favorit-buku', authMiddleware.authenticateUser, favoritBukuRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Tidak dapat terhubung ke database:', err);
  });