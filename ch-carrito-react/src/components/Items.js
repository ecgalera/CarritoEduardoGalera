import React from 'react'


const Items = ({id, producto, precio}) => {
  
  return (
    
    <div className='items-div'>
        <p className='items-id'>Id: {id}</p>
        <p className='items-producto'>Producto:{producto}</p>
        <p className='items-precio'>Precio:{precio}</p>
    </div>
  )

}

export default Items
