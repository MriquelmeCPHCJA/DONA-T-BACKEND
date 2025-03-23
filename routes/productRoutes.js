const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.post("/create-product", createProduct); // localhost:3000/api/products/create-product

productRoutes.get("/all-products", getAllProducts); // localhost:3000/api/products/all-products

productRoutes.get("/product/:id", getProductById); // localhost:3000/api/products/product/:id

productRoutes.put("/update-product/:id", updateProductById); // localhost:3000/api/products/update-product/:id

productRoutes.delete("/delete-product/:id", deleteProductById); // localhost:3000/api/products/delete-product/:id

module.exports = productRoutes;
