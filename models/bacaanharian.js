'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BacaanHarian extends Model {
    static associate(models) {
      BacaanHarian.belongsTo(models.User, { foreignKey: 'user_id' });
      BacaanHarian.hasMany(models.Komentar, { foreignKey: 'bacaan_id' });
    }
  }
  BacaanHarian.init({
    bacaan_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    judul: DataTypes.STRING,
    kategori: DataTypes.ENUM('semua', 'artikel', 'cerpen', 'lainnya'),
    isi: DataTypes.TEXT,
    tanggal: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BacaanHarian',
    tableName: 'BacaanHarian',
    timestamps: false,
  });
  return BacaanHarian;
};