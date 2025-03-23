const express = require("express");
const cartRoutes = express.Router();
const cartController = require("../controllers/cartController");

const authorization = require("../middleware/authorization");

cartRoutes.post("/create-cart", cartController.createCart);
cartRoutes.get("/get-cart", authorization, cartController.getCart);
cartRoutes.put("/edit-cart", authorization, cartController.editCart);

module.exports = cartRoutes;