const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
const view = new NotesView(model);
model.addNote("A first note");
model.addNote("Another one");

view.displayNotes();
