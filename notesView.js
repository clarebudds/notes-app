class NotesView {
  constructor(model) {
    this.model = model;
    this.bodyEl = document.querySelector("body");

    this.inputEl = document.querySelector("#note-input");
    this.inputButtonEl = document.querySelector("#button-note-input");

    this.inputButtonEl.addEventListener("click", () => {
      this.model.addNote(this.inputEl.value);
      console.log(this.model.getNotes());
      this.displayNotes();
    });
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
