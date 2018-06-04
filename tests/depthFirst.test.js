/**
 * DFS Test
 */

const mocha = require("mocha");
const { expect } = require("chai");

const Node = require("../DataStructures/node");
const Graph = require("../DataStructures/graph");

// Call the Graph DS generator;
const { generateGraph, reconstructPath } = require("../utils");

// Function
const depthFirstSearch = require("../Algorithms/depthFirst");

describe("Breadth First", () => {
  let graph, node, start, end;

  before(done => {
    graph = generateGraph();
    start = graph.setStart("Emmanuel E");
    end = graph.setEnd("Emmanuel E");
    end2 = graph.setEnd("Alex Adebayo");
    done();
  });

  it("Start and End should be instances of Node. Graph should be of graph", done => {
    expect(graph).to.be.instanceof(Graph);
    expect(start).to.be.instanceof(Node);
    expect(end).to.be.instanceof(Node);
    done();
  });

  it("Expect return Done when over", done => {
    let endvalue = depthFirstSearch(start, end);
    expect(endvalue).to.be.equal("Emmanuel E");
    done();
  });
});
