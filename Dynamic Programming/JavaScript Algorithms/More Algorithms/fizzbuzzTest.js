//Write a program that console logs the numbers from 1 to n.
//But for multiples of three print "fizz" instead of the number 
//and for the multiples of five print "buzz". For numbers which 
//are multiples of both three and five "fizzbuzz".

//Great Solution 
const fizzbuzz = (n) => {
    for (let i = 1; i <= n; i += 1) {
        let result = '';

        if (i % 3 === 0) result += 'fizz';
        if (i % 5 === 0) result += 'buzz';

        if(result === '') result += String(i);

        console.log(result);
    }
}

// const A = Array(100).fill(0).map((_, index) => index + 1);
// console.log(A);
fizzbuzz(100);

//Using Iterative Method
const fizzbuzz1 = (n) => {
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
        else if (i % 5 === 0) console.log("buzz");
        else if (i % 3 === 0) console.log("fizz");
        else console.log(i);
    }  
}

//Using Recursive Method
const fizzbuzz2 = (n) => {
    if (n === 0 ) return;
    if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
    else if (n % 5 === 0) console.log("buzz");
    else if (n % 3 === 0) console.log("fizz");
    else console.log(n)

   fizzbuzz2(n - 1)
     
}


// fizzbuzz(5)
// fizzbuzz2(5)
fizzbuzz(15)
fizzbuzz2(15)