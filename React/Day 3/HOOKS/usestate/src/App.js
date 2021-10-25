import React, { useState } from 'react'
import './App.css';

function App() {

  const [myName,setMyName]= useState('suraj sawant')
  // let name = 'suraj sawant'
  const changeTitle=()=>{
    let val = myName
    if(val==='suraj sawant'){
      setMyName('My name is suraj sawant.')
    }else{
      setMyName('suraj sawant')
    }
    
  }
  return (
    <div className="App">
      <h1>{myName}</h1>
      <button className='btn' onClick={changeTitle}>Click here</button>
    </div>
  );
}

export default App;
