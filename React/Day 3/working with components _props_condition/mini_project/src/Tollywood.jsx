import React from 'react'
import Sdata from './Sdata'
import Card from './Cards'

const Tollywood = () => {
    return(
        <Card 
           key={Sdata[5].id}
           imgsrc={Sdata[5].imgsrc}
           title={Sdata[5].title}
           name={Sdata[5].name}
           link={Sdata[5].link}
        />
     )
}

export default Tollywood
