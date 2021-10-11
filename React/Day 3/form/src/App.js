import React, { useState } from 'react'
import './App.css';

function App() {
  const [name, setName]=useState("")
  const [fullname,setFullName]=useState()


  const inputEvent=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)
  }

  const onSubmit=()=>{
    setFullName(name)
  }

  return (
    <div>
      <h1>Enter Your Name {fullname}</h1>
      <input type="text" 
      placeholder='Enter Your Name'
      onChange={inputEvent}
      value={name}
       />
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  );
}

export default App;




