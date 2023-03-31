const { db } = require("../../utils/database");
const uuid = require("uuid");

function createCase(req, res) {
  const { product_id, issue_description, user_id } = req.body;
  db("cases")
    .returning("*")
    .insert({
      product_id,
      issue_description,
      user_id,
      case_id: uuid.v4(),
    })
    .then((cases) => {
      res.json(cases[0]);
    })
    .catch((err) => res.status(400).json("error creating cases"));
}

module.exports = {
  createCase,
};
