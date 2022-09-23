// depth first Values

// Write a function, depthFirstValues, that takes in the root of a binary tree.
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


// Using Iterative method => DepthFirstSearchTraversal uses a stack
// Time complexity => O(n) Space Complexity => O(n)
const depthFirstValuesI = (root) => {
  if (root === null) return [];
  const stack = [ root ];

  const results = [];

  while (stack.length) {
    const current  = stack.pop();
    results.push(current.val);

    // console.log(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return results;
}

// console.log(depthFirstValuesI(a));
// console.log(depthFirstValuesI(null));

// Using Recursive method => DepthFirstSearchTraversal uses a stack
// Time complexity => O(n) Space Complexity => O(n)
const depthFirstValuesR = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValuesR(root.left);
  const rightValues = depthFirstValuesR(root.right);
  
  return [root.val, ...leftValues, ...rightValues];
}

console.log(depthFirstValuesR(a));
console.log(depthFirstValuesR(null));