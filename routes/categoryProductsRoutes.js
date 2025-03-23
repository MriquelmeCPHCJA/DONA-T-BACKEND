const express = require("express");
const {
  createCategoryProduct,
  getAllCategoryProducts,
  getCategoryProductById,
  updateCategoryProductById,
  deleteCategoryProductById,
} = require("../controllers/categoryProductController");

const categoryRoutes = express.Router();

categoryRoutes.post("/create-category", createCategoryProduct); // localhost:3000/api/category/create-category

categoryRoutes.get("/all-category", getAllCategoryProducts); // localhost:3000/api/category/all-category

categoryRoutes.get("/category/:id", getCategoryProductById); // localhost:3000/api/category/category/:id

categoryRoutes.put("/update-category/:id", updateCategoryProductById); // localhost:3000/api/category/update-category/:id

categoryRoutes.delete("/delete-category/:id", deleteCategoryProductById); // localhost:3000/api/category/delete-category/:id

module.exports = categoryRoutes;
