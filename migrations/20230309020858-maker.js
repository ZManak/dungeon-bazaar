'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Makers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      makerName: {
        type: Sequelize.STRING
      },
      cif: {
        type: Sequelize.INTEGER(8)
      },
      address: {
        type: Sequelize.STRING
      }    
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Makers');
    
  }
};
