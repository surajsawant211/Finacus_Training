import React, { useState } from 'react'

const UseStateObject = () => {


   const [myObject,setMyObject] =  useState({
       myName: 'Suraj', myAge: 25, degree:'BE' 
   })

    const changeObjectData=() =>{
        setMyObject({...myObject, myAge:28})
    }

    return (
        <div>
            <h1 className='h1style'>Name: {myObject.myName} & age: {myObject.myAge} & degree: {myObject.degree}</h1>
            <button className='btn' onClick={changeObjectData}>Update</button>
        </div>
    )
}

export default UseStateObject
