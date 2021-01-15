//FreeCodeCamp: Intermediate Algorithm Scripting: Convert HTML Entities
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

//this is my solution, using a for loop to iterate through an array of object keys and matching them with their values.
function convertHTML(str) { 
    let newStr = ''
    let htmlpairs = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "\'": "&apos;"
    }
    let keyList = Object.keys(htmlpairs)
    for (let i = 0; i < str.length; i++) {
      keyList.includes(str[i]) ? 
      newStr += htmlpairs[str[i]] 
      : newStr += str[i]
    }
    return newStr;
}
console.log(convertHTML("Dolce & Gabbana")) //should return "Dolce &amp; Gabbana"
  
//this second solution comes from FreeCodeCamp (#2). It uses an object like I did, but uses regex to replace the characters with corresponding html entity. Smart!
function convertHTML02(str) {
const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
};
return str.replace(/[&<>\"']/g, match => htmlEntities[match]);
}
console.log(convertHTML02("Dolce & Gabbana")) //should return "Dolce &amp; Gabbana"
