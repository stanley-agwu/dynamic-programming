/* Trie Data Structure */
// insert
// search
// startsWith


class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert (word) {
    let current = this.root;

    for(let char of word) {
      if (!current.children[char]) {
        current.children[char] = new Node();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search (word) {
    let current = this.root;

    for(let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  }

  startsWith (prefix) {
    let current = this.root;

    for(let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char]
    }
    return true;
  }
}

const myTrie = new Trie()
myTrie.insert('ball'); 
myTrie.insert('bat'); 
myTrie.insert('doll'); 
myTrie.insert('dork'); 
myTrie.insert('do'); 
myTrie.insert('dorm');
myTrie.insert('send');
myTrie.insert('sense');
console.log(myTrie.search('doll'));
console.log(myTrie.search('dor'));
console.log(myTrie.search('dorf'));
console.log(myTrie.startsWith('sens'));
console.log(myTrie.startsWith('dorr'));
console.log(myTrie.startsWith('dor'));