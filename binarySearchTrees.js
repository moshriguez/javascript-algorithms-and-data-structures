// Binary Search Tree
// Every parent node has at most 2 children
// Every node to the left of a parent is ALWAYS LESS THAN the parent
// Every node to the right of a parent is ALWAYS GREATER THAN the parent

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
