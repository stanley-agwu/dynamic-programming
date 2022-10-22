// get node value

// Write a function, getNodeValue, that takes in the head of a linked list 
// and an index. The function should return the value of the linked list 
// at the specified index. If there is no node at the given index, then 
// return null.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// a -> b -> c -> d -> e

// Iterative solution
// Time Complexity => O(n) Space Complexity => O(1)
const getNodeValueI = (head, index) =>  {
  let current = head;
  let idx = 0;

  while (current !== null) {
    if (idx === index) return current.val; 
    current = current.next;
    idx += 1;
  }
  return null;
}

console.log(getNodeValueI(a, 2)); // 'c'
console.log(getNodeValueI(a, 4)); // 'e'

// Recursive solution
// Time Complexity => O(n) Space Complexity => O(n) -- n calls on the call stack
const getNodeValueR = (head, index) => {
  return _helper(head, 0, index);
}

const _helper = (head, idx, index) => {
  if (head === null) return null;
  if (idx === index) return head.val;
  return _helper(head.next, idx + 1, index);
}

console.log(getNodeValueR(a, 2)); // 'c'
console.log(getNodeValueR(a, 3)); // 'd'

// Recursive solution 2
// Time Complexity => O(n) Space Complexity => O(n) -- n calls on the call stack
const getNodeValueR2 = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValueR2(head.next, index - 1);
}

console.log(getNodeValueR2(a, 2)); // 'c'
console.log(getNodeValueR2(a, 3)); // 'd'