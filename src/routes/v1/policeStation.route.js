const policeStationController = require("../../controllers/policeStation.controller");
const express = require("express");
const router = express.Router();

router.post("/new-police-station", policeStationController.newPoliceStation);

module.exports = router;