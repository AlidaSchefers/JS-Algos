//this challenge comes from https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
//solved!

//my initial solution
var countBits = function(n) {
    const binary = n.toString(2) //convert decimal to binary. now it's a string
    let sum = 0
    for (const num of binary) { //iterate through the string
      numInt = parseInt(num) //conver the string to int
      sum += numInt
    }
    return sum
};

//a solution from community solutions on codewars
countBits = n => n.toString(2).split('0').join('').length;

console.log(countBits(7)) //should return 3
console.log(countBits(10)) //should return 2