// models favoritbuku.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoritBuku extends Model {
    static associate(models) {
      FavoritBuku.belongsTo(models.Book, { foreignKey: 'buku_id', as: 'koleksiBuku' });
      FavoritBuku.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }

  FavoritBuku.init(
    {
      fav_buku_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      buku_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'KoleksiBuku',
          key: 'buku_id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
    },
    {
      sequelize,
      modelName: 'FavoritBuku',
      tableName: 'FavoritBuku',
      timestamps: false,
    }
  );

  return FavoritBuku;
};
