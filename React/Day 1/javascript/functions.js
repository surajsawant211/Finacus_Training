// Function
// example
// function login(username,password){
//     console.log(`${username} Logged in Successfully.`)
// }

// login('suraj');

// // ---------------------------------------------------------------------------------------------

// function upperCase(str) {
//     return str.toUpperCase()
// }

// const result = upperCase('suraj')
// console.log(result)

// // --------------------------------------------------------------------------------------------

// function calculateArea(width,height) {
//     const area = width * height
//     return area
// }

// const area =calculateArea(23,56)
// console.log(area)

// // ---------------------------------------------------------------------------------------------
// // Variable Scope 
// // if we declare a variable inside a function then we cannot access it outside of the function , but if we declare a variable outside of the function then we can acess it in inside the function.

// function download(){
//     const filename = 'xyz.pdf'
//     console.log(filename)
// }

// download()

// // ---------------------------------------------------------------------------------------------------

// // function Declaration and function Expression

// // Declaration
// // function logedin({

// // })

// // Expression
// const logedin = function(){
//     console.log('loggedin successfully')
// }

// logedin()

// // ------------------------------------------------------------------------------------------------------

// // callback

// function formatText(text){
//     return text.toUpperCase();
// }

// const textt = formatText('hello');
// console.log(textt)

// -------------------------------------------------------------------------------------------------------
// IIFE (Immediately Invoked Function Expression)

(function setup() {
    console.log('set done');
}());


// -------------------------------------------------------------------------------------------------------

// Arrow function

// we can also write in this way 
// const sum = (num1,num2) => num1+num2
const sum = (num1,num2) =>{
    return num1+num2
}

const result = sum(3,5)
console.log(result)