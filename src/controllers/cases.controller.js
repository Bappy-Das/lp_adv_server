const { newCaseService } = require("../services/cases.service");

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