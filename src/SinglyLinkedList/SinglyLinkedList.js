class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length = this.length + 1;
    return this;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }

    const result = this.tail;
    let temp = this.head;

    while (temp.next && temp.next !== result) {
      temp = temp.next;
    }

    temp.next = null;
    this.tail = temp;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return result;
  }

  shift() {
    if (!this.head) {
      return;
    }

    const result = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    }

    this.length--;

    return result;
  }

  unshift(value) {
    const item = new Node(value);
    item.next = this.head;
    this.head = item;
    this.length++;

    return this;
  }
}
