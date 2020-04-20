class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  dequeue() {
    const result = this.values.shift();
    this.sinkIn();
    return result;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const node = this.values[index];

    while (true) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (parentNode && node.priority < parentNode.priority) {
        this.values[index] = parentNode;
        this.values[parentIndex] = node;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  sinkIn() {
    const node = this.values.pop();
    let index = 0;
    this.values.unshift(node);
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      const leftNode = this.values[leftIndex];
      const rightNode = this.values[rightIndex];
      let smallest;
      let smallestIndex;

      if (leftNode && leftNode.priority < rightNode.priority) {
        smallest = leftNode;
        smallestIndex = leftIndex;
      } else if (rightNode) {
        smallest = rightNode;
        smallestIndex = rightIndex;
      }

      if (!smallest || node.priority < smallest.priority) break;

      this.values[smallestIndex] = node;
      this.values[index] = smallest;
      index = smallestIndex;
    }
  }
}

const pq = new PriorityQueue();

pq.enqueue('a', 10);

pq.enqueue('b', 7);

pq.enqueue('c', 4);

pq.enqueue('d', 1);

pq.enqueue('f', 2);

pq.enqueue('g', 6);

console.log(pq.dequeue());

console.log(pq);
