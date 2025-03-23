const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    nameProduct: {
      type: String,
      required: function () {
        return this.isNew;
      },
      trim: true,
      unique: true,
    },
    priceProduct: {
      type: Number,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    quantityProduct: {
      type: Number,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    descriptionProduct: {
      descCorta: {
        type: String,
        trim: true,
      },
      descLarga: {
        type: String,
        trim: true,
      },
      items: [
        {
          type: String,
          trim: true,
        },
      ],
    },

    categoryProduct: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoryProducts",
      },
    ],
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
