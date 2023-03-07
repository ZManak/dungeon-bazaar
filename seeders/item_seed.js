require('dotenv').config();
const Item = require('../models/item');
const {db} = require('../pool/db')
const {faker} = require('@faker-js/faker');


const createItem = () => {
    return{
        _id: faker.datatype.uuid(),
        itemName: faker.commerce.productName(),
        price: faker.commerce.price(1, 99999, 0),
        rating: faker.datatype.number({min: 0, max: 10, precision: 0.5}),
        maker:  faker.datatype.number({min: 0, max: 5, precision: 1})
    }
}

const equip = async() => {
    try{
    await Item.sync({force:true})
        .then(() => { Item.bulkCreate(new Array(20).fill().map(i => createItem())) })
    }
    catch (err){
        console.log("Error de conexión; ", err);
    }
    finally{
        db.close();
        console.log("Éxito");
    }
}

equip()

module.export = { createItem, equip };

