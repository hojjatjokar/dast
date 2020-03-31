class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    if (!value) return;

    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;

    const result = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    result.prev = null;
    this.length--;

    return result;
  }

  shift() {
    if (this.length === 0) return;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.length) {
      this.head.prev = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }

    this.head = node;
    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length) return;
    let current;

    if (index > Math.floor(this.length / 2)) {
      let count = this.length - 1;
      current = this.tail;

      while (index < count) {
        current = current.prev;
        count--;
      }
    } else {
      let count = 0;
      current = this.head;

      while (index > count) {
        current = current.next;
        count++;
      }
    }

    return current;
  }
}

const n = new DoublyLinkedList();

n.push(1);
n.push(2);
n.push(3);
n.push(4);
n.push(5);
n.push(6);
n.push(7);
n.push(8);
n.push(9);

console.log(n.get(6).value);
