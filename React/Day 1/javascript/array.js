// Array...... and Loops...//

const language = ['python','c','java'];

language.push('javascript')  // use to add element at last
language.unshift('ruby')  // use to add element at first using unshift
console.log(language[0]);  //use to show index
language.pop()              //use to remove element from last
language.shift()            // use to remove first element 
console.log(language);


// loop

// const actors=[
//     {
//         name: 'actor 1',
//         payment:200
//     },
//     {
//         name: 'actor 2',
//         payment: 100
//     },
//     {
//         name: 'actor 3',
//         payment: 120
//     }
// ];

//  1.

// for(i =0;i<actors.length;i++;){
//     actors[i].payment = actors[i].payment-10;
//     console.log(actors[i]);
// }


// 2. ForEach loop

// actors.forEach((actor)=>{
//     actor.payment = actor.payment-10;
//     console.log(actor)
// });

// 3. forOff loop

// for(actor of actors){
//     actor.payment = actor.payment-10
//     console.log(actor)
// }

// ---------------------------------------------------------------------------

// Filter

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
// display the fail student
const failed=students.filter((student)=>{
    if(student.marks<45){
        return true;
    }else{
        return false;
    }
});
// --------------------------------------------------
// another method to display
// const failed=students.filter((student)=> students.marks<45);

// console.log(failed)

// -------------------------------------------------------------------------------------------------------------

// Map

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

const finalUser=users.map((user)=>{
    return{
        fullname: user.fname+ ' '+user.lname
    };
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

// let total=0;
// movies.forEach((movie)=>{
//     total = total+movie.budget;
// })
// anotehr method using reduce
const total = movies.reduce((acc,movie)=>{
    acc = acc + movie.budget
    return acc
},0)


console.log(total);

// -------------------------------------------------------------------------------------------------------------

// indexOf

const admins = [2,1,5];
const user ={

        name:'XYZ',
        id: 5
    }

console.log(admins.indexOf(user.id))

// -----------------------------------------------------------------------------------------------------------
// Includes

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

const myPlayer = players.find((player)=>{
    if(player.id === 2){
        return true
    }
    return false
})

console.log(myPlayer)

// --------------------------------------------------------------------------------------------
// Sort

const names = ['suraj','pranil','akash','rutik','jaggya','rahul']

names.sort()

console.log(names)

// -------------------------------------------------------------------------------------------

// Splice

const strange = ['suraj','pranil','akash','rutik','jaggya','rahul'];

strange.splice(2,1)
console.log(strange)

