require('dotenv').config();
const Maker = require('../models/maker');
const { db } = require('../utils/sequelize')
const { faker } = require('@faker-js/faker');



const createMaker = () => {
    return {
        _id: faker.datatype.uuid(),
        makerName: faker.company.name(),
        cif: faker.finance.account(8),
        address: faker.address.streetAddress(true)
    }
}

const fillMakers = async () => {
    try {
        await Maker.sync({ alter : true })
            .then(() => { Maker.bulkCreate(new Array(6).fill('').map(i => createMaker())),{ignoreDuplicates: true} })
    }
    catch (err) {
        console.log("Error de conexión; ", err);
    }
    finally {
        db.close();
        console.log("Éxito");
    }
}

fillMakers();
