// reverse list

// Write a function, reverseList, that takes in the head of a linked list 
// as an arguement. The function should reverse the order of the nodes in the  
// linked list in-place and return the new head of the reversed linked list.
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
const reverseListI = (head) =>  {
  let current = head;
  let previous = null;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

console.log(reverseListI(a)); // 'e'

// Recursive solution
// Time Complexity => O(n) Space Complexity => O(n) -- n calls on the call stack
const reverseListR = (head, previous = null) => {
  if (head === null) return previous;
  const next = head.next;
  head.next = previous;
  return reverseListR(next, head);
}

console.log(reverseListR(a)); // 'e'