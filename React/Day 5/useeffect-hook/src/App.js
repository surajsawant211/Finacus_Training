import React,{ useEffect, useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)

  useEffect(()=>{
     document.title=`you clicked ${num} times`
  })
  return (
    <>
      <button onClick={() =>{
      setNum(num+1)
    }}>
       click Me {num}
    </button>
    <br />

    {/* <button onClick={() =>{
      setNums(nums+1)
    }}>
       click Me {nums}
    </button> */}
    </>
  );
}

export default App;
