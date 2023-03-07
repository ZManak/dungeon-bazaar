const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/sequelize');

const Maker = db.define("Maker", {
    _id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    makerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cif: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Maker