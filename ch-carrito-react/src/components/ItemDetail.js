import React from 'react'
import "../App.css";

const ItemDetail = ({producto}) => {

    return (
            
        <>
            <strong>Detalle del Items</strong>

            <div className='detail'>
                
            
            <br></br><br></br>
            
            {
            
            producto.map(producto => 
            <div className='div-detail'>
            <p>ID:{producto.id}</p>
            <p>Caracteristicas: {producto.caracteristicas} </p>
            <img src={producto.img} className='img-itemdetail'></img>
            <p >Precio : $ {producto.precio}</p>
            </div>
            )
           
            } 

            </div>   
    </>
    )
}

export default ItemDetail
