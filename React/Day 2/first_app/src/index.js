import  React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const name = 'suraj'
const currDate= new Date().toLocaleDateString()
const currTime = new Date().toLocaleTimeString()
const img1 = 'https://picsum.photos/200/300'
const img2 = 'https://picsum.photos/205/300'

const heading={
    color: '#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '50px 0',
    fontFamily: 'Josefin Sans, sans-serif'
}

ReactDom.render( 
  <>
    <h1 style={heading}>My name is {name}</h1>
    <div className='img-div'>
      <img src={img1} alt="img1" />
      <img src={img2} alt="img2" />

    </div>
    
  </>,
  document.getElementById('root')
)