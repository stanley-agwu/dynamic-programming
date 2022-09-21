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
        // console.log(curr.val)
        if (curr.left !== null){
            queue.push(curr.left)
        }
        if (curr.right !== null){
            queue.push(curr.right)
        }
    }
}

breathFirstSearchTraversal(A)


//Write a function, bfs(root, target), that takes in the root of a tree and its target value 
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

A.left = B 
A.right = C
B.left = D
B.right = E
C.right = F

const bfs = (root, target) => {
    const queue = [ root ]
    while (queue.length){
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

console.log(bfs (A, "E")) // true
console.log(bfs (A, "Z")) // false
console.log(bfs (A, "S")) // false


//Write a function, sumTree(root), that takes in the root of a tree and its target value 
//as arguements. The function should return the total sum of all values in the tree.
//You can assume that the tree only contains number values.

class Node{
    constructor(val){
        this.val = val 
        this.left = null 
        this.right = null
    }
}

const a = new Node (3)
const b = new Node (2)
const c = new Node (7)
const d = new Node (4)
const e = new Node (-2)
const f = new Node (5)

a.left = b; 
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
    const queue = [ root ]
    let count = 0;
    while (queue.length){
        const curr = queue.shift()
        count += curr.target;
        if (curr.left !== null){
            queue.push(curr.left)
        }
        if (curr.right !== null){
            queue.push(curr.right)
        }
    }
    return count;
}

console.log(sumTree(a)) // 19