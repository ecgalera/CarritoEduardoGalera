import React from 'react'
import "../App.css";
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





const ItemDetail = ({producto}) => {

    const [added, setAdded] = useState(false)

    const onAdded= ()=>{
        setAdded(true)
        console.log("added", added);
    }

    useEffect(()=>{
        console.log("added", added);
    }, [added])

  
    

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

            {!added &&
                <ItemCount stock = "10" onAdded={onAdded}></ItemCount>
            }

            {added &&
                <Link to="cart">Terminar Compra</Link>
            }
            </div>
            
            )
           
            } 

            </div>   
    </>

    )
        }

export default ItemDetail
