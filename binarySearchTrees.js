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
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current.val !== val) {
        if (current.val === val) return undefined;
        if (val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            current = current.right;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            current = current.left;
          }
        }
      }
    }
    return this;
  }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)