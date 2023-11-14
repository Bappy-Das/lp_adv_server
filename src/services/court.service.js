const Court = require("../models/court.model");
exports.newCourtService = async (info) => {
    const newCourt = await Court.create(info);
    return newCourt;
}
exports.getAllCourtService = async () => {
    const courts = await Court.find();
    return courts;
}