// Stacks
// LIFO - Last In First Out
// implementation via an array:
const stack = []
// adding and removing from the end of array satisfies stack rule
stack.push('google')
stack.push('instagram')
stack.push('youtube')
stack.pop()
stack.pop()
stack.pop()
// so does adding and removing from the beginning of array
stack.unshift('create new file')
stack.unshift('resized file')
stack.unshift('cloned out wrinkle')
stack.shift()
stack.shift()
stack.shift()
// however push/pop is better BigO due to the reindexing that occurs with unshift/shift

// implementation via a singly linked list class
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // to keep BigO O(1) we are using shift and unshift logic, but calling them push and pop to keep consistant with array implementation
    push(val) {
        let node = new Node(val)
        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            let after = this.first
            node.next = after
            this.first = node
        }
        return ++this.size
    }
    pop() {
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