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

  it("Should return a home message on index route i.e GET Request", done => {
    request(app)
      .get("/")
      .end((request, response) => {
        expect(response.body).to.equal("Welcome to the home API route.");
        done();
      });
  });

  it("Should return a generic message on POST request", done => {
    request(app)
      .post("/person")
      .send({
        data: "Person post test."
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((request, response) => {
        expect(response.status).to.equal(201);
        expect(response.body.data.data).to.be.equal("Person post test.");
        done();
      });
  });

  it("Should return a generic message on PUT request", done => {
    request(app)
      .put("/person")
      .send({
        data: "Person put test."
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((request, response) => {
        expect(response.status).to.equal(200);
        expect(response.body.data.data).to.be.equal("Person put test.");
        done();
      });
  });

  it("Should return a generic message on DELETE request", done => {
    request(app)
      .delete("/person")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((request, response) => {
        expect(response.status).to.equal(204);
        done();
      });
  });
});
