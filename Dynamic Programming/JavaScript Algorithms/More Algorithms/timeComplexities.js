// Linear Time Complexity ==> O(m + n)
const foo = (m, n) =>{
    for (let i = 0; i < m; i++){
        console.log("hi");
    }
    for (let i = 0; i < n; i++){
        console.log("bye");
    }
}
//Time Complexity = O(m + n)

//Polynomial Time Complexities ==> n^c
//O(n * n)
let bar = (str) =>{
    if (str.length === 0) return ;

    const firstChar = str[0];
    const rest = str.slice(1);
    bar(rest);
}
//Time Complexity = O(n*n) ~ O(n^2)

const foo = (array1, array2) =>{
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++){
            console.log(array1[i], array2[j]);
        }
    } 
}
let colors  = ["yellow", "teal", "navy", "white"];
let colors  = ["shirt", "jeans", "skirt"];
//Time Complexity = O(m * n) ~ O(m * n )---Polynomial

//Exponential Time Complexities ==> c^n 
//O(2^n)
const foo = (n) =>{
    if (n === 1) return;
    foo(n - 1);
    foo(n - 1);
}
//Time Complexity = O(2^n)
//Space Complexity = O(n)) Linear

//O(3^n)
const foo = (n) =>{
    if (n === 1) return;
    foo(n - 1);
    foo(n - 1);
    foo(n - 1);
}
//Time Complexity = O(3^n)
//Space Complexity = O(n)) Linear

//O(2^n)
const zap = (n) =>{
    if (n <= 1) return;
    foo(n - 2);
    foo(n - 2);
}
zap(16)
//Time Complexity = O(2^(n/2)) ~ O(2^n)
//Space Complexity = O(n)) Linear

// Factorial Time ComplexityO(n!)
const foo = (n) =>{
    if (n === 1) return;
    for (let i = 0; i < n; i++){
        foo(n - 1);
    }
}
//Time Complexity = O(n!)