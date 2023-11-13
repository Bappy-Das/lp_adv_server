const policeStationController = require("../../controllers/policeStation.controller");
const express = require("express");
const router = express.Router();

router.post("/new-case", policeStationController.newPoliceStation);

module.exports = router;