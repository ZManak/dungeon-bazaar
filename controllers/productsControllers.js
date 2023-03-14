const {Product, Maker} = require('../models')

const getItems = async (req, res) => {
    try {
        let items = await Product.findAll({include: Maker});
        return res.status(200).send(items)
    }
    catch (err) {
        return res.status(400).json({ msj: err.message })
    }
}

const nameDesc = async (req, res) => {
    try{
        let items = await Product.findAll({
            include: Maker,
            order:[
                ['itemName', 'DESC']
            ]});
        return res.status(200).send(items)
    }
    catch (err) {
        return res.status(400).json({ msj: err.message })
    }
}
const nameAsc = async (req, res) => {
    try{
        let items = await Product.findAll({
            include: Maker,
            order:[
                ['itemName', 'ASC']
            ]});
        return res.status(200).send(items)
    }
    catch (err) {
        return res.status(400).json({ msj: err.message })
    }
}


module.exports = {getItems,
nameAsc,
nameDesc}