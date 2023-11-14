const caseController = require("../../controllers/cases.controller");
const express = require("express");
const router = express.Router();

router.post("/new-case", caseController.createCase);
router.get("/all-case", caseController.allCase);

module.exports = router;