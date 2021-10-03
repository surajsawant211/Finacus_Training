// var scope is function/global scope 

// let and const is a block scope

// if we want to fix the value permanantly then only we can use const otherwise we will use let.

// var 
var name = 'suraj'
name ='vinit'
console.log(name)   
// output : vinit ----------  var will chnege  the value

// let 
let names = 'suraj'
names ='vinit'
console.log(names)   
// output : vinit ----------  let will chnege  the value

// const 
// const namess = 'suraj'
// namess ='vinit'
// console.log(namess)   
// output : vinit ----------  const cannot chnege  the value to vinit


// Arrow Function

// normal function
function greet(){
    console.log('Good Morning')
}

greet()

// arrow

const hello = () => {
    console.log('good morning')
}
hello()


// addition using arrow function

const addition = (a,b) => {
    console.log(a+b)
}

addition(2,4)

// example 
const myButton = document.querySelector('#myButton')

const shop = {
    price: 100,
    buy: function(){
        myButton.addEventListener('click',()=>{
            console.log('I spent ' + this.price)
        })
    }
}

shop.buy()

// -----------------------------------------------------------------------------------------

// Templete literals AKA  Backtics (``)

const naam = 'suraj'
const message = `hello ${naam}
how are you?
`

console.log(message)

// Enhanced object literals
// 1.computed property keys

const keyNmae = 'name'

const product= {
    [keyNmae] : 'mobile',
    price: 100

}
console.log(product)

// 2. Method definition short hand 

const myName = 'name'

const prod= {
    buy(){                                   // here simply instead of writing buy: function() {} we can simplu write buy()                      
        console.log('Bought')
    }
}
prod.buy()

// 3. Property shorthand

const accessToken = 'dhhhhhhhhhhhfjkd'
const refreshToken = 'ddgryhfjfujsbh'

const user = {
    accessToken,
    refreshToken,
}

console.log(user)

// ------------------------------------------------------------------------------------------------

// Destructuring
//  example
const userr = {
    naming :'suraj sawant',
    age : 24
}

const {naming,age} = userr
console.log(naming,age)

// example 2

const data = ['suraj',34,'Engineer']

const [naav,birthAge,profession] = data // destructuring

console.log(birthAge)

// --------------------------------------------------------------------------------------------------
// Default Parameters 

const register = (name,password,image='test.png') => {
    console.log(name,password,image)
}

register('suraj','suraj123','photo.png')


// --------------------------------------------------------------------------------------------------

// Spread   (...)

// example with array
const languages =['c','c++','python']

const newLanguages = [...languages,'java']

console.log(newLanguages)

// example with object 

const settings={
    volume: 20,
    contrast: 30
}

const newSettings ={...settings,volume:30}
console.log(newSettings)

// ---------------------------------------------------------------------------------------------------------

// Rest  (...)    this will be used with function

const addItems = (...items)=> {
    console.log(items)
}

addItems(2,3,4,6,7)

// -----------------------------------------------------------------------------------------------------------

// for of loop   (used on iterable objects)
// iterable objects = Array, String, Object ,set ,map

// example array

const numbers = [2,4,5,6]

for(const num of numbers){
    console.log(num)
}

// example string

const lang = 'python'
for(const char of lang){
    console.log(char)
}

// example of object

const person = {
    nam : 'suraj',
    subject: 'python',
    color: 'green'
}

for(const entries of Object.entries(person)){                           //it will not work on plane object
    console.log(entries)
}


// -----------------------------------------------------------------------------------------------------

// Promises
// function login(cb) {
//     setTimeout(() => {
//         console.log('Login...')
//         cb()
//     },0)
// }

// login(() =>{
//     console.log('Redirecting')
// })


function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Login..')
            // resolve()
            reject()                  // use when we have to throw thw error and below catch block.
        },0)
    })
    
}

login().then(()=>{
    console.log('Redirection..')
}).catch((err)=>{
    console.log('Error')
})


// ---------------------------------------------------------------------------------------------------------------
// find method  -(array)
// const peoples = [{named:'suraj'},{named:'rutik'}]

// const people= peoples.find((people)=>{
//     return people.named==='suraj'
// })

// console.log(people)


// findIndex array method

const peoples = [{named:'suraj'},{named:'rutik'}]

const people= peoples.findIndex((people)=>{
    return people.named==='suraj'
})

console.log(people)

// -----------------------------------------------------------------------------------------------
// set 

const uniqueNumbers = new Set()
uniqueNumbers.add(3)
uniqueNumbers.add(4)
uniqueNumbers.add(7)
uniqueNumbers.add(5)
uniqueNumbers.add(4)
console.log(uniqueNumbers)
console.log(uniqueNumbers.has(8))

// -----------------------------------------------------------------------------------------------------
// Map(hashtables)

const urls = new Map()

urls.set('Development','dev.example.com')
urls.set('Production','prod.example.com')

console.log(urls)
console.log(urls.get('Production'))

// O(1) notation

const urlObj ={
    Development: 'dev.example.com',
    Production: 'prod.example.com'

}

console.log(urlObj.Development)

// ----------------------------------------------------------------------------------------------

// Classes

class persn{
    nam
    constructor(nam){
        this.nam=nam
    }
}

const suraj = new persn ('suraj')
const john = new persn('john')
john.nam='joy'

console.log(john)


