const { db } = require("../../utils/database");
const uuid = require("uuid");

function products(req, res) {
  const { name } = req.body;
  db("product")
    .returning("*")
    .insert({
      product_id: uuid.v4(),
      name,
    })
    .then((product) => {
      res.json(product[0]);
    })
    .catch((err) => res.status(400).json("error createing product"));
}

function viewProducts(req, res) {
  db.select("*")
    .from("product")
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json(err));
}

module.exports = {
  products,
  viewProducts,
};
