const { db } = require("../../utils/database");
const uuid = require("uuid");

function products(req, res) {
  const { product_name } = req.body;
  db("product")
    .returning("*")
    .insert({
      product_id: uuid.v4(),
      product_name,
    })
    .then((product) => {
      res.json(product[0]);
    })
    .catch((err) => res.status(400).json("error createing product"));
}

module.exports = {
  products,
};
