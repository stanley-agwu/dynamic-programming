//Write a function which takes in a string and returns counts 
//of each character in the string excluding spaces and non-alphaNumeric chars.
//This Method uses Iteration

//Using charCodeAt to check if string is AlphaNumeric
//charCodeAt method is much faster!!!!!
const char_counter = (word) =>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    let results = {};
    
    for (let char of word){
        if (isAlphaNumeric(char)){
            char = char.toLowerCase();
            results[char] = ++results[char] || 1;
        }
    }

    return results;
}

const isAlphaNumeric = (char) =>{
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

console.log(char_counter("This is best day! of the year 2021! in March 13!"))

//Using Regular Expressions to Check if string is AlphaNumeric

const char_counter2 = (word) =>{
    let results = {};
    
    for (let char of word){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            results[char] = ++results[char] || 1;
        }
    }

    return results;
}


const char_counter = (word) =>{
    let results = {};
    
    for (let i = 0 ; i < word.length; i++){
        let char = word[i].toLowerCase();
        if (/[a-z0-9]/.test(char)){
            results[char] ? results[char] += 1 : results[char] = 1 ;
        }
    }

    return results;
}