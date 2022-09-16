'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          colorName: 'black',
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now')
        },
        {
          colorName: 'yellow',
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now')
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
