
function register() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            return reject('Error while registering') // agar kuch network error aaya to we can use reject
            console.log('Register end')
        },1000)
    })
    

    
}

function sendEmail() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log('Email end')
            resolve()
        },2000)
    })
    
    
}

function login() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log('Login end')
            resolve()
        },3000)
    })
    
    
}

function getUserData() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Got User Data')
            resolve()
        },1000)
    })
    
    
}

function displayUserData() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Displayed User Data')
            resolve()
        },1000)
    })
    
    
}

// callback hell

// register(function() {
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData()
//             })
            
//         })
        
//     })
    
// })

// promise ----------------this is vbetter way than callback

// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err)=> {
//         console.log('Error: ',err) //we use catch to handle error 
//     })

// Async await    ---------this is better way than promise

async function authenticate() {
    try{
        await register()
        await sendEmail()
        await login()
        await getUserData()
        await displayUserData()
    } catch(err) {
        console.log(err)
        throw new Error()
    }
}

authenticate().then(()=> {
    console.log('All SET.')
}).catch((err)=> {
    console.log(err)
})


console.log('Other application work')