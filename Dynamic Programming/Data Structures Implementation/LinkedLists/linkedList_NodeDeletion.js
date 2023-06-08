// Implementation of Deletion of Nodes of a Linked List
// Using Iterative and Recursive Methods

//Write a function, deleteValue(head, val), that accepts the head node of a linked list and a value as an arguement.
//The function should delete the node of the linked list that contains the given value.
//The function should return the head of the list. Assume that the linked list only contains unique values.

class Node {
    constructor(val){
        this.val = val 
        this.next = null
    }
}

const A = new Node("A")
const B = new Node("B")
const C = new Node("C")
const D = new Node("D")
const E = new Node("E")

A.next = B
B.next = C
C.next = D
D.next = E

//Iterative Implementation [O(n) - Time Complexity O(1) - Space Complexity]
// const deleteValue = (head, target) => {
//     let prev = null
//     let curr = head
//     if (target === head.val) {
//         return head.next
//     }
    
//     while (curr !== null){
//         if (curr.val === target){
//             prev.next = curr.next
//             return head
//         }
//         prev = curr
//         curr = curr.next    
//     }
//     return head
// }

//Recursive Implementation [O(n) - Time Complexity O(n) - Space Complexity]
const deleteValue = (head, target) => {
    if (head.val === target){
        return head.next
    }
    _deleteValue(null, head, target)
    return head
    
}
const _deleteValue = (prev, curr, target) => {
    if (curr === null) return 
    
    if (curr.val === target){
        prev.next = curr.next 
        return
    }
    return _deleteValue(curr, curr.next, target)
}

const print = (head) =>{
    if (head.next === null){
        return head.val;
    }
    
    return head.val + " => " + print(head.next)
}

console.log(print(A))

const newHead = deleteValue(A, "E")

console.log("---")

console.log(print(deleteValue(newHead)))

