//cleanup function
import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [widthCount,setWidthCount] = useState(window.screen.width)

    const actualWidth =() =>{
        setWidthCount(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',actualWidth)

        return() =>{
            window.removeEventListener('resize',actualWidth)
        }
    })
    return (
        <div>
            <p>The actual size of window is:</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
