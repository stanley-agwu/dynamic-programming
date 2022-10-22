// linked list find

// Write a function, linkedListFind, that takes in the head of a linked 
// list and a target value. The function should return a boolean indicating 
// whether or not the linked list contains the target.

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

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d


// Iterative solution
// Time Complexity => O(n) Space Complexity => O(1)
const linkedListFindI = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
}

console.log(linkedListFindI(a, 'c'));
console.log(linkedListFindI(a, 'g'));

// Recursive solution
// Time Complexity => O(n) Space Complexity => O(n) -> make n calls on call stack
const linkedListFindR = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFindR(head.next, target);
}
console.log(linkedListFindR(a, 'c'));
console.log(linkedListFindR(a, 'g'));