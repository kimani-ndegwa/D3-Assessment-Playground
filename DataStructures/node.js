/**
 * @param value
 * Use this to be able to list the nodes in either BFS or DFS.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.searched = false;
    this.edges = [];
    this.parent = null;
  }

  addEdge(neighbor) {
    this.edges.push(neighbor);
    neighbor.edges.push(this);
  }
}

module.exports = Node;
