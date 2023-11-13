const mongoose = require("mongoose");
const validator = require("validator");


const caseSchema = mongoose.Schema({
    fileNo: {
        type: String,
        required: [true, "Please provide a file no."],
        trim: true,
    },
    caseType: {
        type: String,
        required: [true, "Please select correct case type"],
        trim: true,
    },
    caseNo: {
        type: String,
        required: [true, "Please provide case no"],
        trim: true,
    },
    court: {
        type: String,
        required: [true, "Please select court"],
        trim: true,
    },
    policeStation: {
        type: String,
        required: [true, "Please select a police station"],
        trim: true,
    },
    fixedFor: {
        type: String,
        required: [true, "Please provide fixed for"],
        trim: true,
    },
    firstParty: {
        type: String,
        required: [true, "Please provide first party"],
        trim: true,
    },
    secondParty: {
        type: String,
        required: [true, "Please provide second party"],
        trim: true,
    },
    appointedBy: {
        type: String,
        required: [true, "Please provide appointed by"],
        trim: true,
    },
    contact: {
        type: String,
        required: [true, "Please provide contact number"],
        trim: true,
    },
    lawAndSection: {
        type: String,
        required: [true, "Please provide Law & Section"],
        trim: true,
    },
    caseDate: {
        type: String,
        required: [true, "Please provide Case date"],
        trim: true,
    },
    comment: {
        type: String,
        required: [true, "Please provide Case date"],
        trim: true,
    },
}, {
    timestamps: true,
});


const Case = mongoose.model("Case", caseSchema);
module.exports = Case;