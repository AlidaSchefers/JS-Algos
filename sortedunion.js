//Intermediate Algorithm Scripting: Sorted Union
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(arr) {
    let newArr = []
    for (let i = 0; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        if (!newArr.includes(arguments[i][j]))
          newArr.push(arguments[i][j])
      }
    } 
    return newArr;
}
  
//   console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //should return [1, 3, 2, 5, 4]
//   console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) //should return [1, 2, 3, 5, 4, 6, 7, 8]