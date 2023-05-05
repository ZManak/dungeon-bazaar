const { Op } = require("sequelize");
const { Product, Maker } = require("../models");

const getItems = async (req, res) => {
  try {
    let items = await Product.findAll({ include: Maker });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const nameDesc = async (req, res) => {
  try {
    let items = await Product.findAll({
      include: Maker,
      order: [["itemName", "DESC"]],
    });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const nameAsc = async (req, res) => {
  try {
    let items = await Product.findAll({
      include: Maker,
      order: [["itemName", "ASC"]],
    });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const priceDesc = async (req, res) => {
  try {
    let items = await Product.findAll({
      include: Maker,
      order: [["price", "DESC"]],
    });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const priceAsc = async (req, res) => {
  try {
    let items = await Product.findAll({
      include: Maker,
      order: [["price", "ASC"]],
    });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const ratingDesc = async (req, res) => {
  try {
    let items = await Product.findAll({
      include: Maker,
      order: [["rating", "DESC"]],
    });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const ratingAsc = async (req, res) => {
  try {
    let items = await Product.findAll({
      include: Maker,
      order: [["rating", "ASC"]],
    });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

const search = async (req, res) => {
  try {
    const item = req.params.itemName;
    let result = await Product.findAll({
      include: Maker,
      where: {
        itemName: {
          [Op.iLike]: `%${item}%`,
        },
      },
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).json({ msj: err.message });
  }
};

module.exports = {
  getItems,
  nameAsc,
  nameDesc,
  priceAsc,
  priceDesc,
  ratingAsc,
  ratingDesc,
  search,
};
