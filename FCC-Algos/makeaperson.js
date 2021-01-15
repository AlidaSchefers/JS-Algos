//Intermediate Algorithm Scripting: Make a Person
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function(firstAndLast) {
    let firstName = firstAndLast.split(" ")[0]
    let lastName = firstAndLast.split(" ")[1]
    let fullName = firstName + lastName
    this.setFirstName = function(first) {firstName = first}
    this.setLastName = function(last) {lastName = last}
    this.setFullName = function(firstAndLast) {fullName = firstAndLast}
    
    this.getFirstName = function() {return firstName}
    this.getLastName = function() {return lastName}
    this.getFullName = function() {return firstAndLast}
    return firstAndLast;
};
  
var bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName()); //should return "Haskell Ross" after bob.setFirstName("Haskell") //currently does not wotk
// console.log(Object.keys(bob).length) //should return 6