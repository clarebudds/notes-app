const NotesApi = require("./notesApi");

require("jest-fetch-mock").enableMocks();

describe("NotesAPI class", () => {
  it("calls fetch and loads data", async () => {
    //remove async if this doesnt work
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(
      JSON.stringify({
        // ['This note is coming from the server']
        name: "Some value",
        id: 123,
      })
    );

    notesApi.loadNotes((responseData) => {
      expect(responseData.name).toBe("Some value");
      expect(responseData.id).toBe(123);
    });
  });
});

// const GithubApi = require('./githubApi');

// // This makes `fetch` available to our test
// // (it is not by default, as normally `fetch` is only
// // available within the browser)
// require('jest-fetch-mock').enableMocks()

// describe('Github class', () => {
//   it('calls fetch and loads repo info', async () => {
//     const api = new GithubApi();
//     fetch.mockResponseOnce(JSON.stringify({
//       name: 'rails/rails',
//       description: 'Ruby on Rails'
//     }));

//     api.getRepoInfo('rails/rails', (repoInfo) => {
//       expect(repoInfo.description).toBe('Ruby on Rails');
//     });
//   });
// });
