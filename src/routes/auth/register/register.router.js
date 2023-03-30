const express = require("express");
const registeredAgents = express.Router();

const { registerAgent, getRegisteredAgent } = require("./register.controller");

registeredAgents.post("/agent/register", registerAgent);
registeredAgents.get("/agents", getRegisteredAgent);

module.exports = {
  registeredAgents,
};
