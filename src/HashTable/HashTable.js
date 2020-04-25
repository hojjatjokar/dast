class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const hash = this._hash(key);

    if (!this.keyMap[hash]) return null;

    const item = this.keyMap[hash].find((item) => item[0] == key);
    return item && item[1];
  }

  keys() {
    return this.keyMap.reduce((acc, curr) => {
      return acc.concat(curr.map((item) => item[0]));
    }, []);
  }

  values() {
    return this.keyMap.reduce((acc, curr) => {
      return [...acc, ...curr.map((item) => item[1])];
    }, []);
  }
}

let ht = new HashTable();

ht.set('hello world', 'goodbye!!');
ht.set('dogs', 'are cool');
ht.set('cats', 'are fine');
ht.set('i loe', 'pizza');
ht.set('cop', 'afdadf');
ht.set('i adfa', 'asdfadf');
ht.set('i love', 'pizza');

console.log(ht.values());
