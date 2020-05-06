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

  get(i) {
    if (i >= this.length) {
      return;
    }
    let result = this.head;
    let counter = 0;

    while (counter < i) {
      result = result.next;
      counter++;
    }

    return result;
  }

  set(i, value) {
    const item = this.get(i);

    if (item) {
      item.value = value;
      return true;
    }

    return false;
  }

  insert(i, value) {
    if (i < 0 || i > this.length) return;
    if (i == 1) return this.shift(value);
    if (i == this.length) return this.push(value);

    const node = new Node(value);
    const prev = this.get(i - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
  }
}
