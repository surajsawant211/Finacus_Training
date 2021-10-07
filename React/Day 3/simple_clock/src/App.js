import React,{useState} from 'react'





const App = () => {
    let newTime = new Date().toLocaleTimeString()

    const [curTime,setCurTime]=useState(newTime)
    const UpdateTime=()=>{
       let newCTime = new Date().toLocaleTimeString()
        setCurTime(newCTime)

    }
    return (
        <>
            <h1>{curTime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    )
}

export default App

