//Intermediate Algorithm Scripting: Arguments Optional
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether() {
    const isANum = (test) => typeof(test) === 'number' //uses Function Expression (rather than Function Statement) just to make it shorter. Both forms work.
    if (arguments.length > 1) {
        if (!isANum(arguments[0]) || !isANum(arguments[1])) 
            return undefined
        return arguments[0]+arguments[1]
    }
    if (arguments.length === 1) {
        if (!isANum(arguments[0]))
            return undefined
        return (num2) => isANum(num2) ? arguments[0] + num2 : undefined //uses Function Expression (rather than Function Statement) and the Conditional (Ternary) Operator
        //to read about the Function Expression, I recommend this (short) article: https://www.freecodecamp.org/news/constant-confusion-why-i-still-use-javascript-function-statements-984ece0b72fd/
    }
}

console.log(addTogether(2, 3)) //should return 5
console.log(addTogether(5)(7)) //should return 12
console.log(addTogether(2)([3])) //should return undefined