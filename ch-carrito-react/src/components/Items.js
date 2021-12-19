import React from 'react'

const Items = ({id, titulo, picture, descripcion, stock}) => {
  
  return (
    
    <div className='items-div'>
        <p className='items-id'>Id: {id}</p>
        <p className='items-titulo'>{titulo}</p>
        <img src='/img/Heladera.jpg' className='items-picture'/>
        <p className='items-descricion'>{descripcion}</p>
        <p className='items-stock'>Stock:{stock}</p>
        <button>Comprar</button>
    </div>
  )

}

export default Items
