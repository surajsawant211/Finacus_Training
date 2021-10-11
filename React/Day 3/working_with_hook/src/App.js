import React, { useState } from 'react'


const App = () => {
    // const state = useState()

    const [count,setCount] =useState(0)

    const IncNum=()=>{
        setCount(count+1)
    }
    const DecNum=()=>{
        setCount(count-1)
}

    return (
        <>
            <div>
                <h1 className='heading'>{count}</h1>
            </div>
          
          <div className='button'>
            <button className='btn-1' onClick={DecNum}>Decreament</button>
            <button className='btn-2' onClick={IncNum}>Increament</button>  
          </div>
          
        </>
    )
}

export default App
