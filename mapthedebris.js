//Intermediate Algorithm Scripting: Map the Debris
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

//the formula to use for this challenge:
//T = 2*pi*sqrt(a^3/GM) 
//where a = earthRadius+avgAlt (distance from midpoint of the earth to the object) and T = Orbital Period
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (object of arr) {
        // console.log(object)
        const avgAlt = object.avgAlt
        const OrbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow((earthRadius+avgAlt), 3)/GM))
        delete object.avgAlt
        object.orbitalPeriod = OrbitalPeriod
    }
    return arr
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])) //should return [{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]


function orbitalPeriod2(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++) {
        // console.log(object)
        const avgAlt = arr[i].avgAlt
        const OrbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow((earthRadius+avgAlt), 3)/GM))
        delete arr[i].avgAlt
        arr[i].orbitalPeriod = OrbitalPeriod
    }
    return arr
}

console.log(orbitalPeriod2([{name : "sputnik", avgAlt : 35873.5553}])) //should return [{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod2([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]