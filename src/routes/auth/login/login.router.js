const express = require("express");
const agentLoginRouter = express.Router();

const { agentLogin, customerLogins } = require("./login.controller");

agentLoginRouter.post("/agent/login", agentLogin);
agentLoginRouter.post("/customer/login", customerLogins);

module.exports = {
  agentLoginRouter,
};
