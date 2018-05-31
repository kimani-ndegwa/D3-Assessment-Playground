/**
 *
 */

// Generate Graph and use it as a Hash table.

const schools = [
  {
    title: "Schoola",
    teacherList: [
      {
        name: "Jane Doe",
        subject: "English"
      },
      {
        name: "Ja Do",
        subject: "Pijin"
      }
    ]
  },
  {
    title: "Schoolb",
    teacherList: [
      {
        name: "Alex Magana",
        subject: "Mathematics"
      },
      {
        name: "Jeannette Wairimu",
        subject: "Travel"
      }
    ]
  }
];

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
    this.visited = false;
    this.parent = null;
  }

  addEdge(neighbour) {
    this.edges.push(neighbour);
    neighbour.edges.push(this);
  }
}

class Graph {
  constructor(nodes, graph) {
    this.nodes = [];
    this.graph = {};
  }

  /**
   * @param node
   * returns
   */

  addNode(node) {
    let nodes = [...this.nodes, node];
    this.nodes = nodes;
    let title = node.value;
    this.graph[title] = node;
  }

  /**
   * Get Nodes
   * return null if the node does not exist
   */

  getNode(entity) {
    return this.graph[entity];
  }
}

let graph = new Graph();

schools.forEach(school => {
  // Get the properties of the school from the school object.
  let { title, teacherList } = school;
  let schoolNode = new Node(title);
  graph.addNode(schoolNode);

  // Add the teacher list nodes as well
  if (teacherList.length && !graph.getNode(teacher.name)) {
    teacherList.forEach(teacher => {
      let teacherNode = new Node(teacher);
      graph.addNode(teacherNode);
    });
  }
});

console.log(graph, "here");
// let nodes = [
//   {
//     links: [1], // node 0 is linked to node 1
//     visited: false
//   },
//   {
//     links: [0, 2], // node 1 is linked to node 0 and 2
//     path: [],
//     visited: false
//   }
// ];

// function bfs(start) {
//   var listToExplore = [start];
//   console.log(listToExplore, ">>>");

//   nodes[start].visited = true;

//   while (listToExplore.length > 0) {
//     var nodeIndex = listToExplore.shift();
//     nodes[nodeIndex].links.forEach(function(childIndex) {
//       if (nodes[childIndex] && !nodes[childIndex].visited) {
//         nodes[childIndex].visited = true;
//         listToExplore.push(childIndex);
//       }
//     });
//   }
// }

// bfs(1);
