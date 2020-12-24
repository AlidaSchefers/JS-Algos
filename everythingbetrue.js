//Intermediate Algorithm Scripting: Everything Be True
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

//all of the tests have the predicate pre property in all its objects, so I do not check to see if the predicate pre is a property of all the objects, but rather just test its "truthiness"

//written with 3 lines:
function truthCheck1(collection, pre) {
    return collection.every((currentObject) => Boolean(currentObject[pre]));
}
console.log(truthCheck1([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")) //should return false

//written with 4 lines:
function truthCheck2(collection, pre) {
    const isTrue = (currentObject) => Boolean(currentObject[pre])
    return collection.every(isTrue);
  }
console.log(truthCheck2([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")) //should return false

//written with 6 lines. this may be better for larger collections because it does not need to check every object to return false (just as many as it takes to get to the first false case).
function truthCheck3(collection, pre) {
    for (let i = 0; i < collection.length; i++)
        if (!collection[i][pre])
            return false
    return true
}
console.log(truthCheck3([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")) //should return false