class MaxBinaryHeaps {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let value = this.values[index];

    while (true) {
      const parentIndex = Math.floor(index - 1 / 2);
      const parentValue = this.values[parentIndex];

      if (value <= parentValue || !parentValue) break;

      this.values[index] = parentValue;
      this.values[parentIndex] = value;
      index = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeaps();
heap.insert(41);
console.log(heap.values);
heap.insert(39);
console.log(heap.values);
heap.insert(33);
console.log(heap.values);
heap.insert(18);
console.log(heap.values);
heap.insert(27);
console.log(heap.values);
heap.insert(12);
console.log(heap.values);
heap.insert(53);
console.log(heap.values);

// [41,39,33,18,27,12]
