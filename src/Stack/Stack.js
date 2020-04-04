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
    // Because we want constant time with both push and pop
    // We push and pop from start of singly linked list instead of end of that
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //this.first.next = this.first;
      //this.first = node;
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this.size;
  }

  pop() {
    // Because we want constant time with both push and pop
    // We push and pop from start of singly linked list instead of end of that
    if (this.size < 1) return;
    const result = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return result;
  }
}
