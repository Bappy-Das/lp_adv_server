const mongoose = require("mongoose");

const courtSchema = mongoose.Schema({
    courtName: {
        type: String,
        required: [true, "Please provide a court name"],
        trim: true
    }

}, {
    timestamps: true,
});

const Court = mongoose.model("Court", courtSchema);
module.exports = Court;