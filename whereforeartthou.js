//FreeCodeCamp: Intermediate Algorithm Scripting: Wherefore art thou
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
    let i = 0
    while (i < Object.keys(source).length) {
      for (let j = collection.length - 1; j >= 0; j--) {
        if (source[Object.keys(source)[i]] !== collection[j][Object.keys(source)[i]]) {
          collection.splice(j,1)
        }
      }
      i++
    }
    return collection;
}

console.log(
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
);
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]