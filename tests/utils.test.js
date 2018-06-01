const mocha = require("mocha");
const { expect } = require("chai");

const { removeFromArray } = require("../utils");

describe("Test utility functions", () => {
  let array;

  before(done => {
    array = [1, 2, 3, 4];
    done();
  });
  it("Returns an array after removing an item", done => {
    expect(array.length).to.be.equal(4);
    removeFromArray(array, 3);
    expect(array.length).to.be.equal(3);
    expect(array).to.eql([1, 2, 4]);
    done();
  });
});
