const express = require("express");
const caseRouter = express.Router();

const {
  createCase,
  closeCase,
  viewCases,
  certainCase,
} = require("./cases.controller");

caseRouter.post("/case", createCase);
caseRouter.post("/case/complete/:case_id", closeCase);
caseRouter.get("/case", viewCases);
caseRouter.get("/case/:case_id", certainCase);

module.exports = {
  caseRouter,
};
