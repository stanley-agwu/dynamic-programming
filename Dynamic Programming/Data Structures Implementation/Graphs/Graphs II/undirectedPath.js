// undirected path problemth

// Write a function, undirectedPath, that takes in an array of edges for an undirected
// graph and two nodes (nodeA, nodeB). The function should return a boolean indicating
// whether or not there exists a path between nodeA and nodeB.

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

// undirectedPath(edges, 'j', 'm'); true

//first we convert the edges list to an adjacency list with a function that returns the
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

//Use depthFirstSearchTraversal recursively
const undirectedPath = (edges, nodeA, nodeB) => {
  const adjacency = buildGraph(edges);
  console.log(adjacency);
  return _hasPath(adjacency, nodeA, nodeB, new Set());
}

const _hasPath = (adjacency, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for(let neighbor of adjacency[src]) {
    if (_hasPath(adjacency, neighbor, dst, visited) === true) return true;
  }
  return false;
}

console.log(undirectedPath(edges, 'j', 'm')) // true
console.log(undirectedPath(edges, 'o', 'i')) // false