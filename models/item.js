const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize("postgres://ochmfntt:C-JtJJ0jNUNcVaKBKKtp2kmxgNCLTm7U@mouse.db.elephantsql.com/ochmfntt");
/* const db = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PW, {
  host: process.env.HOST,
  dialect: 'postgres'
  ,
  pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
},
);
 */
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