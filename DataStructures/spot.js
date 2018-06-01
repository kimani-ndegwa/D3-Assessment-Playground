class Spot {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0; // F Score
    this.g = 0; // G Score
    this.h = 0; // H Score
    this.neighbours = [];
  }

  /**
   * Methods
   */

  revealSpot() {
    // helper function to return this spot position.
    let position = {
      i: this.i,
      j: this.j
    };

    return position;
  }

  addNeighbors(columns, rows, grid) {
    // If either i or j are at the edge
    let i = this.i;
    let j = this.j;
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
  }
}

module.exports = Spot;
