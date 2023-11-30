'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Komentar', {
      komentar_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isi: {
        type: Sequelize.TEXT
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
      bacaan_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'BacaanHarian',
          key: 'bacaan_id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Komentar');
  }
};