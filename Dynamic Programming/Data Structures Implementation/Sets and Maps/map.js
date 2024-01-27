const nameMap = new Map([['abby', 23], ['bell', 45], ['charly', 90]]);

// has -> returns true or false if it has key
console.log(nameMap.has(23)); // false
console.log(nameMap.has('bell')); // true

// set -> adds a new key-value pair to the map
nameMap.set('dolce', 82);

// get -> 	gets the value for a key in a Map
const value = nameMap.get('dolce');
console.log({ value });

// size -> returns the length or size of the Map
const size = nameMap.size;
console.log({ size });

// .entries() -> returns an array of key-value arrays
nameMap.entries()

// Object.fromEntries(map.entries()) -> converts a map to an object
const object = Object.fromEntries(nameMap.entries());

// Array.from(map.entries()) -> converts a map to an array of key-value arrays
const array = Array.from(nameMap.entries());
console.log({ object, array });

// forEach -> forEach returns values of each item
const forEach = nameMap.forEach(name => {
  console.log(name);
});

// map -> mapping over a MAP
const keys = Array.from(nameMap.keys()).map((key) => key);
const values = Array.from(nameMap.values()).map((value) => value);
const names = Array.from(nameMap).map((name) => name);
console.log({ keys, values, names });

// delete -> removes a key-value pair from the Map
nameMap.delete('bell');

const items = Array.from(nameMap).map((name) => name);
console.log({ items });

// clear -> removes all key-value pairs from the Map | returns an empty Map
nameMap.clear();

const items2 = Array.from(nameMap).map((name) => name);
console.log({ items2 });