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

const {
  generate2DArray,
  heuristic,
  removeFromArray,
  reconstructAStarPath
} = require("../utils");

/**
 * Sets up the grid.
 */

const AStarAlgorithm = (start, end) => {
  // open set contains nodes that have not been evaluated or visited.
  // closed set contain nodes that have already been visited.
  // Not to be confused with an actual JS Set.
  let openSet = [];
  let closedSet = [];
  let path = [];
  const DISTANCE_BETWEEN_NODES = 1; // Since we are uing a 2D matrix;

  // Assume the start and the end are the top left and right bottom.
  // Push the start to the open set.
  openSet.push(start);

  // Begin the loop
  while (openSet.length > 0) {
    // Find out what has the lowest F score
    let lowestIndex = 0;

    openSet.forEach((item, index) => {
      if (item.f < openSet[lowestIndex].f) {
        // Lowest index is set
        lowestIndex = index;
      }
    });

    // Store the current item here.

    let current = openSet[lowestIndex];

    if (current === end) {
      // The shortest path has been found!
      // We can therefore calculate the path here  and finish our job.
      return reconstructAStarPath(path, current);
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    // Get Neighbours.
    let { neighbours } = current;

    for (let i = 0; i < neighbours.length; i++) {
      // Check if is in closed set
      let neighbour = neighbours[i];
      if (!closedSet.includes(neighbour)) {
        // Assign tentative G Score.
        let tempG = current.g + DISTANCE_BETWEEN_NODES;

        if (openSet.includes(neighbour)) {
          if (tempG < neighbour.g) {
            neighbour.g = tempG;
          }
        } else {
          neighbour.g = tempG;
          openSet.push(neighbour);
        }

        neighbour.h = heuristic(neighbour, end); // Educated guess.
        neighbour.f = neighbour.g + neighbour.h; // Compute the F SCore
        neighbour.previous = current;
      }
    }
  }
};

module.exports = AStarAlgorithm;
