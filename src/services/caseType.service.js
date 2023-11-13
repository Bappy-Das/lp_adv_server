const CaseType = require("../models/caseType.model");
exports.newCaseTypeService = async (caseinfo) => {
    const newCaseType = await CaseType.create(caseinfo);
    return newCaseType;
}