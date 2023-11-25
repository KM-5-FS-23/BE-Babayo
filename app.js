const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./config/config');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const bacaanHarianRoutes = require('./routes/bacaanHarianRoutes');
const komentarRoutes = require('./routes/komentarRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());

const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database berhasil terhubung.');
    
    app.use('/auth', authRoutes);
    app.use('/books', authMiddleware.authenticateUser, bookRoutes);
    app.use('/bacaan-harian', bacaanHarianRoutes);
    app.use('/komentar', komentarRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Tidak dapat terhubung ke database:', err);
  });
