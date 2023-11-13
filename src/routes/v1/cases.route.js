const caseController = require("../../controllers/cases.controller");
const express = require("express");
const router = express.Router();

router.post("/new-case", caseController.createCase);

module.exports = router;