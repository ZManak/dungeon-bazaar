'use strict';
const { faker } = require('@faker-js/faker');

const batch1 = new Array(5).fill().map(i => ({itemName: faker.commerce.productName(),
  id: faker.datatype.uuid(),
  price: faker.commerce.price(1, 5000, 0),
  rating: faker.datatype.number({ min: 0, max: 10, precision: 0.25 }),
  makerId: "16378580-151b-48fb-af68-e0e3c191d514"}
))

const batch2 = new Array(5).fill().map(i => ({itemName: faker.commerce.productName(),
  id: faker.datatype.uuid(),
  price: faker.commerce.price(1, 5000, 0),
  rating: faker.datatype.number({ min: 0, max: 10, precision: 0.25 }),
  makerId: "55a5bbe6-beba-4087-90a1-b0c3d47aeb68"}
))

const batch3 = new Array(5).fill().map(i => ({itemName: faker.commerce.productName(),
  id: faker.datatype.uuid(),
  price: faker.commerce.price(1, 5000, 0),
  rating: faker.datatype.number({ min: 0, max: 10, precision: 0.25 }),
  makerId: "63842bfe-8e5f-4705-afc4-4ebf0d4c342d"}
))

const batch4 = new Array(5).fill().map(i => ({itemName: faker.commerce.productName(),
  id: faker.datatype.uuid(),
  price: faker.commerce.price(1, 5000, 0),
  rating: faker.datatype.number({ min: 0, max: 10, precision: 0.25 }),
  makerId: "a06f3ac9-f0d0-4fb8-aac5-df8f866c13c5"}
))

const batch5 = new Array(5).fill().map(i => ({itemName: faker.commerce.productName(),
  id: faker.datatype.uuid(),
  price: faker.commerce.price(1, 5000, 0),
  rating: faker.datatype.number({ min: 0, max: 10, precision: 0.25 }),
  makerId: "db2754a4-963b-43c4-a063-0aa28e65187b"}
))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Products', [...batch1, ...batch2, ...batch3, ...batch4, ...batch5] )
    
    /* await queryInterface.bulkInsert('Products',
      new Array(20).fill().map(i => ({
        itemName: faker.commerce.productName(),
        price: faker.commerce.price(1, 5000, 0),
        rating: faker.datatype.number({ min: 0, max: 10, precision: 0.5 }), 
      }
      ))
    )
 */  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
