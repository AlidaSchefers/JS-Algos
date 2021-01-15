//FreeCodeCamp: Intermediate Algorithm Scripting: Missing letters
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
    for (let i = str.length-1; i > 0; i--) {
      if (str.charCodeAt(i)-str.charCodeAt(i-1) === 2) {
        return String.fromCharCode(str.charCodeAt(i)-1)
      }
    }
}

console.log(fearNotLetter("stvwx")) //should return "u".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) //should return undefined.