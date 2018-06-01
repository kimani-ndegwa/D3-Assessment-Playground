const mocha = require("mocha");
const { expect } = require("chai");

// Module to test
const insertionSort = require("../Algorithms/insertionSort");
const mergeSort = require("../Algorithms/mergeSort");
const quickSort = require("../Algorithms/quickSort");
const heapSort = require("../Algorithms/heapSort");

/**
 * Test suite to evaluate the responses from the
 * Algorithm Section.
 */

describe("Sort Algorithms", () => {
  it("Insertion Sort", done => {
    const result = insertionSort([4, 2, 1, 22, 76, 12]);
    const result2 = insertionSort([14, 72, 61, 6, 17]);
    expect(result).to.be.an("array");
    expect(result2).to.be.an("array");
    expect(result).to.eql([1, 2, 4, 12, 22, 76]);
    expect(result2).to.eql([6, 14, 17, 61, 72]);
    done();
  });

  it("Merge Sort", done => {
    const result = mergeSort([3, 71, 9, 14, 1, 321]);
    expect(result).to.be.an("array");
    expect(result).to.eql([1, 3, 9, 14, 71, 321]);
    done();
  });

  it("Quick Sort", done => {
    const result = quickSort([12, 42, 111, 2, 7, 32]);
    expect(result).to.be.an("array");
    expect(result).to.eql([2, 7, 12, 32, 42, 111]);
    done();
  });

  it("Heap Sort", done => {
    const result = heapSort([13, 2, 1, 21, -1, -12]);
    expect(result).to.be.an("array");
    expect(result).to.be.eql([-12, -1, 1, 2, 13, 21]);
    done();
  });
});
