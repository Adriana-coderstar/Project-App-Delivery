'use strict';

module.exports = {
  async up(queryInterface) { },

  async down(queryInterface) {
    await queryInterface.bulkDelete('sales', null, {});
  },
};