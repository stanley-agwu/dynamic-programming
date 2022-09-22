// Shortest path problem

// Write a function, shortestPath, that takes in an array of edges for an
// undirected graph and two nodes (nodeA, nodeB). The function should 
// return the length of the shortest path between A and B. Consider the
// length as the number of edges in the path, not the number of nodes.
// If there is no path between A and B, then return -1.

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

// Using breadthFirstSearchTraversal 
// Best method or algorithms for shortest path
const shortestPath = (edges, nodeA, nodeB) => {
  const adjacencyList = buildGraph(edges);
  const visited = new Set(nodeA);

  const queue = [ [ nodeA, 0 ] ];
  
  while(queue.length) {
    const [ node, distance ] = queue.shift();
    if (node === nodeB) return distance;

    for (let neighbour of adjacencyList[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return -1;
}

const buildGraph = (edges) => {
  const graph = {};

  for(let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

console.log(shortestPath(edges, 'w', 'z')); // 2
console.log(shortestPath(edges, 'w', 'g')); // -1