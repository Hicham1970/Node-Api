const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/products.model.js");
const productRoute = require("./routes/product.route");

const app = express();
dotenv.config();
const MONGOURL = process.env.MONGOURL;

// use the Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Connection to the Data base
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
