// Implementation of Reversal of Nodes of a Linked List
// Using Iterative and Recursive Methods

//Write a function, reverseList, that accepts the head of a linked list as an arguement.
//The function should reverse the order of the nodes of the linked list in-place.
//The function should return the new head of the linked list.

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

const print = (head) =>{
    if (head.next === null){
        return head.val;
    }
    return head.val + " => " + print(head.next)
}

//Iterative Implementation [O(n) - Time Complexity O(1) - Space Complexity]
// const reverseList = (head) => {
//     let prev = null
//     let curr = head

//     while (curr !== null){
//         let next = curr.next

//         curr.next = prev 
//         prev = curr

//         curr = next
//     }
//     return prev
// }

//Recursive Implementation [O(n) - Time Complexity O(n) - Space Complexity]
const reverseList = (head) => {
    return _reverseList(null, head)
}
const _reverseList = (prev, curr) =>{
    if (curr === null) return prev

    const next = curr.next 
    curr.next = prev
    return _reverseList(curr, next)
}

const head = A
console.log(print(A))

const reversedHead = reverseList(head)
console.log(print(reversedHead))



