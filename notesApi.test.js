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
      expect(responseData).toEqual({
        name: "Some value",
        id: 123,
      });
    });
  });
});
