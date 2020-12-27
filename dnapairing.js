//FreeCodeCamp: Intermediate Algorithm Scripting: DNA Pairing
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {   
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
      };
    console.log(pairs['A'])
    let newArr = []
    for (let i = 0; i < str.length; i++) {
        newArr.push([str[i], pairs[str[i]]])
    }
    return newArr;
}
console.log(pairElement("ATCGA")) //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")) //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]