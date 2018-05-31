/**
 * BFS: Breadth first search
 */

const companies = require("../tests/stubs");
const Graph = require("../DataStructures/graph");
const Node = require("../DataStructures/node");

const generateGraphDS = require("../utils");

// Initialise graph

let graph = generateGraphDS();

/**
 * Check Every Edge and add that to a Queue.
 * Following the Algorithm PseudoCode as per: https://en.wikipedia.org/wiki/Breadth-first_search
 */

const breadFirstSearch = (start, end) => {
  let queue = []; // Needs to be a FIFO data structure. Using an array for now.

  start.searched = true; // First ensure the root is searched
  queue.push(start); // Add the start to the queue.
  while (queue.length > 0) {
    // Dequeue
    let current = queue.shift();

    // Sanity check to ensure the algorithm is actually working.

    console.log(`Checking: ${current.value}`);
    if (current === end) {
      return end.value;
      // Done! We outta here!
    }

    let { edges } = current;
    for (let i = 0; i < edges.length; i++) {
      let neighbor = edges[i];
      // Check if it has been visited.
      if (!neighbor.searched) {
        neighbor.searched = true;
        // Then set where it is coming from
        neighbor.parent = current;
        queue.push(neighbor);
      }
    }
  }

  reconstructPath(end);
};

const reconstructPath = end => {
  // Back tracking to get the full path using BFS.
  let path = [];
  path.push(end);
  let next = end.parent;
  while (next != null) {
    // Check node.js line number 10.
    path.push(next);
    next = next.parent;
  }

  return path;
};

// console.log(breadthFirstSearch*end));
console.log(
  breadFirstSearch(graph.setStart("Emmanuel E"), graph.setEnd("Emmanuel E"))
);

module.exports = breadFirstSearch;
