const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const cors = require('cors');  // Import modul cors
const config = require('./config/config');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const bacaanHarianRoutes = require('./routes/bacaanHarianRoutes');
const komentarRoutes = require('./routes/komentarRoutes');
const favoritBacaanHarianRoutes = require('./routes/favoritBacaanHarianRoutes');
const favoritBukuRoutes = require('./routes/favoritBukuRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database berhasil terhubung.');
    
    app.use('/auth', authRoutes);
    app.use('/books', authMiddleware.authenticateUser, bookRoutes);
    app.use('/favorit-buku', authMiddleware.authenticateUser, favoritBukuRoutes);
    app.use('/bacaan-harian', authMiddleware.authenticateUser, bacaanHarianRoutes);
    app.use('/komentar', authMiddleware.authenticateUser, komentarRoutes);
    app.use('/favorit-bacaan-harian', authMiddleware.authenticateUser, favoritBacaanHarianRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Tidak dapat terhubung ke database:', err);
  });