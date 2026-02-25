const Mongoose = require("mongoose");

const NoteApp = new Mongoose.Schema({
  Title: String,
  Description: String,
});

const Note = Mongoose.model("Note", NoteApp);
module.exports = Note;
