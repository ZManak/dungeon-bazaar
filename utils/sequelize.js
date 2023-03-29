const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PW, {
    host: process.env.HOST,
    dialect: 'postgres'
    ,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
},
);

const reachDB = async () => {

    try {
        db.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

reachDB()

module.exports = { reachDB, db } 