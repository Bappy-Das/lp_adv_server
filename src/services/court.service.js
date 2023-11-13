const Court = require("../models/court.model");
exports.newCourtService = async (info) => {
    const newCourt = await Court.create(info);
    return newCourt;
}