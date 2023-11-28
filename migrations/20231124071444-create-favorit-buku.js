'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FavoritBuku', {
      fav_buku_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      buku_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'KoleksiBuku',
          key: 'buku_id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'user_id' 
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FavoritBuku');
  }
};