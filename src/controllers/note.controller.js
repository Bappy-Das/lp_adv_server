const { newNoteService } = require("../services/note.service");

exports.newNote = async (req, res) => {
    try {
        const note = await newNoteService(req.body);
        res.status(200).json({
            status: "success",
            messgae: "Note created successfully!",
            data: note,
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create note ! ",
            error: error.message,
        });
    }
}