const express = require("express");
const court = require("../../controllers/caseType.controller");
const router = express.Router();

router.post("/new-court", court.newCaseType);

module.exports = router;