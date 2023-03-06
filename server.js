const { Sequelize, UUID, UUIDV1 } = require('sequelize');
const express = require('express');
const path = require('path');
require('dotenv').config();
const Item = require('./models/item')
const db = new Sequelize(process.env.MY_DB);
const {faker} = require('@faker-js/faker')

const connectDB = require('./config/db');
const {createItem} = require('./seeds/item_factory.js')
const {seedDB} = require('./seeders/item_seed')


/* (async () => {
    await db.sync();
    await Item.bulkCreate(new Array(20).fill().map(i => createItem()));
})(); */

console.log(Item === db.models.Item); // true
(async () => {
    await Item.sync();
    await Item.bulkCreate(new Array(10).fill().map(createItem))
    await db.close()
})();

