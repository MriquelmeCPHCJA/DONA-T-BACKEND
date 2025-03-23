const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: function () {
        return this.isNew;
      },
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return this.isNew;
      },
      trim: true,
    },
    nameUser: {
      firstName: {
        type: String,
        required: function () {
          return this.isNew;
        },
        trim: true,
      },
      lastName: {
        type: String,
        required: function () {
          return this.isNew;
        },
        trim: true,
      },
    },
    addressUser: {
      type: String,
    },
    phoneUser: {
      type: Number,
    },
    cart: {
      type: mongoose.Types.ObjectId,
      ref: "Cart",
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
