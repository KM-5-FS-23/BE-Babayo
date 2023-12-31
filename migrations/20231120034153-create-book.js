'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KoleksiBuku', {
      buku_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      },
      bahasa: {
        type: Sequelize.STRING
      },
      penulis: {
        type: Sequelize.STRING
      },
      tahun_terbit: {
        type: Sequelize.INTEGER
      },
      kategori: {
        type: Sequelize.ENUM('Semua', 'Fiksi', 'Pendidikan', 'Romance', 'Sejarah', 'Teknologi', 'Lainnya'),
        allowNull: false,
        defaultValue: 'Lainnya'
      },
      sinopsis: {
        type: Sequelize.TEXT
      },
      gambar: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', 
          key: 'user_id' 
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('KoleksiBuku');
  }
};