////FreeCodeCamp: Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  let fibArr = [1,1]
  let newNum = 0
  while (fibArr[fibArr.length-2] + fibArr[fibArr.length-1] <= num) {
    newNum = fibArr[fibArr.length-2] + fibArr[fibArr.length-1]
    if (newNum <= num) {fibArr.push(newNum)}
  }
  let oddFibArr = []
  for (const num of fibArr) {
    if (num % 2 !== 0) {oddFibArr.push(num)}
  }
  return oddFibArr.reduce((a, b) => a + b, 0);
}

console.log(sumFibs(4));