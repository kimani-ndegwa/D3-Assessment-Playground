/**
 * Use this like a hash table for my nodes.
 */

class Graph {
  constructor() {
    this.nodes = [];
    this.graph = {};
    this.start = null;
    this.end = null;
  }

  addNode(node) {
    // Add node into array
    this.nodes.push(node);
    const title = node.value;

    // Key: value
    this.graph[title] = node;
  }

  getNode(founder) {
    return this.graph[founder];
  }

  setStart(founder) {
    this.start = this.graph[founder];
    return this.start;
  }

  setEnd(founder) {
    this.end = this.graph[founder];
    return this.end;
  }
}

module.exports = Graph;
