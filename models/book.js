'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }

  Book.init({
    buku_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    judul: DataTypes.STRING,
    bahasa: DataTypes.STRING,
    penulis: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER,
    kategori: DataTypes.ENUM('Semua', 'Fiksi', 'Pendidikan', 'Romance', 'Sejarah', 'Teknologi', 'Lainnya'),
    sinopsis: DataTypes.STRING,
    gambar: DataTypes.STRING,
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'KoleksiBuku',
  });

  return Book;
};