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

  push(value) {
    const node = new Node(value);

    if (this.size == 0) {
      this.first = value;
      this.last = value;
    } else {
      node.next = this.first;
      this.first = node;
    }

    this.size++;

    return this;
  }

  pop() {
    if (this.size === 0) return;
    const result = this.first;

    if (this.size === 1) {
      this.first = null;
      this.first = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return result;
  }
}

const stack = new Stack();
