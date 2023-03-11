'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('Products', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
        },
        itemName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull:false
        },
        rating: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        makerId: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {model: 'Makers'},
          onDelete: 'CASCADE'
      }
    }
   )
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('Products');
     
  }
};
