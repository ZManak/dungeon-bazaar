const {  Sequelize, DataTypes, ARRAY } = require('sequelize');
const {db} = require('../utils/sequelize');
const { RandomModule } = require('@faker-js/faker');

const Item = db.define("Item", {
  _id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey:true
  },
   itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL(10,1),
    allowNull: false
  },
}, {
  timestamps: false,
});

module.exports = Item