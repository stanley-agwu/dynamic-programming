//Queue (FIFO Data Structure)

//Conditions=>(1)Add to the back of the queue (enQueue). (2)Remove from the front of the queue (deQueue). 
//Uses => (1) First Come, First Serve, Basis. (2) For Graphs implementation.

//Implementing a Queue Using an Array
//Using API methods of push and shift methods only.
//[O(n) - Time Complexity for push/shift Methods O(n) - Space Complexity -> Because of the queue Array]

const queue = []
queue.push("A")
queue.push("B")
queue.push("C")
queue.push("D")
queue.push("E")
//console.log(queue)
queue.shift()
//console.log(queue)
queue.push("G")
//console.log(queue)
queue.shift()
//console.log(queue)
queue.shift()
queue.shift()
//console.log(queue)


//Implementing a Queue Using a Linked List
//[O(1) - Time Complexity for queue/deQueue Methods,  O(n) - Space Complexity -> Number of Nodes]

class QueueNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null
        this.back = null
        this.size = 0
    }
    enQueue (val){
        const newNode = new QueueNode(val)
        if (this.size === 0){
            this.front = newNode 
            this.back = newNode
        } else {
            this.back.next = newNode 
            this.back = newNode 
        }
        this.size ++
    }
    deQueue(){
        if (this.size === 0) return null 
        const deQueuedNode = this.front

        if (this.size === 1){
            this.back = null
        }
        this.front = this.front.next
        this.size --
        return deQueuedNode.val
    }
    print(){
        const str = this._print(this.front)
        console.log(str)
    }
    _print(front){
        if (front === null) return ""
        return front.val + " => " + this._print(front.next)
    }
}

const myQueue = new Queue()

myQueue.enQueue("A")
myQueue.enQueue("B")
myQueue.enQueue("C")
myQueue.enQueue("D")
myQueue.enQueue("E")
myQueue.enQueue("F")

// console.log(myQueue.size)
// console.log(myQueue.front.val)
// console.log(myQueue.back.val)
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()
console.log(myQueue.deQueue())
myQueue.print()


