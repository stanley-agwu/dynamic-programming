// Linked List traversal

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D

// Traverse Iteratively
// Time Complexity => O(n) Space Complexity => O(n)
const traverseLinkedListI = (head) => {
  let current = head;
  let str = '';

  while (current !== null) {
    str += current.next ? current.val + ' => ' : current.val;
    current = current.next;
  }
  console.log(str);
}

traverseLinkedListI(a);

// Traverse Recursively
// Time Complexity => O(n) Space Complexity => O(n)
const traverseLinkedListR = (head) => {
  if (head.next === null) return head.val;
  return head.val + ' => ' + traverseLinkedListR(head.next);
}

console.log(traverseLinkedListR(a));