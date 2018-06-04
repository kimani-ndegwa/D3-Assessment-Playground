/**
 * DFS:https://en.wikipedia.org/wiki/Depth-first_search
 * Go Deep.
 */

const { generateGraph, reconstructPath } = require("../utils");

// Initialise Graph
let graph = generateGraph();

const depthFirstSearch = (graph, start) => {
  // Start with an empty stack
  // LIFO
  let stack = [];
  let path = [];

  // Push start to queue
  stack.push(start);

  while (stack.length > 0) {
    let current = stack.pop();

    if (current.searched === true) {
      // if not labelled as visited
      // label it first as visited
      current.searched = true;

      let { edges } = current;

      edges.forEach(edge => {
        // Add it to the queue if not visited
        if (!edge.searched) {
          stack.push(edge);
          path.push(edge);
        }
      });
    }
  }
  return "Done";
};

module.exports = depthFirstSearch;
