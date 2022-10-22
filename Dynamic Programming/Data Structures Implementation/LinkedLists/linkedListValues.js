// list values problems

// Write a function, linkedListValues, that takes in the head of a linked 
// list as an arguement. The function should return an array containing 
// all values of the nodes in the linked list.

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
// Time Complexity => O(n) Space Complexity => O(n)
const linkedListValuesI = (head) => {
  let current = head;
  const valuesList = [];

  while (current !== null) {
    valuesList.push(current.val);
    current = current.next;
  }
  return valuesList;
}

console.log(linkedListValuesI(a)); // ['a', 'b', 'c', 'd']

// Recursive solution
// Time Complexity => O(n^2) Space Complexity => O(n^2)
const linkedListValuesR = (head) => {
  if (head.next === null) return head.val;
  return [head.val, ...linkedListValuesI(head.next)];
}

console.log(linkedListValuesR(a)); // ['a', 'b', 'c', 'd']

// Recursive solution (Efficient Solution)
// Time Complexity => O(n) Space Complexity => O(n)
const linkedListValuesR2 = (head) => {
  const valuesList = [];
  return _helper(head, valuesList);
}

const _helper = (head, valuesList) => {
  if (head === null) return valuesList;
  valuesList.push(head.val);
  return _helper(head.next, valuesList);
}

console.log(linkedListValuesR2(a)); // ['a', 'b', 'c', 'd']