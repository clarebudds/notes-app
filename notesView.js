class NotesView {
  constructor(model) {
    this.model = model;
    this.bodyEl = document.querySelector("body");
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
