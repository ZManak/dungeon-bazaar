const Item = require('../models/item');
const Maker = require('../models/maker');

Maker.hasMany(Item, {
    foreignKey: '_id'
});
Item.belongsTo(Maker);

