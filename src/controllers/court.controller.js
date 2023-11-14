const { newCourtService, getAllCourtService } = require("../services/court.service");

exports.newCourt = async (req, res) => {
    try {
        const newcourt = await newCourtService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Court created successfully!",
            data: newcourt,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create new court ! ",
            error: error.message,
        });
    }
}
exports.getAllCourt = async (req, res) => {
    try {
        const allcourt = await getAllCourtService();
        res.status(200).json({
            status: "success",
            messgae: "Data found successfully!",
            data: allcourt,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get all court ! ",
            error: error.message,
        });
    }
}