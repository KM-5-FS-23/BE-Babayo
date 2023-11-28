'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BacaanHarian', {
      bacaan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      judul: {
        type: Sequelize.STRING,
      },
      kategori: {
        type: Sequelize.ENUM('semua', 'artikel', 'cerpen', 'lainnya'),
        allowNull: false,
        defaultValue: 'lainnya'
      },
      isi: {
        type: Sequelize.TEXT,
      },
      tanggal: {
        type: Sequelize.DATEONLY,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BacaanHarian');
  }
};