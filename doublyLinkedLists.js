class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Insertion
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Deletion
  pop() {
      if(!this.tail) return undefined
      let oldTail = this.tail
      if(this.length === 1) {
          this.head = null
          this.tail = null
      } else {
          this.tail = oldTail.prev
          this.tail.next = null
          oldTail.prev = null
      }
      this.length--
      return oldTail
  }
  // Utilities
  print() {
      let current = this.head
      while(current) {
          console.log(current.val)
          current = current.next
      }
  }
}

let list = new DoublyLinkedList
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)