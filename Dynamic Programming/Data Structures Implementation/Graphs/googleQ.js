//Google Interview Graph Problem

//You are tasked with splitting the 7th grade class into two 
//teams for a soccer game. Given a lsit of students and their
// "enemies" aka the kids they can't be on the same teams as, 
//determine whether it is possible to split the class in two 
//in such a way that no child is on the same team as any of their 
//enemies. If possible, return the two teams.
//David: [Lucy, Jose, Chris]
//Lucy: [David, Brian, Emily]
//Emily: [Lucy, Jack]
//Jose: [David, Paul]
//Paul: [Jose, Chris]
//Chris: [Paul, David, Brian]
//Brian: [Lucy, Chris, Jack]
//Jack: [Brian, Emily]

//Solve using DepthFirstSearchTraversal Method (using A Bipartite Graph)

class Node {
    constructor(value){
        this.value = value
        this.color = null
        this.edgesList = []
    }
    connect(node){
        this.edgesList.push(node)
        node.edgesList.push(this)
    }
    getAdjacentNodes(){
        return this.edgesList
    }
    isConnected(node){
        return !!this.edgesList.find(edgeNode => edgeNode.value === node.value)
    }

}
class Graph {
    constructor(nodes){
        this.nodes = [...nodes] 
    }
    addToGraph(node){
        this.nodes.push(node)
        node.edgesList.push(this)
    }
    isBipartite(){
        const visitedNodes = new Set()
        for(const node of this.nodes){
            if (!visitedNodes.has(node)){
                if (this.assignLegalColoring(node, visitedNodes)){
                    console.log("Graph is Bipartite")
                    const redTeam = this.nodes.filter(e => e.color === "red")
                    const blueTeam = this.nodes.filter(e => e.color === "blue")
                    console.log(redTeam.map(e => e.value))
                    console.log(blueTeam.map(e => e.value))
                } else {
                    console.log("Graph is NOT Bipartite")
                }
            }
        }
    }
    assignLegalColoring(startNode, visitedNodes){
        //if (visitedNodes.has(startNode)) return 

        // console.log("Visiting node: ", startNode.value)
        if (startNode.color) console.log("Visiting node: ", startNode.value)
        if (!startNode.color) startNode.color = "red"

        for(const adjacency of startNode.edgesList){
            if (!visitedNodes.has(adjacency)){
                visitedNodes.add(adjacency)
                adjacency.color = startNode.color === "red" ? "blue" : "red"
                console.log(`Assigned the color: ${adjacency.color} to ${adjacency.value}`)
                if (!this.assignLegalColoring(adjacency, visitedNodes)){
                    return false
                }
            } else {
                if (startNode.color === adjacency.color){
                    return false
                }
            }
            
        }
        return true
    }
}

const Jack = new Node("Jack")
const Brian = new Node("Brian")
const Chris = new Node("Chris")
const Lucy = new Node("Lucy")
const Emily = new Node("Emily")
const Paul = new Node("Paul")
const David = new Node("David")
const Jose = new Node("Jose")

const graph = new Graph([Jack, Chris, Emily, Jose, 
                                Lucy, Paul, David, Brian])
David.connect(Lucy)
David.connect(Jose)
David.connect(Chris)
Lucy.connect(Brian)
Lucy.connect(Emily)
Emily.connect(Jack)
Jose.connect(Paul)
Paul.connect(Chris)
Chris.connect(Brian)
Brian.connect(Jack)

graph.isBipartite()