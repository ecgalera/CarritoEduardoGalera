import React from 'react'



const Items = ({productos}) => {
  
  return (
    <>
    {
    
    productos.map(productos =>
    <div className='items-div'>
        <p className='items-id'>ID: {productos.id}</p>
        <p className='items-producto'>Producto:{productos.producto}</p>
        <p className='items-precio'>Precio:${productos.precio}</p>
    </div>
    )
    }
    </>
  )

}

export default Items
