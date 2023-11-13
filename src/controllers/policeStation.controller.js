const { newPoliceStationService } = require("../services/policeStation.service");

exports.newPoliceStation = async (req, res) => {
    try {
        const newPolice = await newPoliceStationService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Police Station created successfully!",
            data: newPolice,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create police station !",
            error: error.message,
        });
    }
}