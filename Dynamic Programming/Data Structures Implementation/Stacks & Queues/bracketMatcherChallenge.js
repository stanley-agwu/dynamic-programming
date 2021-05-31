//Bracket Matcher

//Have the function BracketMatcher(str) take the str parameter being passed and return 1
//if the brackets are correctly matched and each one is accounted for. Otherwise return 0.
//For example, if str is "(hello (World))", then the output should be 1, but if str is
//"((hello (World))", the output should be 0 because the brackets do not correctly match
//up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

//Golden Method ==> Use a Stack Data Structure to Implement Solution
//[O(n) - Time Complexity O(n) - Space Complexity -> Because of the Stack Array]

const bracketMatcher = (str) =>{
    const stack = []

    for (let i = 0; i < str.length; i += 1){
        if (str[i] === "(") stack.push("(")
        if (str[i] === ")") {
            if (stack.length) stack.pop()
            else return 0
        }
    }
    if (stack.length) return 0 
    else return 1
}

console.log(bracketMatcher("(h(el)(l)o)")) // ==> return 1
console.log(bracketMatcher("(coder)(Byte))")) //==> return 0
console.log(bracketMatcher("(c(ode))rB(yte)")) //==> return 1
console.log(bracketMatcher("(hello (World))")) //==> return 1
console.log(bracketMatcher("((hello (World))")) //==> return 0



