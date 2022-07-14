// Iterative Implementation of Linked List
// [O(n) - Time Complexity O(1) - Space Complexity]

class Node {
    constructor(val){
        this.val = val 
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    append(val){
        if (this.head === null){
            this.head = new Node(val)
            return
        }
        let curr = this.head
        while (curr.next !== null){
            curr = curr.next
        }
        curr.next = new Node(val)

    }
    print(){
        let curr = this.head
        let str = ""
        while (curr !== null){
            str += curr.val + " => "
            curr = curr.next
        }
        console.log(str)
    }
    contains(target){
        let curr = this.head
        while (curr !== null){
            if (curr.val === target) return true
            curr = curr.next
        }
        return false
    }
}


const linked = new LinkedList()

linked.append("A")
linked.append("B")
linked.append("C")
linked.append("D")
linked.append("E")

linked.print()

console.log(linked.contains("A"))
console.log(linked.contains("B"))
console.log(linked.contains("C"))
console.log(linked.contains("D"))

console.log(linked.contains("H"))
console.log(linked.contains("Z"))



