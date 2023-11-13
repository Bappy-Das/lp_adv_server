const noteController = require("../../controllers/note.controller");
const express = require("express");
const router = express.Router();


router.post("/newnote", noteController.newNote);

module.exports = router;