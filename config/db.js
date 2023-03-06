const { Sequelize } = require('sequelize');
//const db = require('../models/index');

const db = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PW, {
  host: process.env.HOST,
  dialect: 'postgres'
,
pool: {
  max: 10,
  min: 0,
  acquire: 300000,
  idle: 10000
}},
);

const connectDB = async () => {
  
try {
    db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
}

module.exports = connectDB