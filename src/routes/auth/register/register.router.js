const express = require("express");
const registeredAgents = express.Router();

const { verifyCertainToken } = require("../../../utils/requireAuth");

const {
  registerAgent,
  getRegisteredAgent,
  registerCustomer,
  getRegisteredCustomer,
  certainCustomer,
  createAdmin,
} = require("./register.controller");

registeredAgents.post("/agent/register", registerAgent);
registeredAgents.get("/agents", getRegisteredAgent);
registeredAgents.post("/customer/register", registerCustomer);
registeredAgents.get("/customer", getRegisteredCustomer);
registeredAgents.get(
  "/customer/:customer_id",
  verifyCertainToken,
  certainCustomer
);
registeredAgents.post("/admin/register", createAdmin);

module.exports = {
  registeredAgents,
};
