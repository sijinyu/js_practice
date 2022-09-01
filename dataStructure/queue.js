class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const test3 = { val: 1, next: 2 };

const test1 = test3;
let test2 = test3;
test2.next = 123;
console.log(test1, test2);
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = { val: 1, next: null };
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var oldNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldNode.val;
  }
}

let test = new Queue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
