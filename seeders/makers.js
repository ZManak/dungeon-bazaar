'use strict';
const { faker } = require('@faker-js/faker');

/* const makers  = new Array(5).fill().map(i => ({
id: faker.datatype.uuid(),
makerName: faker.company.name(),
cif: faker.finance.account(8),
address: faker.address.streetAddress(true)
})) */
[{id: '16378580-151b-48fb-af68-e0e3c191d514', 
makerName: faker.company.name(),
cif: faker.finance.account(8),
address: faker.address.streetAddress(true)
},
{id: '55a5bbe6-beba-4087-90a1-b0c3d47aeb68',
makerName: faker.company.name(),
cif: faker.finance.account(8),
address: faker.address.streetAddress(true),
},
{id: '63842bfe-8e5f-4705-afc4-4ebf0d4c342d',
makerName: faker.company.name(),
cif: faker.finance.account(8),
address: faker.address.streetAddress(true),
},
{id:'a06f3ac9-f0d0-4fb8-aac5-df8f866c13c5',
makerName: faker.company.name(),
cif: faker.finance.account(8),
address: faker.address.streetAddress(true)},
{id:'db2754a4-963b-43c4-a063-0aa28e65187b',
makerName: faker.company.name(),
cif: faker.finance.account(8),
address: faker.address.streetAddress(true)}]


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Makers', makers)
        },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Makers', null, {});
  }
}
      