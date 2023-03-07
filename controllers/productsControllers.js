const Item = require('../models/item')

const getItems = async (req, res) => {
    try {
        let items = await Item.findAll();
        return res.status(200).send(items)
    }
    catch (err) {
        return res.status(400).json({ msj: err.message })
    }
}

module.exports = {getItems}