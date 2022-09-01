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
    var newNode = new Node(val);
    if (!this.first) {
      console.log(1);
      this.first = newNode;
      this.last = newNode;
    } else {
      var oldNode = this.first;
      this.first = newNode;
      newNode.next = oldNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.frist) return null;
    var oldNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldNode.next;
    this.size--;
    return oldNode.val;
  }
}
let test = new Stack();
test.push(1);
test.push(2);
test.push(3);
console.log(test);
