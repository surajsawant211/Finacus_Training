// In javascript there are two types of scopes.
    // 1.local Scope 
    // 2.global socpe

// example of let

let language='javascript';

console.log(language)

// example of const 
    // 1.if we declared once then we cannot reassign the value to variable while using const.

// const secondsInMinute=60;
// secondsInMinute=30;   //here we will get error if we reassign the value.


// 1. function scope :- var is the function scope
    // --if we are declaring var in some function then it will be not available out of this function. but we will get output if we used block.
var name='suraj'

// 2.block scope :- let and const is the block scope
    //-- in this scope we didnt get the output if we try to get it out of the block.


// ex-1 - correct
if(true){
    let birthYear=1999;
    console.log(birthYear)
}

// ex-2 -error
if(true){
    let age=23;
}
console.log(age)