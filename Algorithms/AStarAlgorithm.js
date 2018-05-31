/**
 * A Star Algorithm.
 * @param start Beginning of the solution
 * @param end end where we consider the search successful
 * F Score - Cost function of each node from one to another.
 * G Score - Known amount / distance from start to end.
 * H Score - Heuristic / Educated Guess to be able to make the best path.
 * Pseudocode Reference: https://en.wikipedia.org/wiki/A*_search_algorithm#Algorithm_description
 *
 */

// Generate The Temporary Grid
let columns = 5;
let rows = 5;
let col = 0;
let row = 0;

let addend = 5;
let path;

/**
 * Sets up the grid.
 */

const grid = Array(columns)
  .fill(new Node(columns, 0))
  .map((x, i) => Array(rows).fill(new Node(i + 1, rows)));

console.log(grid, "here");
/**
 * Each node in our grid will be created by this
 */

function Node(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0; // F Score
  this.g = 0; // G Score
  this.h = 0; // H Score
  this.neighbours = [];

  /**
   * Methods
   */
  this.populate = (value = "unassigned") => {
    this.value = value;
  };

  this.addNeighbors = () => {
    let i = this.i;
    let j = this.j;

    // If either i or j are at the edge

    if (i < columns - 1) {
      this.neighbours.push(grid[i + 1][j]);
    }

    if (i > 0) {
      this.neighbours.push(grid[i - 1][j]);
    }

    if (j < rows - 1) {
      this.neighbours.push(grid[i][j + 1]);
    }

    if (j > 0) {
      this.neighbours.push(grid[i][j - 1]);
    }
  };
}

for (let i = 0; i < columns; i++) {
  for (let j = 0; j < rows; j++) {
    grid[i][j].addNeighbors(); // assign or unassigned
  }
}

const AStarAlgorithm = () => {
  // open set contains nodes that have not been evaluated or visited.
  // closed set contain nodes that have already been visited.
  // Not to be confused with an actual JS Set.
  let openSet = [];
  let closedSet = [];

  // Assume the start and the end are the top left and right bottom.
  const start = grid[0][0]; // top left
  const end = grid[columns - 1][rows - 1]; // bottom right

  //   console.log(start, "ONE");

  // Push the start to openSet
  // This serves as the first step
  openSet = openSet.push(start);

  //   console.log(grid[0][0], ".>>>>>>>>>here");

  // Begin the loop
  //   while (openSet.size > 0) {
  //     let lowestIndex = 0;
  //     openSet.forEach((item, index) => {
  //       if (item.f < openSet[lowestIndex].f) {
  //         lowestIndex = index;
  //       }
  //     });

  //     let current = openSet[lowestIndex];

  //     if (current === end) {
  //       // The shortest path has been found!
  //       path = [];
  //       let temp = current;
  //       path.push(temp);

  //       while (temp.cameFrom) {
  //         path.push(temp.previous);
  //         temp = temp.previous;
  //       }
  //       console.log("Here");
  //       return "done";
  //     }

  //     removeFromArray(openSet, current);
  //     closedSet.push(current);

  //     let neighbours = current.neighbours;

  //     for (let i = 0; i < neighbours.length; i++) {
  //       // Check if is in closed set
  //       if (!closedSet.includes(neighbour)) {
  //         neighbour.g = current.g + 1;
  //       }

  //       // Assign tentative G Score.

  //       let tentativeGScore = neighbour.g + 1;

  //       if (openSet.includes(neighbour)) {
  //         if (tempG < neighbour.g) {
  //           // thus a better g score
  //           neighbour.g = tempG;
  //         } else {
  //           neighbour.g = tempG;
  //           openSet.push(neighbour);
  //         }
  //       }

  //       neighbour.h = heuristic(neighbour, end); // Smart algorithm comes in here.
  //       neighbour.f = neighbour.g + neighbour.h; // Score comes in here.
  //       neighbour.cameFrom = current;
  //     }
  //     lowestIndex++;
  //   }

  return false;
};

/**
 *
 * @param {*} array
 * @param {*} element
 * Allows us to remove an item.
 */
const removeFromArray = (array, element) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === elt) {
      array.splice(i, 1); // remove from array
    }
  }
};

const heuristic = (a, b) => {
  // Use Manhattan Distance.
  // This can be anything from a Euclidian
  return abs(a.i - b.i) + abs(a.j - b.j);
};

const search = openSet => {
  if (openSet.size > 0) {
    // Keep Searching
  }
};

AStarAlgorithm();
