const express = require('express');

const itemControllers = require('../controllers/productsControllers');
const itemRoutes = express.Router();

itemRoutes.get('/', itemControllers.getItems);
itemRoutes.get('/nameAsc', itemControllers.nameAsc);
itemRoutes.get('/nameDesc', itemControllers.nameDesc);


module.exports = itemRoutes;