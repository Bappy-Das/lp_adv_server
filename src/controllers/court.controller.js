const { newCourtService } = require("../services/court.service");

exports.newCourt = async (req, res) => {
    try {
        const newcase = await newCourtService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Court created successfully!",
            data: newcase,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create new court ! ",
            error: error.message,
        });
    }
}