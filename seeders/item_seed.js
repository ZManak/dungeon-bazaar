const {Sequelize} = require('sequelize');
const Item = require('../models/item');
//const db = require('../pool/db')
const {faker} = require('@faker-js/faker');
const {reachDB} = require('../pool/db')


const db = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PW, {
    host: process.env.HOST,
    dialect: 'postgres'
    
})


const createItem = () => {
    return{
        _id: faker.datatype.uuid(),
        itemName: faker.commerce.productName(),
        price: faker.commerce.price(1, 99999, 0),
        rating: faker.datatype.number({min: 0, max: 10, precision: 0.5}),
        maker:  faker.datatype.number({min: 0, max: 5, precision: 1})
    }
}

/* const getItems =  */(async () => {
    reachDB
    await db.sync();
    await Item.bulkCreate(new Array(20).fill().map(i => createItem))
    //await db.close()
})();

