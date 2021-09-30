console.log('start')

function waitForSevenSeconds(){
    let ms = 7000 + new Date().getTime();
    while(new Date() < ms){}
}

console.log('End')


setTimeout(() => {
    console.log('I am From India')
}, 2000)


waitForSevenSeconds()