'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const [adminRole] = await queryInterface.sequelize.query(
      'SELECT user_id FROM users WHERE role = "admin"'
    );

    const adminRoleId = adminRole[0].user_id;

    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: 'babayo123',
        email: 'fsbabayo23@gmail.com',
        nama_lengkap: 'FS-23 Babayo',
        role: adminRoleId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
