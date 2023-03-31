const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { registeredAgents } = require("./routes/auth/register/register.router");
const { agentLoginRouter } = require("./routes/auth/login/login.router");
const { productRouter } = require("./routes/products/products.router.js");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(registeredAgents);
app.use(agentLoginRouter);
app.use(productRouter);

module.exports = {
  app,
};
