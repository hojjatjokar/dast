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

  extractMax() {
    const max = this.values[0];
    this.values[0] = this.values.pop();

    this.sinkDown();

    return max;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[index];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild = this.values[leftIndex];
      let rightChild = this.values[rightIndex];
      let largest = Math.max(leftChild, rightChild);
      let largestIndex = largest === leftChild ? leftIndex : rightIndex;

      if (element > largest) break;
      if (!leftChild && !rightChild) break;

      this.values[index] = largest;
      this.values[largestIndex] = element;
      index = largestIndex;
    }
  }
}

let heap = new MaxBinaryHeaps();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(53);
console.log(heap.extractMax());
console.log(heap.values);

// [41,39,33,18,27,12]
