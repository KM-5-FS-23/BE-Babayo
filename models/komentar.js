'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Komentar extends Model {
    static associate(models) {
      Komentar.belongsTo(models.User, { foreignKey: 'user_id' });
      Komentar.belongsTo(models.BacaanHarian, { foreignKey: 'bacaan_id' });
    }
  }
  Komentar.init({
    komentar_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    isi: DataTypes.TEXT,
    tanggal: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    user_id: DataTypes.INTEGER,
    bacaan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Komentar',
    tableName: 'Komentar',
    timestamps: false,
  });
  return Komentar;
};