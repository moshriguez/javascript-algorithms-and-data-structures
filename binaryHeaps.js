// Binary Heaps
// very similar to binary search tree
// each parent has at most 2 child nodes
// all children of each node are as full as they can be and left children are filled out first
// no implied ordering between children
// Max Binary Heap - parent nodes are always LARGER than child nodes
// Min Binary Heap - parent nodes are always SMALLER than child nodes

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            if(this.values[idx] <= this.values[parentIdx]) break;
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
            idx = parentIdx
        }
    }
}

let heap = new MaxBinaryHeap
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)