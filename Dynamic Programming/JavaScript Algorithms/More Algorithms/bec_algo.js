const people = [
  {age: 28, name: 'Micheal'},
  {age: 22, name: 'Janet'},
  {age: 25, name: 'Robert'},
  {age: 21, name: 'Kyle'},
  {age: 27, name: 'Helena'},
  {age: 28, name: 'Micheal'},
  {age: 25, name: 'Christy'},
  {age: 22, name: 'Janet'},
]

console.log(people.map(({ name, age}) => `${name}: ${age}`));

// Question: Display above array without the duplicates

// Solution 1
const displayNonDuplicates = () => {
  const nonDuplicatePersonsList = [];

  for(let person of people) {
    const stringifiedItem = JSON.stringify(person)
    if (!nonDuplicatePersonsList.includes(stringifiedItem)) {
      nonDuplicatePersonsList.push(stringifiedItem)
    }
  }
  return nonDuplicatePersonsList;
}

console.log(displayNonDuplicates(people));
// Time complexity: O(n * n)
// Space complexity: O(n)

// Solution 2 -- Optimized Time complexity
const OptimizedDisplayNonDuplicates = () => {
  const nonDuplicatePersonsSet = new Set();

  for(let person of people) {
    nonDuplicatePersonsSet.add(JSON.stringify(person));
  }
  return nonDuplicatePersonsSet;
}

console.log(OptimizedDisplayNonDuplicates(people));
// Time complexity: O(n)
// Space complexity: O(n)

// Set Methods
const personsSet = new Set();
personsSet.add(1);
personsSet.delete(1);
personsSet.entries();
personsSet.has(1);
personsSet.size;
personsSet.values();
personsSet.keys();
personsSet.clear();