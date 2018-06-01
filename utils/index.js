const companies = require("../tests/stubs");
const Graph = require("../DataStructures/graph");
const Node = require("../DataStructures/node");
const Spot = require("../DataStructures/spot");

const generateGraph = () => {
  let graph = new Graph(); // Store All Nodes here from the company look up.

  // Create a node for every company and every founder.
  companies.forEach(company => {
    let { founders } = company;
    let companyNode = new Node(company.title); // company title becomes the value.
    graph.addNode(companyNode);
    founders.forEach(founder => {
      let founderNode = graph.getNode(founder);
      if (!founderNode) {
        founderNode = new Node(founder); // founder name becomes the value.
      }
      graph.addNode(founderNode);
      companyNode.addEdge(founderNode);
    });
  });

  return graph;
};

// Path finding section. Can be ignored if the interest is not that.
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

  // This function reconstructs our path from S to E
  let journey = showPath(path);
  return journey;
};

// A neat function that enables us to show the path
// That was followed. Ignore if need be

const showPath = path => {
  let journey = path.map((p, index) => {
    let arrow = index !== 0 ? "-->" : ""; // No need to show aimless arrow.
    return `${p.value}${arrow}`;
  });

  // Reverse it because we are starting at the end.
  return journey.reverse().join("");
};

const generate2DArray = (columns = 5, rows = 5) => {
  // Look into using Array.fill for this.

  // Create first column array.
  let grid = new Array(columns);
  for (let i = 0; i < columns; i++) {
    grid[i] = new Array(rows);
  }

  // Create the second array for the rows.
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  // Calculate neighbours, edges for this
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(columns, rows, grid);
    }
  }

  return grid;
};

/**
 *
 * @param {*} array
 * @param {*} element
 * Allows us to remove an item from an array.
 */
const removeFromArray = (array, element) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === element) {
      array.splice(i, 1); // remove from array
    }
  }
};

const heuristic = (a, b) => {
  // Use Manhattan Distance in this implementation.
  // Function used to make an accurate guess.
  return Math.abs(a.i - b.i) + Math.abs(a.j - b.j);
};

const reconstructAStarPath = (path, current) => {
  // This forms a somewhat chain that we can use to reconstruct the A* Path
  let temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  return path;
};

module.exports = {
  generateGraph,
  generate2DArray,
  removeFromArray,
  heuristic,
  reconstructPath,
  reconstructAStarPath
};
