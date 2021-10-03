import React from "react";
import ReactDOM from "react-dom"


function App(){
    
let curDate = new Date()
curDate = curDate.getHours()
let greeting = ''
let cssStyle ={}

if(curDate>=1 && curDate<12){
  greeting ='Good Morning';
  cssStyle.color = 'green'
  
}else if(curDate>=12 && curDate<17){
    greeting = 'Good Afternoon'
    cssStyle.color='gray'

}else if(curDate>=17 && curDate<19){
  greeting = 'Good Evening';
  cssStyle.color = 'green'

}else {
  greeting = 'Good Night';
  cssStyle.color = 'green'

}

return (
    <>
      <div>
        <h1>
          Hello sir, <span style={cssStyle}> {greeting}</span>
        </h1>
      </div>
    </>
      
)
}

export default App;