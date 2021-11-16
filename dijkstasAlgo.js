// Dijkstra's Shortest Path Algorithm
// start with a weighted graph:

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
    // {'a': [{node: 'b', weight: 10}, {node: 'c', weight: 5}]}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijksta(start, end) {
    const distances = {}
    const pq = new PriorityQueue()
    const previous = {}
    let path = []
    let current
    // build initial state
    for(let vertex in this.adjacencyList) {
        if (vertex === start) {
            distances[vertex] = 0
            pq.enqueue(vertex, 0)
        } else {
            distances[vertex] = Infinity
            pq.enqueue(vertex, Infinity)
        }
        previous[vertex] = null
    }
    while(pq.values.length) {
        current = pq.dequeue()
        if (current === end) {
            while(previous[current]) {
                path.push(current)
                current = previous[current]
            }
            break
        }
        this.adjacencyList[current].forEach(n => {
            let sum = distances[current] + n.weight
            if(distances[n.node] > sum) {
                distances[n.node] = sum
                previous[n.node] = current
                pq.enqueue(n.node, sum)
            }
        })
    }
    return {path: path.concat(current).reverse(), distance: distances[end]}
    // console.log(distances, pq.values, previous)
  }
}

// we also will need a Priority Queue:
class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    } 
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            if(this.values[idx].priority >= this.values[parentIdx].priority) break;
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    swap(i1, i2) {
        [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]]
    }
    dequeue() {
        if(!this.values.length) return undefined
        this.swap(0, this.values.length-1)
        const min = this.values.pop()
        this.trickleDown()
        return min.val
    }
    trickleDown() {
        let idx = 0, leftIdx = 1, rightIdx = 2, min
        if(!this.values[leftIdx]) return
        else if(!this.values[rightIdx]) min = this.values[leftIdx].priority
        else {
            min = Math.min(this.values[leftIdx].priority, this.values[rightIdx].priority)
        }
        while(this.values[idx].priority > min) {
            let child = this.values[leftIdx].priority === min ? leftIdx : rightIdx
            this.swap(idx, child)
            idx = child
            leftIdx = 2*idx + 1
            rightIdx = 2*idx + 2
            if(!this.values[leftIdx]) return
            else if(!this.values[rightIdx]) min = this.values[leftIdx].priority
            else {
                min = Math.min(this.values[leftIdx].priority, this.values[rightIdx].priority)
            }
        }
    }
}

let g = new WeightedGraph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')
g.addVertex('e')
g.addVertex('f')
g.addVertex('g')
g.addVertex('h')
g.addEdge('a', 'b', 1)
g.addEdge('a', 'c', 2)
g.addEdge('a', 'e', 5)
g.addEdge('b', 'd', 3)
g.addEdge('b', 'c', 7)
g.addEdge('c', 'e', 2)
g.addEdge('c', 'f', 1)
g.addEdge('c', 'h', 4)
g.addEdge('d', 'f', 4)
g.addEdge('e', 'f', 1)
g.addEdge('f', 'h', 3)
g.addEdge('f', 'g', 5)
g.addEdge('g', 'h', 8)
