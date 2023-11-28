'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoritBacaanHarian extends Model {
    static associate(models) {
      FavoritBacaanHarian.belongsTo(models.BacaanHarian, { foreignKey: 'bacaan_id', as: 'favoritedBacaanHarian' });
      FavoritBacaanHarian.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  FavoritBacaanHarian.init(
    {
      fav_bacaan_harian_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      bacaan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'FavoritBacaanHarian',
      tableName: 'FavoritBacaanHarian',
      timestamps: false,
    }
  );

  return FavoritBacaanHarian;
};