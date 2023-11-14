const Case = require("../models/cases.model")

exports.newCaseService = async (caseinfo) => {
    const newcase = await Case.create(caseinfo);
    return newcase;
}
exports.getAllCaseService = async () => {
    const newcase = await Case.find();
    return newcase;
}