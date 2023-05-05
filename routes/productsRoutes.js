const express = require("express");

const itemControllers = require("../controllers/productsControllers");
const itemRoutes = express.Router();
const fs = require("fs");

itemRoutes.get("/", itemControllers.getItems);
itemRoutes.get("/nameAsc", itemControllers.nameAsc);
itemRoutes.get("/nameDesc", itemControllers.nameDesc);
itemRoutes.get("/priceAsc", itemControllers.priceAsc);
itemRoutes.get("/priceDesc", itemControllers.priceDesc);
itemRoutes.get("/ratingDesc", itemControllers.ratingDesc);
itemRoutes.get("/ratingAsc", itemControllers.ratingAsc);
itemRoutes.get("/search/:itemName", itemControllers.search);

module.exports = itemRoutes;
