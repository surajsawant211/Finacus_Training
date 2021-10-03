// Array...... and Loops...//

const languages = ['python','c','java'];

languages.push('javascript')  // use to add element at last
languages.unshift('ruby')  // use to add element at first using unshift
languages.pop()              //use to remove element from last
languages.shift()            // use to remove first element 


console.log(languages)

// -------------------------------------------------------------------------------------------------------------------------
// loop

const workers=[
    {
        name: 'worker 1',
        payment:200
    },
    {
        name: 'woker 2',
        payment: 100
    },
    {
        name: 'worker 3',
        payment: 120
    }
];

//  1. for loop

            // for(let i =0;i<workers.length;i++){
            //     workers[i].payment = workers[i].payment-10;
            //     console.log(workers[i]);
            // }

// 2. ForEach loop

            // workers.forEach((worker)=>{
            //     worker.payment = worker.payment-10;
            //     console.log(worker)
            // });

// 3. forOff loop

for(worker of workers){
    worker.payment = worker.payment-10
    // console.log(worker)
}

console.log(workers)


// -------------------------------------------------------------------------------------------------------------
// Filter :-The filter() method creates an array filled with all array elements that pass a test (provided by a function).
            //filter() does not change the original array.


const students=[
    {
        name : 'student 1',
        marks : 45
    },
    {
        name :'student 2',
        marks : 56
    },
    {
        name : 'student 3',
        marks : 35
    }
];

const failed = students.filter((student) =>{
    if (student.marks<45){
        return true
    }else {
        return false
    }
})

console.log(failed)

// another method to display
// const failed=students.filter((student)=> students.marks<45);

// console.log(failed)

// -----------------------------------Map-------------------------------------------

// Map :-The map() method creates a new array with the results of calling a function for every array element.

const users = [
    {
        fname: 'suraj',
        lname: 'sawant'
    },
    {
        fname: 'mandar',
        lname: 'sawant'
    }
];

const finalUser= users.map((user) =>{
    return{
        fullnmae: user.fname +' '+ user.lname
    }
})
   
console.log(finalUser)



// ------------------------------------------------------------------------------------------------------------------------

// Reduce

const movies=[
    {
        name : 'hello',
        budget : 120
    },
    {
        name : 'krish',
        budget : 160
    },
    {
        name : 'grish',
        budget : 230
    }
];
// ---------------------one way of adding budget----------------
// let total=0;
// movies.forEach((movie)=>{
//     total = total+movie.budget;
// })

// console.log(total)

// --------------------------anotehr method using reduce------------------------------
const total = movies.reduce((acc,movie)=>{
    acc = acc + movie.budget
    return acc
},0)


console.log(total)

// -------------------------------------------------------------------------------------------------------------

// indexOf :-The indexOf() method searches an array for a specified item and returns its position
            //indexOf() returns -1 if the item is not found.
            //If the item is present more than once, the indexOf method returns the position of the first occurence.


const admins = [2,1,5];
const user ={

        name:'XYZ',
        id: 5
    }

console.log(admins.indexOf(user.id))


// -----------------------------------------------------------------------------------------------------------
// Includes :- The includes() method returns true if an array contains a specified element, otherwise false

console.log(admins.includes(user.id))


// ---------------------------------------------------------------------------------------------------------

// Find

const players=[
    {
        name:'sagar',
        id: 1
    },
    {
        name:'pandya',
        id: 2
    },
    {
        name:'sachin',
        id: 3
    }
]

        // const myPlayer = players.find((player)=>{
        //     if(player.id === 2){
        //         return true
        //     }
        //     return false
        // })

        // console.log(myPlayer)

// another way
const myPlayer = players.find((player)=>{
    return player.id ===3
})

console.log(myPlayer)


// --------------------------------------------------------------------------------------------
// Sort

const names = ['suraj','pranil','akash','rutik','jaggya','rahul']

names.sort()

console.log(names)

// -------------------------------------------------------------------------------------------

// Splice :- The splice() method adds and/or removes array elements.

const strange = ['suraj','pranil','akash','rutik','jaggya','rahul'];

strange.splice(2,1)    //enter the index number and , enter how many items have to delete
console.log(strange)
