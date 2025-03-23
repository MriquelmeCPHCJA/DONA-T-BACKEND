const mongoose = require("mongoose");

const categoryProductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const CategoryProducts = mongoose.model(
  "CategoryProducts",
  categoryProductsSchema
);

module.exports = CategoryProducts;
