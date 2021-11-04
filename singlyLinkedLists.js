// piece of data - val
// reference to next node - node

class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    // Insertion - BigO = O(1)
    push(val){
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    insert(i, val) {
        if(i<0 || i>this.length) return false
        if(i === this.length) return !!this.push(val)
        if(i === 0) return !!this.unshift(val)
        let newNode = new Node(val)
        let before = this.get(i-1)
        newNode.next = before.next
        before.next = newNode
        this.length++
        return true
    }
    // Deletion - BigO = O(n) or O(1) for shift()
    pop() {
        if(!this.head) return undefined
        let current = this.head
        let previous = current
        while(current.next) {
            previous = current
            current = current.next
        }
        this.tail = previous
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if(!this.head) return undefined
        let current = this.head
        this.head = current.next
        current.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    remove(i) {
        if(i<0 || i >= this.length) return undefined
        if(i === this.length-1) return this.pop()
        if(i === 0) return this.shift()
        let before = this.get(i-1)
        let removedNode = before.next
        before.next = removedNode.next
        removedNode.next = null
        this.length--
        return removedNode
    }
    // Utilities - BigO = O(n) for all below
    print() {
        let current = this.head
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
    get(i) {
        if(i<0 || i >= this.length) return null
        let currIdx = 0
        let current = this.head
        while(currIdx !== i){
            current = current.next
            currIdx++
        }
        return current
    }
    set(i, val) {
        let node = this.get(i)
        if(node) {
            node.val = val
            return true
        }
        return false
    }
    reverse() {
        if(this.length < 2) return this
        let prev = null
        let current = this.head
        let next = current.next
        this.tail = current
        while(current) {
            current.next = prev
            prev = current
            current = next
            if(next) {
                next = next.next
            } else {
                this.head = prev
            }
        }
        return this
    }
    // teacher's reverse:
    // reverse() {
    //     let node = this.head
    //     this.head = this.tail
    //     this.tail = node
    //     let prev = null
    //     for(let i=0; i<this.length; i++) {
    //         let next = node.next
    //         node.next = prev
    //         prev = node
    //         node = next
    //     }
    //     return this
    // }
}