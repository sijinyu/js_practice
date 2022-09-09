class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldNode = this.first;
      this.first = newNode;
      newNode.next = oldNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.frist) return null;
    let oldNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldNode.next;
    this.size--;
    return oldNode.val;
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
