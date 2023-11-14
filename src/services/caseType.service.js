const CaseType = require("../models/caseType.model");
exports.newCaseTypeService = async (caseinfo) => {
    const newCaseType = await CaseType.create(caseinfo);
    return newCaseType;
}
exports.getAllCaseTypeService = async () => {
    const allCaseType = await CaseType.find();
    return allCaseType;
}