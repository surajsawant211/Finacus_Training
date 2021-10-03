// Scenario

// 1. Register
// 2. send welcome email
// 3. Login
// 4. Get user data
// 5. display user data

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function register(callback){
    setTimeout (() =>{
        console.log('Register end')
        callback()
    },1000)
    

}

function sendEmail(callback) {
    setTimeout (() =>{
        console.log('Email end')
        callback()
    },2000)
    

}

function login(callback) {
    setTimeout (() =>{
        console.log('Login end')
        callback()
    },3000)
    

}

function getUserData(callback) {
    setTimeout (() =>{
        console.log('Got User Data')
        callback()
    },1000)
    

}

function displayUserData(){
    setTimeout (() =>{
        console.log('Displayed User Data')
    },1000)

}

// callback hell

register(function(){
    sendEmail(function(){
        login(function(){
            getUserData(function(){
                displayUserData()
            })
            
        })
        
    })
    
})


console.log('other application work..')