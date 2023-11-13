const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    note: {
        type: String,
        trim: true,
        require: [true, "Please provide note first"]
    }
}, {
    timestamps: true
});

const Note = mongoose.Schema("Note", noteSchema);
module.exports = Note;