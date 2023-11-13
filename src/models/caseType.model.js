const mongoose = require("mongoose");

const caseTypeSchema = mongoose.Schema({
    caseType: {
        type: String,
        required: [true, "Please provide case type"],
        trim: true,
    }
}, {
    timestamps: true,
});

const CaseType = mongoose.model("CaseType", caseTypeSchema);
module.exports = CaseType;