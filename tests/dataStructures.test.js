const mocha = require("mocha");
const { expect } = require("chai");

/**
 * Test the Data Strutures Created and used for the searches
 */

// Modules.
const Node = require("../DataStructures/node");
const Graph = require("../DataStructures/graph");

describe("Data Strucures", () => {
  let testNode, testGraph;

  before("Initialise the graph and node", done => {
    testNode = new Node("value");
    testGraph = new Graph();
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
});
