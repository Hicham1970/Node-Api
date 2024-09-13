const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter your quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter your price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
