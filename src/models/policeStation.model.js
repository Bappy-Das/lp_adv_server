const mongoose = require("mongoose");

const policeStationSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: [true, "Please provide a police station name"]
    },
    officer: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true,
});