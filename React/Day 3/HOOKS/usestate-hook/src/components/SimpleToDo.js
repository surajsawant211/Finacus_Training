import React,{useState} from 'react'

const SimpleToDo = () => {

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

    const removeElem=(id)=>{
        const myNewData = myArray.filter((curElem)=>{
            return curElem.id != id
        })
        setMyArray(myNewData)

    }

    return (
        <>
             
            {
                myArray.map((curElem) => {
                    return(
                        <h1 
                            className='h1style' key={curElem.id}>Name: {curElem.myName} & Age: {curElem.age}
                            <button className='btnInner' onClick={()=> removeElem(curElem.id)}>Remove</button>
                        </h1>
                        )
                    })
            
            }
            <button className='btn' onClick={clearArray}>Clear</button>
        </>
    )
}

export default SimpleToDo
