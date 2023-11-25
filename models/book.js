// models/Book.js
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
    kategori: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
  });

  return Book;
};