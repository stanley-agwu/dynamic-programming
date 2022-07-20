// Create a function that, given a list of words, returns the first
// three longest word in the list. For example, given the
// list ["wedding", "bridge", "sport-car","north", "pig", "television"]
// the function should return "television", "sport-car","wedding".

//Naive Solution Using sort()
const longest_word = (wordArray) => {
    const n = wordArray.length
    const array = wordArray.sort((a, b) => a.length - b.length)
    return `The three longest words are: ${array[n-1]}, ${array[n-2]}, ${array[n-3]}`
}
// Time Complexity ==> O(nlogn)
// Space Complexity ==> O(n)

//Best Solution Using Scan once
const longest_word2 = (wordList) => {
    const N = wordList.length
    let firstWord = "";
    let secondWord = "";
    let thirdWord = "";
   
    for (let word of wordList){
        if (word.length > firstWord.length){
            thirdWord = secondWord;
            secondWord = firstWord;
            firstWord = word
        }
        else if (word.length > secondWord.length && word.length <= firstWord.length){
            thirdWord = secondWord;;
            secondWord = word
        }
        else if (word.length > thirdWord.length && word.length <= secondWord.length){
            thirdWord = word
        }
    }
	return `The three longest words are: ${firstWord}, ${secondWord}, ${thirdWord}`
}	
// Time Complexity ==> O(n) Linear
// Space Complexity ==> O(1)


const word_list= ["wedding", "bridge", "north", "North-Pole", "pig", "television", "sport-car", "stockbroker"]
console.log(longest_word(word_list))
console.log(longest_word2(word_list))