

// object : collection of key value pair
const laptop = {
    color:'red',
    model:'c392'
}

console.log(laptop.color);

// difference between VAR vs LET vs CONST

let language = 'Javascript'

console.log(language);

// hoisting

console.log(greeting);
var greeting= 'hello world'; //op : - undefined which is data type ion js.


// VAR - LET - CONST

// ----var declarations are globally scoped or function scoped while let and const are block scoped.

// ----var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared;
//  const variables can neither be updated nor re-declared.


//  -----let aur const ka scope hota hai global scope  Hum agarkoi bhi variable curly bracket k andar declare karte hai tro wo hue uske bahar avaialblee nhi hoga.

//let -- BlockScope
if (true){
   let age = 23
}
console.log(age);

op: error--age is not defined


//const -- BlockScope
if (true){
    const age = 23
}
console.log(age);

op: error--age is not defined

//var - FunstionScope

if (true){
    var age = 23
}
console.log(age)

op:23


