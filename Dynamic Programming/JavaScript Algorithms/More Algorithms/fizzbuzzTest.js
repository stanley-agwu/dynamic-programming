// Write a simple fizzBuzz game that is scalable if given an Array A of numbers from 1 to 100

const solution = (A) => {
    let result;

    for (let i of A) {
        result = '';

        if (i % 3 === 0) result += 'fizz';
        if (i % 5 === 0) result += 'buzz';

        if(result === '') result += String(i);

        console.log(result);
    }
}

const A = Array(101).fill(0).map((_, index) => index);
solution(A);