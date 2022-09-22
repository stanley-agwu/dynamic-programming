// Graph
// A Graph is a collection of nodes (Vertices) connected by edges.

// BreadthFirstSearchTraversal
// Uses a Queue data structure [FIFO principle]

const breadthFirstSearchTraversal = (adjacency, sourceNode) => {
  const queue = [ sourceNode ];

  while (queue.length) {
    const current = queue.shift();
    console.log(current);

    for (let neighbour of adjacency[current]) {
      queue.push(neighbour);
    }
  }
}


const adjacency = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

breadthFirstSearchTraversal(adjacency, 'a'); // abcdef