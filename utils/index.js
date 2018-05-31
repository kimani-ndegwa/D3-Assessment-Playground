const companies = require("../tests/stubs");
const Graph = require("../DataStructures/graph");
const Node = require("../DataStructures/node");

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

module.exports = {
  generateGraph,
  reconstructPath
};
