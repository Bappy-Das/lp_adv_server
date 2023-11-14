const { newCaseService, getAllCaseService } = require("../services/cases.service");

exports.createCase = async (req, res) => {
    try {
        const newcase = await newCaseService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Case created successfully!",
            data: newcase,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create new case ! ",
            error: error.message,
        });
    }
}
exports.allCase = async (req, res) => {
    try {
        const cases = await getAllCaseService();
        res.status(200).json({
            status: "success",
            messgae: "Case found successfully!",
            data: cases,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't found data ! ",
            error: error.message,
        });
    }
}