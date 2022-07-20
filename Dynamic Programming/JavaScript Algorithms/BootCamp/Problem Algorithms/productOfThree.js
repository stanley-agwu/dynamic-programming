/*1: Create a function that, given a list of integers, returns the
highest product between three of those numbers. For example,
given the list [1, 10, 2, 6, 5, 3] the highest product
would be 10 * 6 * 5 = 300
*/
//Naive Solution Using sort() method 
const highestProduct=(array)=>{
	//const sortDesc=array.sort((a, b)=> b - a);
	const array2=array.sort((a, b)=> a - b);
	const n=array2.length
	const a=array2[0]*array2[1]*array2[n-1]
	const b=array2[n-1]*array2[n-2]*array2[n-3]
	// return Math.max(a, b)
	return a > b ? a : b
}

// Time Complexity ===>  O(nlogn) because of sort() built-in method
//Space Complexity ===> O(n)

//Using Single scan Iteration method
//Works for array length >= 5
const highestProduct2=(array)=>{
	let min1=array[0];
	let min2=array[0];
	let max1=array[0];
	let max2=array[0];
	let max3=array[0];

	for (let num of array){
		if (num <= min1){
			min2 = min1;
			min1 = num
		} else if (num <= min2){// if num lies between min1 and min2
			min2 = num
		}
		if (num >= max1){
			max3 = max2;
			max2 = max1;
			max1 = num;
		}
		else if (num >= max2 && num < max1){// if num lies between max1 and max2
			max3 = max2;
			max2 = num;
		}
		else if (num >= max3 && num < max2){
			max3 = num
		}
	}
	return Math.max(max1 * max2 * max3, min1 * min2 * max1)
}
// Time Complexity ===>  O(n)
//Space Complexity ===> O(1)

console.log(highestProduct([1, 10, 2, 6, 5, 3, -12, -8]))//960
console.log(highestProduct([1, 10, 2, 6, 5, 3]))//300
console.log(highestProduct([1, 10, 2, 6, 5, 3, 12, -8]))//720
console.log(highestProduct2([1, 10, 2, 6, 5, 3, -12, -8]))//960
console.log(highestProduct2([1, 10, 2, 6, 5, 3]))//300
console.log(highestProduct2([1, 10, 2, 6, 5, 3, 12, -8]))//720
