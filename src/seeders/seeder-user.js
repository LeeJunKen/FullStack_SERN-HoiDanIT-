'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123',
      firstName: 'Eric',
      lastName: 'HoidanIt',
      address: 'USA',
      phonenumber: '090902323',
      gender: 1,
      typeRole: 'R1',
      keyRole: 'ROLE',
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
