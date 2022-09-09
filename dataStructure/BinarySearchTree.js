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
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
      
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.irght) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    var data = [];

    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
     var data = [];
     var current = this.root;
     function traverse(node) {
       if (node.left) traverse(node.left);
       data.push(node.value);
       if (node.right) traverse(node.right);
       
     }
     traverse(current);
     return data;

  }
}

// console.log([])
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS())


function solution(numbers, target) {
  let i = -1;
  let count = 0;
  let list = numbers;
  function sum(arr){
    
   return arr.reduce((a,b)=> a+=b,0)
  }

  function result(array) {
    if(typeof array !== "object") return null
    i++;
    if (numbers.length - 1 == i) return 0;
    if (sum(array) === target) {
      count += 1;
    } 
    list = numbers.slice()
    list.splice(i, 1, -list[i]);
    result(list);
  }
  result(numbers);
  return count;
}
console.log(solution([1, 1, 1, 1, 1],3))