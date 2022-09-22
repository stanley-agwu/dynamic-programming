// Graph
// A Graph is a collection of nodes (Vertices) connected by edges.

// DepthFirstSearchTraversal
// Uses a Stack data structure [LIFO principle]

const depthFirstSearchTraversalI = (adjacency, sourceNode) => {
  const stack = [sourceNode];

  while(stack.length) {
    const current = stack.pop();
    console.log(current);

    for(let neighbour of adjacency[current]) {
      stack.push(neighbour);
    }
  }
}

const depthFirstSearchTraversalR = (adjacency, sourceNode) => {
  console.log(sourceNode);

  for(let neighbour of adjacency[sourceNode]) {
    depthFirstSearchTraversalR(adjacency, neighbour);
  }
}

const adjacency = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

depthFirstSearchTraversalI(adjacency, 'a'); // abdfce
depthFirstSearchTraversalR(adjacency, 'a'); // abdfce
