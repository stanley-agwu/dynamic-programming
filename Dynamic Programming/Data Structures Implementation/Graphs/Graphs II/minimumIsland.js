// minimum island problem

// Write a function, minimumIsland, that takes in a grid containing
// Ws and Ls. W represents water and L represents land. The function
// should return the size of the smallest island. An island is a
// vertically or horizontally connected region of land.
// You may assume that the grid contains at least one island.


const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];


const minimumIsland = (grid) => {
  const visited = new Set();
  let result = Infinity // we could also use => Number.MAX_SAFE_INTEGER;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const count = _exploreSize(grid, r, c, visited);
      if (count) result = Math.min(result, count);

    }
  }
  return result;
}

const _exploreSize =(grid, r, c, visited) => {
  // check Bounds base case
  const isRowInBounds = 0 <= r && r < grid.length;
  const isColInBounds = 0 <= c && c < grid[0].length;
  if (!isRowInBounds || !isColInBounds) return 0;

  // check if already visited nodes
  const pos = `${r}, ${c}`;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  // check if traversing on water
  if (grid[r][c] === 'W') return 0;

  let count = 1;
  count += _exploreSize(grid, r - 1, c, visited); // traversing up
  count += _exploreSize(grid, r += 1, c, visited); // traversing down
  count += _exploreSize(grid, r, c - 1, visited); // traversing left
  count += _exploreSize(grid, r, c + 1, visited); // traversing right

  return count;
}

console.log(minimumIsland(grid)); // 2