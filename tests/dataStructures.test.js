const mocha = require("mocha");
const { expect } = require("chai");

/**
 * Test the Data Strutures Created and used for the searches
 */

// Modules.
const Node = require("../DataStructures/node");
const Graph = require("../DataStructures/graph");
const Spot = require("../DataStructures/spot");

// helpers
const { generate2DArray } = require("../utils");

describe("Data Structures", () => {
  let testNode, testGraph, testSpot, grid;

  before("Initialise the graph and node", done => {
    testNode = new Node("value");
    testGraph = new Graph();
    testSpot = new Spot();

    done();
  });

  it("Initialises Node correctly", done => {
    expect(testNode.value).to.equal("value");
    expect(testNode.searched).to.be.false;
    expect(testNode.parent).to.be.null;
    expect(testNode.edges).to.be.an("array");
    expect(testNode.edges.length).to.equal(0);
    expect(testNode.addEdge).to.be.a("function");
    done();
  });

  it("Initialises Graph correctly", done => {
    expect(testGraph.nodes).to.be.an("array");
    expect(testGraph.nodes.length).to.equal(0);
    expect(testGraph.graph).to.be.an("object");
    expect(testGraph.graph).to.be.empty;
    expect(testGraph.addNode).to.be.a("function");
    expect(testGraph.getNode).to.be.a("function");
    expect(testGraph.setStart).to.be.a("function");
    expect(testGraph.setEnd).to.be.a("function");
    done();
  });

  it("Initialises Spot correctly", done => {
    expect(testSpot.i).to.be.undefined;
    testSpot = new Spot(1, 2);
    expect(testSpot.j).to.equal(2);
    expect(testSpot.f).to.equal(0); // F Score
    expect(testSpot.g).to.equal(0); // G Score
    expect(testSpot.h).to.equal(0); // H Score
    expect(testSpot.neighbours).to.be.an("array");
    expect(testSpot.neighbours.length).to.equal(0);
    done();
  });

  it("Spot generates neighbours", done => {
    // After getting the arrays.
    grid = generate2DArray();
    expect(grid[0][0].neighbours).to.be.an("array");
    expect(grid[0][0].neighbours.length).to.be.greaterThan(0);
    done();
  });

  it("Evaluates spots Correctly", done => {
    let x = new Spot(2, 4); // An actual spot
    let { i, j } = x.revealSpot();
    expect(i).to.be.equal(2);
    expect(j).to.be.equal(4);
    done();
  });
});
