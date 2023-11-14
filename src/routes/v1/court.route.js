const express = require("express");
const court = require("../../controllers/court.controller");
const router = express.Router();

router.post("/new-court", court.newCourt);
router.get("/allcourts", court.getAllCourt);

module.exports = router;