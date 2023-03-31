const express = require("express");
const caseRouter = express.Router();

const { createCase, closeCase } = require("./cases.controller");

caseRouter.post("/case", createCase);
caseRouter.post("/case/complete/:case_id", closeCase);

module.exports = {
  caseRouter,
};
