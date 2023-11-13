const PoliceStation = require("../models/policeStation.model");
exports.newPoliceStationService = async (info) => {
    const newPoliceStation = await PoliceStation.create(info);
    return newPoliceStation;
}