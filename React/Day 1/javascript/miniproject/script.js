// const bulbSwitch = document.querySelector('#bulbSwitch')
// const bulb = document.querySelector('#bulb')

// bulbSwitch.addEventListener('click',function() {
//     console.log(bulb.src)
//     if(bulb.src.match('off')) {
//         bulb.src = './pic_bulbon.gif'
//         bulbSwitch.innerHTML = 'Turn Off'
//     } else {
//         bulb.src = './pic_bulboff.gif'
//         bulbSwitch.innerHTML = 'Turn On'
//     }
// })


const root = document.querySelector('#root')
const button = document.querySelector('button')

function createItem(item){
    // card
    const card = document.createElement('div')
    card.classList.add('card')


    // photo
    const photo = document.createElement('img')
    photo.src = item.thumbnailUrl

    // title
    const title = document.createElement('h4')
    title.innerHTML = item.title
    card.appendChild(photo)
    card.appendChild(title)
    root.appendChild(card)
}

function displayImages(items) {
    items.forEach(function (item) {
        createItem(item)
    });

    
}


button.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json())
        .then((items)=> {
            displayImages(items)
        })
})


