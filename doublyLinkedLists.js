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
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let before = this.get(i - 1);
    newNode.next = before.next;
    newNode.prev = before;
    newNode.next.prev = newNode;
    before.next = newNode;
    this.length++;
    return true;
  }
  // Deletion
  pop() {
    if (!this.tail) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    let node = this.get(i);
    let before = node.prev;
    let after = node.next;
    before.next = after;
    after.prev = before;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }
  // Utilities
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;
    let counter, current;
    if (i <= Math.floor(this.length / 2)) {
      counter = 0;
      current = this.head;
      while (counter !== i) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== i) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(i, val) {
    let node = this.get(i);
    if (node) node.val = val;
    return !!node;
  }
  reverse() {
      let current = this.head
      this.head = this.tail
      this.tail = current
      while(current) {
          let newPrev = current.next
          let newAfter = current.prev
          current.prev = newPrev
          current.next = newAfter
          current = current.prev
      }
      return this
  }
}

// let list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
