// has path graph problem

// Write a function, hasPath, that takes in an object representing
// the adjacency list of a directed acyclical graph and two nodes (src, dst).
// The function should return a boolean indicating whether or not there exists
// a directed path between the source and destination nodes.

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

// hasPath(graph, 'f', 'k') // true


// depthFirstSearchTraversal Recursively
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }
  return false;
}

console.log(hasPath(graph, 'f', 'k'));

// breadthFirstSearchTraversal Iteratively
const hasPathI = (graph, src, dst) => {
  const queue = [ src ];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbour of graph[current]) {
      queue.push(neighbour)
    }
  }
  return false;
}

console.log(hasPathI(graph, 'f', 'k'));