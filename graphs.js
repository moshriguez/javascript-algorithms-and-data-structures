// Graphs
// a graph is a data structure that consists of a finite set of verticies, and a set of unordered pairs of verticies which connect verticies
// a vertex is the data
// an edge is the connection
// directed vs undirected - edges have directions in a directed graph
// weighted vs unweighted - edges have values in a weighted graph

// How to represent a graph?
// Adjacency Matrix - represent the connections via nXn matrix where n is the number of verticies
// if two verticies are connected, there is a 1 or true in its corresponding row or column
// undirected graphs with adjacenty matrices will be symetric
// Adjacenty List - represent the connections via a hash table
// each key in the hash table will represent a vertix and the value will be an array of verticies it is connected to

// our graph will be an undirected graph
// a real implementation should also include some error handling
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(v) {
        this.adjacencyList[v] = []
    }
    addEdge(v1, v2) {
        // if we wanted to make this a directed graph, we could only do one of these:
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(n => n !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(n => n !== v1)
    }
    removeVertex(v) {
        this.adjacencyList[v].forEach(v2 => this.removeEdge(v, v2))
        delete this.adjacencyList[v]
    }
    depthFirstRec(start) {
        const results = []
        const visited = {}
        const dfs = (v) => {
            if(!v) return
            results.push(v)
            visited[v] = true
            this.adjacencyList[v].forEach(n => {
                if(!visited[n]) {
                    dfs(n)
                }
            })
        }
        dfs(start)
        return results
    }
    depthFirstIt(start) {
        let stack = [start]
        const results = []
        const visited = {}
        let current;

        visited[start] = true
        while(stack.length) {
            current = stack.pop()
            results.push(current)
            this.adjacencyList[current].forEach(n => {
                if(!visited[n]){
                    visited[n] = true
                    stack.push(n)
                }
            })
        }
        return results
    }
    breadthFirst(start) {
        const q = new Queue()
        q.enqueue(start)
        const results = []
        const visited = {}
        let current;

        visited[start] = true
        while(q.size) {
            current = q.dequeue()
            results.push(current)
            this.adjacencyList[current].forEach(n => {
                if(!visited[n]){
                    visited[n] = true
                    q.enqueue(n)
                }
            })
        }
        return results
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // enqueue is push from SLL (singly linked list)
    enqueue(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    // dequeue is shift from SLL
    dequeue() {
        if(!this.first) return null
        let node = this.first
        if(this.size === 1) {
            this.last = null
        }
        this.first = node.next
        node.next = null
        this.size--
        return node.val
    }
}

let g = new Graph()
// g.addVertex('Dallas')
// g.addVertex('Seattle')
// g.addVertex('London')
// g.addVertex('Augusta')
// g.addVertex('Atlanta')
// g.addEdge('Dallas', 'Seattle')
// g.addEdge('Dallas', 'London')
// g.addEdge('Dallas', 'Atlanta')
// g.addEdge('Atlanta', 'Seattle')
// g.addEdge('Atlanta', 'London')
// g.addEdge('Atlanta', 'Augusta')
// g.addEdge('Augusta', 'Seattle')
// g.addEdge('Augusta', 'Dallas')
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')
g.addVertex('e')
g.addVertex('f')
g.addEdge('a', 'b')
g.addEdge('a', 'c')
g.addEdge('b', 'd')
g.addEdge('c', 'e')
g.addEdge('d', 'e')
g.addEdge('d', 'f')
g.addEdge('e', 'f')
//          a
//         / \
//        b   c
//        |   |
//        d---e
//         \ /
//          f