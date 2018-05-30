const mocha = require("mocha");
const { expect } = require("chai");

// Module to test
const insertionSort = require("../Algorithms/insertionSort");
const mergeSort = require("../Algorithms/mergeSort");
const quickSort = require("../Algorithms/quickSort");

/**
 * Test suite to evaluate the responses from the
 * Algorithm Section.
 */

describe("Algorithms", () => {
  it("Insertion Sort", done => {
    const result = insertionSort([4, 2, 1, 22, 76, 12]);
    expect(result).to.be.an("array");
    expect(result).to.eql([1, 2, 4, 12, 22, 76]);
    done();
  });

  it("Merge Sort", done => {
    const result = mergeSort([3, 71, 321, 9, 14, 3]);
    expect(result).to.be.an("array");
    expect(result).to.eql([1, 3, 9, 14, 71, 321]);
    done();
  });

  it("Quick Sort", done => {
    const result = quickSort([12, 42, 1111, 2, 7, 32]);
    expect(result).to.be.an("array");
    expect(result).to.eql([2, 7, 12, 32, 42, 1111]);
    done();
  });
});
