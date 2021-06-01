// Trees 
// Condition => (1) Must have a single root Node. 
// Condition => (2)There must be one unique path joining/between two (2) nodes.

//Binary Tree
// Additional Condition => Every Node must have at most two (2) children.

//Binary Tree Implementation Using Breath First Search Traversal (Uses a Queue FIFO)
// [O(n) - Time Complexity O(n) - Space Complexity -> Because of the queue Array]

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
const breathFirstSearchTraversal = (root) => {
    const queue = [ root ]
    while (queue.length > 0){
        const curr = queue.shift()
        console.log(curr.val)
        if (curr.left !== null){
            queue.push(curr.left)
        }
        if (curr.right !== null){
            queue.push(curr.right)
        }
    }
}

breathFirstSearchTraversal(A)


//Write a function, bsf(root, target), that takes in the root of a tree and its target value 
//as arguements. The function should return a boolean indicating whether or not the binary tree
//contains the target value.

// class Node{
//     constructor(val){
//         this.val = val 
//         this.left = null 
//         this.right = null
//     }
// }

// const A = new Node ("A")
// const B = new Node ("B")
// const C = new Node ("C")
// const D = new Node ("D")
// const E = new Node ("E")
// const F = new Node ("F")

// A.left = B 
// A.right = C
// B.left = D
// B.right = E
// C.right = F

const bsf = (root, target) => {
    const queue = [ root ]
    while (queue.length > 0){
        const curr = queue.shift()
        if (curr.val === target){
            return true
        }
        if (curr.left !== null){
            queue.push(curr.left)
        }
        if (curr.right !== null){
            queue.push(curr.right)
        }
    }
    return false
}

console.log(bsf (A, "E")) // true
console.log(bsf (A, "Z")) // false
console.log(bsf (A, "S")) // false