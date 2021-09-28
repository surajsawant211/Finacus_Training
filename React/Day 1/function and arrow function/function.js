// function

// <example-1> 

                    // function login(username,password){
                    //     // code
                    //     // logic
                    //     console.log(`${username} Loged in successfully..`)
                    // }

                    // login('suraj')
                    // login('akash')

//</example-1>

// --------------------------------------------------------------------------
// <example-2>

                // function upperCase(str){
                //     // console.log(str.toUpperCase())
                //     return str.toUpperCase()
                // }
                // // upperCase('hello')
                // const result= upperCase('hello')
                // console.log(result)
// </example-2>

// -----------------------------------------------------------------------------------

// <example-3>

                // function calculateArea(width,height){
                //     const area = width * height
                //     return area
                // }
                // const area = calculateArea(30,40)
                // console.log(area)

// </example-3>
// -----------------------------------variabe scope-------------------------------
// Variable Scope 
// if we declare a variable inside a function then we cannot access it outside of the function , but if we declare a variable outside of the function then we can acess it in inside the function.
// we can access//
        
        // function download(){
        //     const filename = 'xyz.pdf'
        //     console.log(filename)
        // }

        // download()

// ----------------------------------------------------------------------------------
 // function Declaration and function Expression

// Declaration
//  function logedin({

//  })

// Expression
        // const logedin = function(a,b){        //anonymous function
        //     console.log('loggedin successfully')
        // }

        // logedin()

// ---------------------------------------------------------------------------------
// callback
// 1. A callback is a function passed as an argument to another function

// 2. This technique allows a function to call another function

// 3. A callback function can run after another function has finished
            
// function formatText(text){
            //     return text.toUpperCase();
            // }

            // const textt = formatText('suraj');
            // console.log(textt)

// -------------------------------------------------------------------------------------------------------
// IIFE (Immediately Invoked Function Expression)

(function setup() {
    console.log('set done');
}());

// ---------------------------Arrow Function---------------------------------------
// arrow function

const printName = (name,age)=>{
    console.log(name,age)
}

printName('suraj',45)



// we can also write in this way 
// const sum = (num1,num2) => num1+num2
const sum = (num1,num2) =>{
    return num1+num2
}

const result = sum(3,5)
console.log(result)

