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
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
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
  pop() {
    if (!this.head) return undefined;
    let poperNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poperNode.prev;
      this.tail.next = null;
      poperNode.prev = null;
    }

    this.length--;
    return poperNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }
  unShift(val) {
    if (this.length === 0) {
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
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 1) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    let focusNode = this.get(index);
    if (focusNode != null) {
      focusNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= index.length) return false;
    if (index === 0) return this.unShift(val);
    if (index === this.length - 1) return this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= index.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;

    return removeNode;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("1");
doublyLinkedList.push("12");
doublyLinkedList.push("12ㅑ3");
