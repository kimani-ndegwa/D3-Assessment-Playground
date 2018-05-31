/**
 * BFS: Breadth first search
 */

const companies = require("../tests/stubs");
const Graph = require("../DataStructures/graph");
const Node = require("../DataStructures/node");

const { generateGraph, reconstructPath } = require("../utils");

// Initialise graph Data Structure.
// You can use an array of objects if need be.
// As long as you can maintain a list of visited/searched nodes as keys in object.

let graph = generateGraph();

/**
 * Check Every Edge and add that to a Queue.
 * Following the Algorithm PseudoCode as per: https://en.wikipedia.org/wiki/Breadth-first_search
 * Simulates the path it would take for a Founder in one Company to interact with
 * a founder in another company.
 */

const breadFirstSearch = (start, end) => {
  let queue = []; // Needs to be a FIFO data structure. Using an array for now.

  start.searched = true; // First ensure the root is searched
  queue.push(start); // Add the start to the queue.
  while (queue.length > 0) {
    // Dequeue
    let current = queue.shift();

    // Sanity check to ensure the algorithm is actually working.
    // console.log(`Checking: ${current.value}`);
    if (current === end) {
      // Done
      return end.value;
    }

    let { edges } = current;
    for (let i = 0; i < edges.length; i++) {
      let neighbor = edges[i];
      // Check if node has been visited / searched.
      if (!neighbor.searched) {
        neighbor.searched = true;
        // Then set where it is coming from
        neighbor.parent = current;
        queue.push(neighbor);
      }
    }
  }
};

module.exports = breadFirstSearch;
