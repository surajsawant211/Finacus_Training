// Dom Manipulation - Document object model

// 1. getElementById

// const heading = document.getElementById('heading')
// console.log(heading)

// 2. getElementByTagName
// const heading = document.getElementsByTagName('h1')

// 3. getElementsByClassName
// const heading = document.getElementsByClassName('heading')

// 4. querySelector
// const heading = document.querySelector('.heading')

// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading')
// console.log(heading)




// Traverse Dom

// 1. parentNode

// const heading = document.querySelector('.heading')
// const parent = heading.parentNode;
// console.log(parent)

// 2. ChildrenNodes

// const parent = document.querySelector('.parent')
// console.log(parent.childNodes)

// 3. nextElementSibling 
// const heading = document.querySelector('.heading')
// console.log(heading.nextElementSibling)


// 4. previousElementSibling 
// const subHeading = document.querySelector('h3')
// console.log(subHeading.previousElementSibling)

// ----------------------------------------------------------------------------------------------------------------
// Manipulation

// const heading = document.querySelector('.heading')
// heading.innerHTML = 'Jvascript is better'

// heading.style.color ='red'
// heading.style.fontSize = '100px'
// heading.classList.add('title')
// heading.classList.remove('title')

// -------------------------------------------------------------------------------------------------------------
// createElement

// const heading = document.createElement('h1')
// heading.innerHTML = 'javascript is awesome'
// const parent = document.querySelector('.parent')
// parent.appendChild(heading)

// const subHeading = document.createElement('h3')
// subHeading.innerHTML = 'javascript is awesome'
// heading.insertAdjacentElement('beforebegin',subHeading)
// console.log(heading)


// ----------------------------------------------------------------------------------------------

// DOM events

const button = document.querySelector('#btn')
const heading = document.querySelector('#heading')

button.addEventListener('click' ,function(event) {
    heading.style.color='red'
    console.log('button clicked',event)
})