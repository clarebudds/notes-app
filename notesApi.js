class NotesApi {
  loadNotes(noteName, callback) {
    //we can have different note files, and therefore we must distinguish as an argument, which one we call
    fetch("http://localhost:3000/notes/" + noteName) // this is GET/notes
      .then((n) => n.json())
      .then((data) => {
        return callback(data); // This callback function can query a particular property equal to the input value of a user, so that it returns only the relevant information.
      });
  }
}

module.exports = NotesApi;

/* Assumption: 
In order to store the data in a remote server, we will make future calls to a remote server
that stores the array of notes. 
When we would like to view these notes, 
we will call the method loadNotes(nameOfNote, aMethod(such as: for each note[that is an element in the array, create a div and append this element to that div])

Assumption: 
We are learning to communicate with API so that data can be stored remotely and not in a database, in order to access the data, 
we pass it to a Json object and then access a particular property within the entire hash that relates to the value in question 

[from guthubApi.js - in resources/example-4]

class GithubApi {
  getRepoInfo(repoName, callback) {
    fetch('https://api.github.com/repos/' + repoName)
      .then(n => n.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = GithubApi;
*/
