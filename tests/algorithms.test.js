const mocha = require("mocha");
const { expect } = require("chai");

// Module to test
const insertionSort = require("../Algorithms/insertionSort");

/**
 * Test suite to evaluate the responses from the
 * Algorithm Section.
 */

describe("Algorithms", () => {
  it("Insertion Sort", done => {
    const result = insertionSort([4, 2, 1, 22, 76, 12]);
    expect(result).to.equal([1, 2, 4, 12, 22, 76]);
    done();
  });
});
