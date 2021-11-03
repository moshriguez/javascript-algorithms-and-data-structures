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
    // Insertion
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
    print() {
        let current = this.head
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
    // Deletion
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

}