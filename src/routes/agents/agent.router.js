const express = require("express");
const agentDetails = express.Router();

const {} = require("../../utils/requireAuth");
const { modifyAgents, deleteAgent } = require("./agents.controller");

agentDetails.put("/agent/:agent_id", modifyAgents);
agentDetails.delete("/agent/:agent_id", deleteAgent);

module.exports = {
  agentDetails,
};
