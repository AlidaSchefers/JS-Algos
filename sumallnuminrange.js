//FreeCodeCamp: Intermediate Algorithm Scripting: Sum All Numbers in a Range
//Passes an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

//second, more concise, solution:
function sumAll2(arr) {
    if (arr[0] === arr[1]) {
      return arr[0]
    }
    const orderedArr = arr[1] < arr[0] ? [arr[1], arr[0]] : [arr[0], arr[1]] //makes [4,1] into [1,4]
    return orderedArr[1] + sumAll2([orderedArr[0], (orderedArr[1]-1)])
}

sumAll2([4,1]) //should return 10
sumAll2([5,10]) //should return 45

//first solution:
function sumAll1(arr) {
    let i = Math.max(arr[0],arr[1])
    let sum = 0
    while (i >= Math.min(arr[0],arr[1])) {
      sum += i
      i--
    }
    return sum;
}

sumAll1([4,1]) //should return 10
sumAll1([5,10]) //should return 45

//Link to this algo challenge description: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range