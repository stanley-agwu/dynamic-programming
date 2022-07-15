// TURING ---- Most Repeated Character

// Given a a string s, return the most frequent character (an alphabet) in the string s.

const solution = (s) => {
    const prefixHash = {};
    let value = 0;
    let result = '';

    for (let i of s) {
        if (/[a-zA-Z]/.test(i)) {
            prefixHash[i] = prefixHash[i] + 1 || 1;

            if (prefixHash[i] > value) {
                value = prefixHash[i];
                result = i;
            };
        }

    }

    console.log(prefixHash);

    return result;
}

console.log(solution('abcddefda1111133333333'));
console.log(solution('AA0AB0BB0cccaaaw00wo0BBBw123123'));
console.log(solution('%%%%%%%1234GGGGGGGGGijfkgdldiiiiiiiiiiitrgbfkggggggg000076565ygfhfmriryrte84654939'));


const dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
}

const bin2dec = (bin) => {
    return parseInt(bin, 2).toString(10);
}

// console.log(dec2bin(32));
// console.log(dec2bin(8));

// console.log(bin2dec(1000001));
// console.log(bin2dec(1001));