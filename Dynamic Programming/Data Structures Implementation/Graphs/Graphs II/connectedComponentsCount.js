// Connected components count problem

// Write a function, connectComponentsCount, that takes in the adjacency list of an
// undirected graph. The function should return the number of connected components
// within the graph.

// Using depthFirstSearchTraversal Recursively
const connectComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for(let node in graph) {
    if (_explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
}

const _explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));
  console.log(visited);
  for(let neighbour of graph[current]) {
    _explore(graph, neighbour, visited);
  }
  return true;
}



console.log(connectComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
})); // 2

