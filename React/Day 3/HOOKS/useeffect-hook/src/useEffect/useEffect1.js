import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [count, setCount] =useState(0)
    
    useEffect(()=>{
        if(count >= 1){
            document.title= `chat(${count})`
        }else{
            document.title= `chat`
        }
    },[count])

    useEffect(()=>{
        console.log('i am fine')
    },[])

    console.log('hello guyss')

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} className='btn'>Click</button>
        </div>
    )
}

export default UseEffect1