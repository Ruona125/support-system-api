const { knex } = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "ruona",
    port: 5432,
    password: "",
    database: "supportsystem",
  },
});

module.exports = {
  db,
};
