import React, { useState } from 'react'
import './App.css';

function App() {
  const [name, setName]=useState("")
  const [lastname,setLastname]=useState("")
  const [fullname,setFullName]=useState("")
  const [lastNameNew,setLastNameNew]=useState("")


  const inputEvent=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)
   
  }

  const inputEventTwo=(event)=>{
    setLastname(event.target.value)
  }

  const onSubmit=(event)=>{
    event.preventDefault()
    setFullName(name)
    setLastNameNew(lastname)
  }

  return (
    <div className='main_div'>
      <form action="" onSubmit={onSubmit}>
        <div>
          <h1>Enter Your Name {fullname} {lastNameNew}</h1>
          <input type="text" 
          placeholder='Enter Your LastName'
          onChange={inputEvent}
          value={name}
          />
          <br />
          <input type="text" 
          placeholder='Enter Your Name'
          onChange={inputEventTwo}
          value={lastname}
          />
          <button type='submit'>SUBMIT</button>
        </div>
    </form>
  </div>
    
  );
}

export default App;




