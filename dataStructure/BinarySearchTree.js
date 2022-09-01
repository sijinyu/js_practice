class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    let swap = false;
    while (!swap) {
      if (current.value < val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else if (current.left) {
        current = current.left;
      } else {
        current.left = newNode;
        return this;
      }
    }
    swap = true;
  }
  contains(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

var tree = new BinarySearchTree();
tree.insert(1);
