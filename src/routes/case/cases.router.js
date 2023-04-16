const express = require("express");
const caseRouter = express.Router();

const {
  agentAuth,
  verifyCertainToken,
  adminAuth,
} = require("../../utils/requireAuth");
const {
  createCase,
  closeCase,
  viewCases,
  certainCase,
} = require("./cases.controller");

caseRouter.post("/case", createCase);
caseRouter.post("/case/complete/:case_id", agentAuth, closeCase);
caseRouter.get("/case", agentAuth, viewCases);
caseRouter.get("/admin/case", adminAuth, viewCases);
caseRouter.get("/case/:case_id", certainCase);

module.exports = {
  caseRouter,
};
