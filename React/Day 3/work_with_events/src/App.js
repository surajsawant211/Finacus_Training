import React, { useState } from 'react';
import './App.css';

function App() {
  const purple = "purple"
  const [bg,setBg] =useState(purple)
  const [name,setName]= useState('Click Me')

  const bgChange=()=>{
    let newBg = '#34495e'
    setBg(newBg)
    setName('Color Changed.. 👍')
  }

  const bgBack=()=>{
    setBg(purple)
    setName('YOUR BACKGROUND HAS BEEN CHANGED 👍')
  }
  return (
    <div style={{backgroundColor: bg}}>
          <button  onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
    </div>
  );
}

export default App;
