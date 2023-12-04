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
        type: Sequelize.ENUM('Semua', 'Artikel', 'Cerpen', 'Lainnya'),
        allowNull: false,
        defaultValue: 'Lainnya'
      },
      isi: {
        type: Sequelize.TEXT,
      },
      tanggal: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
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