class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbbleUp();
  }
  bubbbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.value[parentIdx];
      if (parent >= element) break;
      this.value[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
