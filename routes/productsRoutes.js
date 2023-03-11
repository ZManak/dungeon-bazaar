const express = require('express');

const itemControllers = require('../controllers/productsControllers');
const itemRoutes = express.Router();

itemRoutes.get('/', itemControllers.getItems);


module.exports = itemRoutes;