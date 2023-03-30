const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { registeredAgents } = require("./routes/auth/register/register.router");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(registeredAgents);

module.exports = {
  app,
};
