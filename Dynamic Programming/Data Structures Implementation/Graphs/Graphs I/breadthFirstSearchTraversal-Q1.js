// Finding the Shortest Path Between Two Nodes Using
//Breadth First Search Traversal (BFST)

class Node {
    constructor(value){
        this.value = value
        this.edgesList = []
    }

    connect(node) {
        this.edgesList.push(node)
        node.edgesList.push(this)
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
    reconstructPath(visitedNodes, startNode, endNode){
        let currentNode = endNode

        const shortestPath = []
        while(currentNode !== null){
            shortestPath.push(currentNode)
            currentNode = visitedNodes[currentNode.value]
        }
        return shortestPath.reverse()
    }
    breadthFirstTraversal(startNode, endNode) {
        const queue = [startNode]
        const visitedNodes = {}
        visitedNodes[startNode.value] = null

        while(queue.length > 0){
            const node = queue.shift()
            
            for (let adjacency of node.edgesList){
                if (!visitedNodes.hasOwnProperty(adjacency.value)) {
                    visitedNodes[adjacency.value] = node
                    queue.push(adjacency)
                    //console.log(adjacency.value)
                }
            }
            //console.log(node.value)
            if (node.value === endNode.value){
                //console.log("Found the node!")
                return this.reconstructPath(visitedNodes, startNode, endNode)
            }
        }
        //console.log(visitedNodes)
    }
}

const DFW = new Node("DFW")
const LAX = new Node("LAX")
const JFK = new Node("JFK")
const HNL = new Node("HNL")
const EWR = new Node("EWR")
const SAN = new Node("SAN")
const BOS = new Node("BOS")
const MIA = new Node("MIA")
const MCO = new Node("MCO")
const PBI = new Node("PBI")

const graph = new Graph([DFW, LAX, JFK, HNL, EWR, SAN, BOS, MIA, MCO, PBI])

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MIA.connect(PBI)
MCO.connect(PBI)

console.log(graph.breadthFirstTraversal(DFW, MIA))
