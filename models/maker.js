const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../pool/db');

const Maker = db.define("Maker", {
    _id: {
        type: DataTypes.UUID,
        allowNull: false
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