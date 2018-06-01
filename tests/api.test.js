const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");

// Import simple App module
let app = require("../API");

describe("API set up tests", () => {
  before(done => {
    app.listen(err => {
      if (err) return err;
      done();
    });
  });

  it("Check test environment", done => {
    expect(process.env.NODE_ENV).to.be.equal("testing");
    done();
  });

  it("Should return a home message on index route", done => {
    request(app)
      .get("/")
      .end((request, response) => {
        expect(response.body).to.equal("Welcome to the home API route.");
        done();
      });
  });
});
