// Depth First Search Traversal

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
    depthFirstTraversal(startNode, endNode, visitedNodes) {
        if (!visitedNodes){
            visitedNodes = new Set()
        }
        if (startNode.value === endNode.value){
            console.log("Found the node! =>", startNode.value)
            return 
        }
        console.log("Visiting node: ", startNode.value)
        visitedNodes.add(startNode)
        for (const adjacency of startNode.edgesList){
            if (!visitedNodes.has(adjacency)){
               this.depthFirstTraversal(adjacency, endNode, visitedNodes) 
            }
            
        }

        
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
const HKG = new Node("HKG")

const graph = new Graph([DFW, LAX, JFK, HNL, EWR, SAN, HKG, BOS, MIA, MCO, PBI])

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
SAN.connect(HKG)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MIA.connect(PBI)
MCO.connect(PBI)

graph.depthFirstTraversal(DFW, HKG)
