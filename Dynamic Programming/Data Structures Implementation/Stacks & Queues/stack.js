//Stack (LIFO Data Structure)

//Conditions=>(1)Add to the top. (2)Remove from the top. (3)It can only be manipulated from the top(LIFO Data Structure)

//Implementing a Stack Using an Array
//Using API methods of push and pop methods only.
//[O(1) - Time Complexity for push/pop Methods O(n) - Space Complexity -> Because of the stack Array]

const stack = []
stack.push("A")
stack.push("B")
stack.push("C")
stack.push("D")
stack.push("E")
//console.log(stack)
stack.pop()
//console.log(stack)
stack.push("G")
//console.log(stack)
stack.pop()
//console.log(stack)
stack.pop()
stack.pop()
//console.log(stack)


//Implementing a Stack Using a Linked List
//[O(1) - Time Complexity for push/pop Methods O(n) - Space Complexity -> Number of Nodes]

class StackNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }
    push (val){
        if (this.size === 0){
            this.top = new StackNode(val)
        } else {
            const pushedNode = new StackNode(val)
            pushedNode.next = this.top 
            this.top = pushedNode
        }
        this.size ++
    }
    pop(){
        if (this.size === 0) return null 
        const poppedNode = this.top 
        this.top = this.top.next 
        this.size --
        return poppedNode.val
    }
    getTop(){
        if(this.size === 0) return null
        return this.top.val
    }
    print(){
        const str = this._print(this.top)
        console.log(str)
    }
    _print(node){
        if (node === null) return " | "
        return " | " + node.val + this._print(node.next)
    }
}

const mystack = new Stack()

mystack.push("A")
mystack.push("B")
mystack.push("C")
mystack.push("D")
mystack.push("E")
mystack.push("F")

mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()
console.log(mystack.pop())
console.log(mystack.getTop(), mystack.size)
mystack.print()


