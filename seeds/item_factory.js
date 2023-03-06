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


module.exports = { createItem }
