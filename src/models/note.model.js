const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, "Please provide a full description"],
        trim: true
    }

}, {
    timestamps: true,
});

const TodosNote = mongoose.model("TodosNote", todoSchema);
module.exports = TodosNote;