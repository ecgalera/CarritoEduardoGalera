import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    

    const[producto, setProducto] = useState([]);

    useEffect(() => {

        const producto =[
            {id: 234, caracteristica: "Props 1", precio: 345, img: './img/Heladera.jpg'},
            {id: 789, caracteristica: "Props 2", precio: 545, img: './img/Heladera.jpg'},
            {id: 332, caracteristica: "Props 3", precio: 1045, img: './img/Heladera.jpg'},
        ];
        const promesa = new Promise ((res, rej)=>{

            setTimeout(() => {
                if(producto.length>0){
                    res(producto)
                }else{
                    rej("Problemas con los datos")
                }
            }, 2000);
        })

        promesa
            .then( res=>{ setProducto(res)})
            .catch(err =>{console.log(err)})
        
    }, [producto])

            return (

                <div>

                    <h1>Estoy creando un ItemDetailContainer</h1>
                
                    <ItemDetail producto={producto}/>
                </div>
            )
}

export default ItemDetailContainer

