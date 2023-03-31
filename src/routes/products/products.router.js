const express = require("express");
const productRouter = express.Router();

const { products, viewProducts } = require("./products.controller");

productRouter.post("/product", products);
productRouter.get("/product", viewProducts);

module.exports = {
  productRouter,
};
