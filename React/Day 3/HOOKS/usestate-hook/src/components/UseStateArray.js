import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            id: 0,
            myName: 'Suraj',
            age: 23
        },
        {
            id: 1,
            myName: 'Akash',
            age: 23
        }
    ]


   const [myArray,setMyArray] = useState(bioData)

    const clearArray=()=>{
        setMyArray([])
    }

    return (
        <div>
            
            {
                myArray.map((curElem) => <h1 className='h1style' key={curElem.id}>Name: {curElem.myName} & Age: {curElem.age}</h1>)
            
            }
            <button className='btn' onClick={clearArray}>Clear</button>
        </div>
    )
}

export default UseStateArray
