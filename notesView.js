class NotesView {
  constructor(model) {
    this.model = model;
    this.bodyEl = document.querySelector("body");

    document
      .querySelector("#button-note-input")
      .addEventListener("click", () => {
        const newNote = document.querySelector("#note-input").value;
        this.addNewNote(newNote);
      });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.bodyEl.append(noteEl);
    });
  }
}

module.exports = NotesView;
