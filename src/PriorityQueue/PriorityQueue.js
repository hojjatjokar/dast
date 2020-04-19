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
}
