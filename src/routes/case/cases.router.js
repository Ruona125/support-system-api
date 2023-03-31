const express = require("express");
const caseRouter = express.Router();

const { createCase } = require("./cases.controller");

caseRouter.post("/case", createCase);

module.exports = {
  caseRouter,
};
