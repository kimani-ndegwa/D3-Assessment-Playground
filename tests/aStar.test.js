const mocha = require("mocha");
const { expect } = require("chai");

// Get the Spot
const Spot = require("../DataStructures/spot");

// Utils
const { generate2DArray } = require("../utils");

// Module
const AStarAlgortihm = require("../Algorithms/AStarAlgorithm");

describe("A Star Algorithm", () => {
  let testArray, start, end, end2;
  before(done => {
    testArray = generate2DArray();
    start = testArray[0][0];
    end = testArray[0][0];
    end2 = testArray[4][4];
    done();
  });
  it("Returns a single path when the start is the end", done => {
    let path = AStarAlgortihm(start, end);
    expect(path).to.be.an("array");
    expect(path.length).to.be.equal(1);
    done();
  });

  it("Returns many paths when the start and end are far apart", done => {
    let path = AStarAlgortihm(start, end2);
    expect(path).to.be.an("array");
    expect(path.length).to.be.greaterThan(1);
    done();
  });
});
