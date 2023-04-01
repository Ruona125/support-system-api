const express = require("express");
const caseRouter = express.Router();

const { agentAuth, verifyCertainToken } = require("../../utils/requireAuth");
const {
  createCase,
  closeCase,
  viewCases,
  certainCase,
} = require("./cases.controller");

caseRouter.post("/case", createCase);
caseRouter.post("/case/complete/:case_id", closeCase);
caseRouter.get("/case", agentAuth, viewCases);
caseRouter.get("/case/:case_id", certainCase);

module.exports = {
  caseRouter,
};
