const Note = require("../models/note.model");
exports.newNoteService = async (info) => {
    const newNote = await Note.create(info);
    return newNote;
}