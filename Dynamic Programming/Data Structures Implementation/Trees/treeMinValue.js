// tree min value

// Assume tree is non-empty.

class Node {
  constructor(val){
      this.val = val 
      this.left = null 
      this.right = null
  }
}

const a = new Node (5)
const b = new Node (11)
const c = new Node (3)
const d = new Node (4)
const e = new Node (15)
const f = new Node (12)

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

// BreadthFirstSearchTraversal
// Time complexity => O(n^2) Space Complexity => O(n)
const treeMinValueI = (root) => {
  const queue = [ root ];
  let minVal = Number.POSITIVE_INFINITY; // Infinity

  while (queue.length) {
    const current = queue.shift(); // shift operation runs in O(n) time
    minVal = Math.min(minVal, current.val)

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return minVal;
}

console.log(treeMinValueI(a));

// DepthFirstSearchTraversal Iteratively
// Time complexity => O(n) Space Complexity => O(n)
const treeMinValue_I = (root) => {
  const stack = [ root ];
  let minVal = Number.POSITIVE_INFINITY; // Infinity

  while (stack.length) {
    const current = stack.pop();
    minVal = Math.min(minVal, current.val)

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }
  return minVal;
}

console.log(treeMinValue_I(a));

// DepthFirstSearchTraversal recursively
// Time complexity => O(n) Space Complexity => O(n)
const treeMinValueR = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValueR(root.left), treeMinValueR(root.right));
}

console.log(treeMinValueR(a));