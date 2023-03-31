const express = require("express");
const registeredAgents = express.Router();

const {
  registerAgent,
  getRegisteredAgent,
  registerCustomer,
  getRegisteredCustomer,
} = require("./register.controller");

registeredAgents.post("/agent/register", registerAgent);
registeredAgents.get("/agents", getRegisteredAgent);
registeredAgents.post("/customer/register", registerCustomer);
registeredAgents.get("/customer", getRegisteredCustomer);

module.exports = {
  registeredAgents,
};
