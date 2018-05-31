const companies = require("../tests/stubs");
const Graph = require("../DataStructures/graph");
const Node = require("../DataStructures/node");

const generateGraphDS = () => {
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

module.exports = generateGraphDS;
