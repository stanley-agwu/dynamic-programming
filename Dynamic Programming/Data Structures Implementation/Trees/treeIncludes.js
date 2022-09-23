// tree includes problem

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

// Write a function to check if the tree includes the values below:
// e, k


// breadthFirstSearchTraversal
// Time complexity => O(n^2) Space Complexity => O(n)
const treeIncludesI = (root, target) => {
  if (root === null) return false;
  const queue = [ root ];

  while (queue.length) {
    const current = queue.shift(); // shift operation runs in O(n) time
    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
}

console.log(treeIncludesI(a, 'e'));
console.log(treeIncludesI(a, 'k'));

//depthFirstSearchTraversal Recursively
const treeIncludesR = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludesR(root.left, target) || treeIncludesR(root.right, target);
}

console.log(treeIncludesR(a, 'e'));
console.log(treeIncludesR(a, 'k'));
console.log(treeIncludesR(a, 'z'));
console.log(treeIncludesR(a, 'c'));