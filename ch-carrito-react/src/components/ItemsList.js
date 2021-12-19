import React from 'react'
import Items from './Items'

const ItemsList = ({id, titulo, picture, descripcion, stock}) => {

    
    return (

        <div className='items-items-list'>
            
        <Items id={id} titulo={titulo} picture={picture} descripcion={descripcion} stock={stock}></Items>
      
        </div>
    )
}

export default ItemsList

