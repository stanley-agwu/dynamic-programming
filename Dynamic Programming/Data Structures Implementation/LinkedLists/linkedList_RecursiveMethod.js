// Recursive Implementation of Linked List
// [O(n) - Time Complexity O(n) - Space Complexity]

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
        this._append(val, this.head)
    }
    _append(val, curr){
        if (curr.next === null){
            curr.next = new Node(val)
            return
        }
        this._append(val, curr.next)
    }
    print(){
        console.log(this._print(this.head))
    }
    _print(curr){
        if (curr === null){
            return ""
        }
        return curr.val + " => " + this._print(curr.next)
    }
    contains(target){
        return this._contains(this.head, target)
    }
    _contains (curr, target){
        if (curr === null) return false
        if (curr.val === target) return true

        return this._contains(curr.next, target)
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



