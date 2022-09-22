// largest component problem

// Write a function, largestComponent, that takes in the adjacency list
// of an undirected graph. The function should return the size of the largest
// component in the graph.

const largestComponent = (graph) => {
  const visited = new Set();
  let result = 0;

  for (let node in graph) {
    const size = _exploreSize(graph, node, visited);
    result = Math.max(result, size);
  }
  return result;
}

const _exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);
  let size = 1;

  for(let neighbor of graph[node]) {
    size += _exploreSize(graph, neighbor, visited);
  }
  return size;
}

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
})); // 4