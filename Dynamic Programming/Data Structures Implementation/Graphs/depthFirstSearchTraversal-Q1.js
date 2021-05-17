// Using Depth First Search Traversal
//Given a Directed Acyclic Graph (DAG), return the topological ordering

class Node {
    constructor(value){
        this.value = value
        this.edgesList = []
    }

    connect(node) {
        this.edgesList.push(node)
    }
    getAdjacentNodes () {
        return this.edgesList
    }
    isConnected(node) {
        return !!this.edgesList.find(edge => edge.value === node.value)
    }
}

class Graph {
    constructor(nodes){
        this.nodes = [...nodes]
    }
    addToGraph(node) {
        this.nodes.push(node)
    }
    topologicalSort(){
        const visitedNodes = new Set()
        const topOrdering = []
        for (const node of this.nodes){
            this.depthFirstTraversal(node, visitedNodes, topOrdering)
        }
        console.log(topOrdering.reverse())
    }
    depthFirstTraversal(start, visitedNodes, topOrdering){
        if (visitedNodes.has(start)) return 

        visitedNodes.add(start)
        console.log("visiting nodes: ", start.value)
        for (const adjacency of start.edgesList){
            this.depthFirstTraversal(adjacency, visitedNodes, topOrdering)
        }
        topOrdering.push(start.value) 
    }
    
}

const A = new Node("A")
const B = new Node("B")
const C = new Node("C")
const D = new Node("D")
const E = new Node("E")
const F = new Node("F")

const graph = new Graph([A, B, C, D, E, F])

A.connect(C)
A.connect(B)
B.connect(D)
D.connect(F)
E.connect(C)
E.connect(F)

graph.topologicalSort()
