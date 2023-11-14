const { newCaseTypeService, getAllCaseTypeService } = require("../services/caseType.service");

exports.newCaseType = async (req, res) => {
    try {
        const casetype = await newCaseTypeService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Case type created successfully!",
            data: casetype,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create new case type ! ",
            error: error.message,
        });
    }
}
exports.allCaseType = async (req, res) => {
    try {
        const casetype = await getAllCaseTypeService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Data found successfully!",
            data: casetype,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't found data ! ",
            error: error.message,
        });
    }
}