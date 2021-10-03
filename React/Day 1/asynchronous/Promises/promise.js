// Scenario

// 1. Register
// 2. send welcome email
// 3. Login
// 4. Get user data
// 5. display user data

/*
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when 
dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
*/


function register(){
    return new Promise((resolve,reject)=>{
        setTimeout (() =>{
            console.log('Register end')
            resolve('Error while registering')
        },1000)
    })
    
}

function sendEmail() {
    return new Promise((resolve,reject)=>{
        setTimeout (() =>{
            return reject('Error while sending email...')
            console.log('Email end')
            
        },5000)
    })
    
}

function login() {
    return new Promise((resolve,reject)=>{
        setTimeout (() =>{
            console.log('Login end')
            resolve()
        },3000)
    })

}

function getUserData() {
    return new Promise((resolve,reject) =>{
        setTimeout (() =>{
            console.log('Got User Data')
            resolve()
        },1000)
    })

}

function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout (() =>{
            console.log('Displayed User Data')
            resolve()
        },1000)
    })
    

}

// callback hell

// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData()
//             })
            
//         })
        
//     })
    
// })

// promise ----------------this is better way than callback

// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err)=> {
//         console.log('Error: ',err) //we use catch to handle error 
//     })


// Async- await    ---------this is better way than promise
/*
-- await we can use only on those function which is async.
-- when we use async in function that function will bydefault written promise.
*/
async function authenticate() {
    try{
        await register()
        await sendEmail()
        await login()
        await getUserData()
        await displayUserData()
    }catch(err){
        console.log('ERROR:',err)
        throw new Error
    }
    
}

authenticate().then(()=>{
    console.log('ALL SET..')
}).catch((err)=>{
    console.log('ERROR:',err)
})

console.log('other application work..')