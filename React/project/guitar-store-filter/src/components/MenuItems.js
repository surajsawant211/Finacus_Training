import React from 'react'

const MenuItems = ({items}) => {
    return (
        <>
            <div className='Cards'>
            {
                items.map((elem) => {
                    const  {id,name,image,description,Price} =elem
                        return(
                    
                            <div  className="card mt-5" style={{width: '18rem'}} key={id}>
                                <img className="card-img-top" src={image} alt="Card img cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                
                                </ul>
                                <div className="card-body d-flex justify-content-between">
                                    <h2>{Price}</h2>
                                    <a href="#" className="card-link">
                                    <button className='btn-primary'>Order Now</button></a>
                                </div>
                            </div>
                            
                        )
                    
                })
            }
          
            </div>
        </>
    )
}

export default MenuItems
