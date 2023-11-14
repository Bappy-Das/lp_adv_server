const express = require("express");
const caseType = require("../../controllers/caseType.controller");
const router = express.Router();

router.post("/new-case-type", caseType.newCaseType);
router.get("/all-case-type", caseType.allCaseType);

module.exports = router;