// Island count

// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land. The function should return the
// number of islands on the grid. An island is a vertically or horizontally
// connected region of land.

const grid = [
  ['W', 'L', 'W', 'W', 'L'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]


// depthFirstSearchTraversal Recursively
// Time complexity => O(rc) Space Complexity => O(rc)
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for(let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (_explore(grid, r, c, visited) === true) {
        count++;
      }
    }
  }
  return count;
}

const _explore = (grid, r, c, visited) => {
  // check bounds base case
  const isRowInBounds = r >= 0 && r < grid.length;
  const isColInBounds = c >= 0 && c < grid[0].length;
  if (!isRowInBounds || !isColInBounds) return false;

  const pos = `${r}, ${c}`;

  // check, already visited base case because of undirected grid
  if (visited.has(pos)) return false;
  visited.add(pos);

  // check if on water base case
  if (grid[r][c] === 'W') return false;

  _explore(grid, r - 1, c, visited); // move up the grid
  _explore(grid, r + 1, c, visited); // move down the grid
  _explore(grid, r, c - 1, visited); // move left the grid
  _explore(grid, r, c + 1, visited); // move right the grid

  return true;
}

console.log(islandCount(grid)); // 4