'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Anna',
          lastName: 'Smith',
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now'),
        },
        {
          firstName: 'Benjamin',
          lastName: 'Horse',
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now'),
        },
        {
          firstName: 'Arnold',
          lastName: 'Lutik',
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
  }
};
