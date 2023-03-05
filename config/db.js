const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.MY_DB);

const connectDB = async () => {
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connectDB; 