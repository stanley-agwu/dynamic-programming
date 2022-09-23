// breadth first Values

// Write a function, breadthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all the values of the tree
// in depth-first order.

class Node {
  constructor(val){
      this.val = val 
      this.left = null 
      this.right = null
  }
}

const a = new Node ('a')
const b = new Node ('b')
const c = new Node ('c')
const d = new Node ('d')
const e = new Node ('e')
const f = new Node ('f')

a.left = b; 
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//          a
//        /   \
//       b     c
//     /   \    \
//    d     e    f

// BreadthFirstSearchTraversal is implemented Iteratively because it uses 
// the queue data structure (FIFO).
// Attempts to implement it recursively would be difficult because 
// Recursion in itself utilizes a stack data structure (LIFO), which is 
// completely different in principle.

// Uses only Iterative method => BreadthFirstSearchTraversal uses a queue
// Time complexity => O(n) Space Complexity => O(n)
const breadthFirstValues = (root) => {
  if (root === null) return [];

  const queue = [ root ];
  const results = [];
  while (queue.length) {
    const current = queue.shift();
    results.push(current.val);

    console.log(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return results;
}

console.log(breadthFirstValues(a));
console.log(breadthFirstValues(null));
