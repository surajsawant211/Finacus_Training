import React from 'react';
import Bollywood from './Bollywood';

import Tollywood from './Tollywood';

const favMusicDirector = 'tollywood'

// const favMD = () => {

//    if(favMusicDirector === 'bollywood'){
//       return <Bollywood />
//    }else{
//       return <Tollywood />

//    }
// }
const App=()=>( 
  <>
    <h1 className='heading_style'>List of Favourite Bollywood Music Directors</h1>
    {/* <favMD /> */}
    
    {/* // ternary operator for if else  */}
   {(favMusicDirector === 'bollywood') ?   <Bollywood /> :  <Tollywood />}
  </>
)
 
    {/* WE COMMENT THIS PART BECAUSE WE USING IF ELSE CONDITION */}
    {/* {Sdata.map((val) => {
       return(
         <Card 
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            name={val.name}
            link={val.link}
         />
       )
    })} */}
 

export default App


// {/*  Instead of writing code like this we can siimplify in better way using map() method which has been shown upper side*/ }
    
//     {/* <Card 
//       imgsrc={Sdata[0].imgsrc}
//       title={Sdata[0].title}
//       name={Sdata[0].name}
//       link={Sdata[0].link}
//    />

//    <Card 
//       imgsrc={Sdata[1].imgsrc}
//       title={Sdata[1].title}
//       name={Sdata[1].name}
//       link={Sdata[1].link}
//    />

//    <Card 
//       imgsrc={Sdata[2].imgsrc}
//       title={Sdata[2].title}
//       name={Sdata[2].name}
//       link={Sdata[2].link}
//    />

//    <Card 
//       imgsrc={Sdata[3].imgsrc}
//       title={Sdata[3].title}
//       name={Sdata[3].name}
//       link={Sdata[3].link}
//    />

//    <Card 
//       imgsrc={Sdata[4].imgsrc}
//       title={Sdata[4].title}
//       name={Sdata[4].name}
//       link={Sdata[4].link}
//     />*/} 

  