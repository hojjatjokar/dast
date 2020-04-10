class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    inner(this.root, value);

    function inner(target, value) {
      if (value === target.value) return this;

      if (value > target.value) {
        if (target.right === null) {
          target.right = node;
          return this;
        }
        return inner(target.right, value);
      } else {
        if (target.left === null) {
          target.left = node;
          return this;
        }
        return inner(target.left, value);
      }
    }
  }
}
