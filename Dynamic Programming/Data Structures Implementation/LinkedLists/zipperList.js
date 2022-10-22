// zipper list

// Write a function, zipperList, that takes in the head of two linked lists
// as arguements. The function should zipper the two lists together into  
// single linked list by alternating nodes. If one of the linked lists is
// longer than the other, the resulting list should terminate with the
// remaining nodes. The function should return the head of the zippered
// linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const v = new Node('v');
const w = new Node('w');
const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

v.next = w;
w.next = x;
x.next = y;
y.next = z;

// v -> w -> x -> y -> z

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

a.next = b;
b.next = c;

// a -> b -> c

// Iterative solution
// Time Complexity => O(n) Space Complexity => O(1)
const zipperListsI = (head1, head2) =>  {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  let str = head1.val + ' => ';

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    str += tail.val + ' => '
    count++;
  }

  if (current1 === null) tail.next = current2;
  if (current2 === null) tail.next = current1;
  let current = tail.next;

  while (current !== null) {
    if (current.next === null) {
      str += current.val;
    } else str += current.val + ' => ';
    current = current.next;
  }
  console.log(str);

  return head1;
}

console.log(zipperListsI(v, a)); // 

// Recursive solution
// Time Complexity => O(n) Space Complexity => O(n) -- n calls on the call stack
const zipperListsR = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListsR(next1, next2);
  return head1;
}

// console.log(zipperListsR(v, a)); // 

// Recursive solution (Not the best)
// Time Complexity => O(n) Space Complexity => O(n) -- n calls on the call stack
const zipperListsR2 = (head1, head2) => {
  let tail = head1;
  let str = head1.val + ' => ';
  _helper(head1.next, head2, tail, str, count = 0);
  let current = tail.next;
  while(current !== null) {
    if (current.next !== null) {
      str += current.val + ' => ';
    } else str += current.val;
    current = current.next;
  }
  console.log(str);
  return head1;
}

const _helper = (current1, current2, tail, str, count) => {
  if (current1 === null) return tail.next = current2;
  if (current2 === null) return tail.next = current1;

  if (count % 2 === 0) {
    tail.next = current2;
    current2 = current2.next;
  } else {
    tail.next = current1;
    current1 = current1.next;
  }
  str += tail.val + ' => ';
  return _helper(current1, current2, tail.next, str, count + 1)
}
// console.log(zipperListsR2(v, a)); //