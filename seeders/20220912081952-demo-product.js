'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          productName: 'product1',
          user_id: 33,
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now')
        },
        {
          productName: 'product2',
          user_id: 34,
          createdAt: Sequelize.fn('now'),
          updatedAt: Sequelize.fn('now')
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
  }
};
