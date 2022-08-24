class Node {
  constructor(value) {
    this.value = value;
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
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    let temp1 = this.first.next;
    this.first = temp1;
    this.size--;
    return temp1.value;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.pop();
stack.pop();

console.log(stack);

//que (push, shift) (unShift, pop) , stack push pop
