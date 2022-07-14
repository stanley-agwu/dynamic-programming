// Trees 
// Condition => (1) Must have a single root Node. 
// Condition => (2)There must be one unique path joining/between two (2) nodes.

//Binary Tree
// Additional Condition => Every Node must have at most two (2) children.

//Binary Tree Implementation Using Depth First Search Traversal (Uses a Stack LIFO)
// [O(n) - Time Complexity O(n) - Space Complexity -> Because of the stack Array ]

class Node{
    constructor(val){
        this.val = val 
        this.left = null 
        this.right = null
    }
}

const A = new Node ("A")
const B = new Node ("B")
const C = new Node ("C")
const D = new Node ("D")
const E = new Node ("E")
const F = new Node ("F")
//          A
//        /   \
//       B     C
//     /   \    \
//    D     E    F

A.left = B 
A.right = C
B.left = D
B.right = E
C.right = F

//Iterative Method
// const depthFirstSearchTraversal = (root) => {
//     const stack = [ root ]
//     while (stack.length > 0){
//         const curr = stack.pop()
//         console.log(curr.val)
//         if (curr.right !== null){
//             stack.push(curr.right)
//         }
//         if (curr.left !== null){
//             stack.push(curr.left)
//         }
//     }
// }
//Recursive Method
const depthFirstSearchTraversal = (root) => {
    if (root === null) return

    console.log(root.val)

    depthFirstSearchTraversal(root.left)
    depthFirstSearchTraversal(root.right)
}

depthFirstSearchTraversal(A)


//Write a function, sumTree(root, target), that takes in the root of a tree as arguement. 
//The function should return the sum of all values in the binary tree. You can assume
//that the tree only contains number values.

// class Node{
//     constructor(val){
//         this.val = val 
//         this.left = null 
//         this.right = null
//     }
// }

const G = new Node (3)
const H = new Node (2)
const I = new Node (7)
const J = new Node (4)
const K = new Node (-2)
const L = new Node (5)

//          3
//        /   \
//       2     7
//     /   \    \
//    4     -2    5

G.left = H 
G.right = I
H.left = J
H.right = K
I.right = L

//Iterative Method
// const sumTree = (root) => {
//     const stack = [ root ]
//     let sum = 0
//     while (stack.length > 0){
//         const curr = stack.pop()
//         sum += curr.val
//         if (curr.right !== null){
//             stack.push(curr.right)
//         }
//         if (curr.left !== null){
//             stack.push(curr.left)
//         }
//     }
//     return sum
// }

//Recursive Method
const sumTree = (root) => {
    if (root === null) return 0

    return sumTree(root.left) + root.val + sumTree(root.right)
}

console.log(sumTree (G)) // 19
