// tree sum problem

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
const e = new Node (2)
const f = new Node (1)

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
const treeSumI = (root) => {
  if (root === null) return 0;

  const queue = [ root ];
  let sum = 0;

  while (queue.length) {
    const current = queue.shift();// shift operation runs in O(n) time
    sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
}

console.log(treeSumI(a));

// depthFirstSearchTraversal Recursively
// Time complexity => O(n) Space Complexity => O(n)
const treeSumR = (root) => {
  if (root === null) return 0;

  return root.val + treeSumR(root.left) + treeSumR(root.right);
}

console.log(treeSumR(a));