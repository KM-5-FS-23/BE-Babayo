'use strict';

const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const hashedPasswordWilly = await bcrypt.hash('willy123', 10);
      const hashedPasswordIkhwal = await bcrypt.hash('ikhwal123', 10);
      const hashedPasswordFahki = await bcrypt.hash('fahki123', 10);
  
      await queryInterface.bulkInsert('users', [
        {
          username: 'willy',
          password: hashedPasswordWilly,
          email: 'willy17@gmail.com',
          nama_lengkap: 'Willy Nurgian',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'ikhwal',
          password: hashedPasswordIkhwal,
          email: 'ikhwal12@gmail.com',
          nama_lengkap: 'Ikhwal Febriyo',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'fahki',
          password: hashedPasswordFahki,
          email: 'fahki14@gmail.com',
          nama_lengkap: 'Fahki Rohandi',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
    }
  };