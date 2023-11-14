const { newPoliceStationService, allPoliceStationService } = require("../services/policeStation.service");

exports.newPoliceStation = async (req, res) => {
    try {
        const newStation = await newPoliceStationService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Police Station created successfully!",
            data: newStation,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create police station !",
            error: error.message,
        });
    }
}
exports.allPoliceStation = async (req, res) => {
    try {
        const allStation = await allPoliceStationService();
        res.status(200).json({
            status: "success",
            messgae: "Police Station found successfully!",
            data: allStation,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't found police station !",
            error: error.message,
        });
    }
}