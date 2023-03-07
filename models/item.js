const { Sequelize, DataTypes } = require('sequelize');
const {db} = require('../pool/db');

const Item = db.define("Item", {
  _id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  maker: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Item