const express = require("express");
const agentLoginRouter = express.Router();

const { agentLogin } = require("./login.controller");

agentLoginRouter.post("/agent/login", agentLogin);

module.exports = {
  agentLoginRouter,
};
