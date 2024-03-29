// max root to leaf path sum

// Write a function, maxPathSum, that takes in the root of a binary tree that contains 
// number values. The function should return the maximum sum of any root to leaf path
// within the tree. You may assume that the input tree is non-empty.

class Node {
  constructor(val){
      this.val = val 
      this.left = null 
      this.right = null
  }
}

const a = new Node (3)
const b = new Node (11)
const c = new Node (4)
const d = new Node (4)
const e = new Node (-2)
const f = new Node (21)

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

// depthFirstSearchTraversal Recursively
const maxPathSumR = (root) => {
  if (root === null) return Number.NEGATIVE_INFINITY;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSumR(root.left), maxPathSumR(root.right));
}

console.log(maxPathSumR(a)); // 28

// depthFirstSearchTraversal Iteratively
