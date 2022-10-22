// sum list

// Write a function, sumList, that takes in the head of a linked list 
// containing numbers as an arguement. The function should return the \
// total sum of all values in the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> -7

// Iterative solution
// Time Complexity => O(n) Space Complexity => O(1)
const sumListI = (head) =>  {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

console.log(sumListI(a)); // 19

// Recursive solution
// Time Complexity => O(n) Space Complexity => O(n) -- n calls on the call stack
const sumListR = (head) => {
  if (head === null) return 0;
  return head.val + sumListR(head.next);
}

console.log(sumListR(a)); //19