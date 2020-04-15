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

  find(value) {
    if (!this.root) return false;

    if (this.root == value) return true;

    function check(target, value) {
      if (!target) return false;
      if (target.value == value) return true;

      if (value > target.value) {
        return check(target.right, value);
      } else {
        return check(target.left, value);
      }
    }
    return check(this.root, value);
  }

  BFS() {
    const q = [];
    const result = [];
    let current = this.root;

    while (current) {
      result.push(current.value);
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
      current = q.shift();
    }

    return result;
  }

  DFSPreOrder() {
    const result = [];
    const current = this.root;

    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return result;
  }

  DFSPostOrder() {
    if (!this.root) return;
    const result = [];

    function traverse(current) {
      if (!current) return;

      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);

      result.push(current.value);
    }

    traverse(this.root);

    return result;
  }

  DFSInOrder() {
    if (!this.root) return;
    const result = [];

    function traverse(current) {
      if (!current) return;

      if (current.left) traverse(current.left);
      result.push(current.value);
      if (current.right) traverse(current.right);
    }

    traverse(this.root);

    return result;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
