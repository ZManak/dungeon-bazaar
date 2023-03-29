require('dotenv').config();
const {DataTypes} = require('sequelize');
const Item = require('../models/item');
const Maker = require('../models/maker');
const {db} = require('../utils/sequelize')
const {faker} = require('@faker-js/faker');

Item.belongsTo(Maker);
Maker.hasMany(Item);

/* const createItem = () => {
    return Item.create({
        id: faker.datatype.uuid(),
        itemName: faker.commerce.productName(),
        price: faker.commerce.price(1, 99999, 0),
        rating: faker.datatype.number({min: 0, max: 10, precision: 0.5}),
    });
} */

const equip = async() => {
    try{
    await Item.sync({ alter : true })
        .then(() => { Item.bulkCreate(new Array(20).fill().map((element,index) => ({
            itemName: faker.commerce.productName(),
            price: faker.commerce.price(1, 99999, 0),
            rating: faker.datatype.number({min: 0, max: 10, precision: 0.5}),
            makerId
        }))
        )})}
    catch (err){
        console.log("Error de conexión; ", err);
    }
    finally{
        console.log("Éxito");
    }
}

equip()

module.export = { equip };

