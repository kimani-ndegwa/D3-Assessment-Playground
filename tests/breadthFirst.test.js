/**
 * BFS Test
 */

const mocha = require("mocha");
const { expect } = require("chai");

const Node = require("../DataStructures/node");
const Graph = require("../DataStructures/graph");

// Call the Graph DS generator;
const generateGraphDS = require("../utils");

const breadthFirstSearch = require("../Algorithms/breadthFirst");

describe("Breadth First", () => {
  let graph, node, start, end;

  before(done => {
    graph = generateGraphDS();
    start = graph.setStart("Emmanuel E");
    end = graph.setEnd("Emmanuel E");
    done();
  });

  it("Start and End should be instances of Node", done => {
    expect(start).to.be.instanceof(Node);
    expect(end).to.be.instanceof(Node);
    done();
  });

  it("Expect value to be equal to start if the same", done => {
    let endvalue = breadthFirstSearch(start, end);
    expect(endvalue).to.be.equal("Emmanuel E");
    done();
  });
});
