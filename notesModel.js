class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;

/* 

All I can think of is that at some point,
we will actually be creating an api from the array created in the model, 
so that we can not worry about the 

Objectives [beginning of chapter 12]
-------------------------------------

In this section, you will discover with an example how we can use JavaScript
code to make network HTTP requests to a remote server, this way we can call 
remote APIs to fetch, create or update data.

Saving state
---------------
You'll notice that, if we reload the page, we'll loose our list of notes - 
this is because the notes, as all variables, are stored in memory by JavaScript. 
Every variable we use in the browser will be lost once the user reloads the page. 
We'll soon learn how we can fetch and update the state of our notes app on a remote server. */
