const Item = require("../models/item");
const db = require('../config/db')

const seedDB = async (param) => {
    await Item.bulkCreate(new Array(20).fill('i').map(i => param))
        .then(()=>db.close())
    console.log("Seed");
 }
 


 module.exports = { seedDB }