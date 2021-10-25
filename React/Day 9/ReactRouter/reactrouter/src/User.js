import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

// const User = ({match}) => {
//     return (
//         <div>
//             <h1>hello {match.params.name} user</h1>
//         </div>
//     )
// }
const User = () => {
    const {fname} = useParams();
    const location = useLocation()
    console.log(location)
    return (
        <>
            <h1>hello {fname} user</h1>
            <p>my current loction is {location.pathname}</p>
        </>
    )
}

export default User
