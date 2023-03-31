const express = require("express");
const productRouter = express.Router();

const { products } = require("./products.controller");

productRouter.post("/product", products);

module.exports = {
  productRouter,
};
