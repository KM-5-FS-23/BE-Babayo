'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, 
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    nama_lengkap: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
      defaultValue: 'user',
    },
    createdAt: {
      type: DataTypes.DATEONLY, 
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATEONLY, 
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};