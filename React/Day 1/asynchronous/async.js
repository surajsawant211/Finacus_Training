// Asynchronous javascript

// synchronous
console.log('hello')

// asynchronous
setTimeout(function(){
    console.log('I am from India')
},3000)

console.log('My name is suraj')


// another way with function

console.log('hello')
function greeting(){
    console.log('I am from India')
}

setTimeout(greeting,3000)
console.log('My name is Anonymous.')