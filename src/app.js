require("dotenv").config();
const express = require("express");
const app = express();
const Database = require("./config/Database");
const NoteData = require("./model/note.model");
const path = require("path");
const cors = require("cors");

Database();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

app.post("/api/notes", async (req, res) => {
  const { Title, Description } = req.body;

  const Data = await NoteData.create({
    Title,
    Description,
  });

  res.status(201).json({
    Message: "Post Request Done...",
    Data,
  });
});

app.get("/api/notes", async (req, res) => {
  const data = await NoteData.find();
  res.status(200).json(data);
});

app.delete("/api/notes/:idx", async (req, res) => {
  const Index = req.params.idx;
  const data = await NoteData.findByIdAndDelete(Index);
  res.status(200).json({
    Message: "Delete Request Done... ",
  });
});
 
app.patch("/api/notes/:idx", async (req, res) => {
  const Index = req.params.idx;
  const { Title, Description } = req.body;
  const data = await NoteData.findByIdAndUpdate(Index, { Title, Description });
  res.status(200).json({
    Message: "Patch Request Done...",
    data,
  });
});



app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});


module.exports = app;
