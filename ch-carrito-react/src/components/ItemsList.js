import { useEffect, useState } from "react";
import Items from "./Items";


const ItemsList = ({productos}) => {

    const[cerveza, setCerveza] = useState([]);

useEffect(() => {
    
    const promesa = new Promise ((resolve, reject)=>{

        setTimeout(() => {
            if(productos.length>0){
                resolve(productos)
            }else{
                reject("Sin datos del producto")
            }
        }, 2000);
    })

    promesa
        .then(res => {setCerveza(res)})
        .catch(err => {console.log(err)})
    
}, [productos])

    return(
        <>
        <div>
            Productos
        </div>
        <div className="row">

            {
           cerveza.map(item => (
            <Items key={item.id} props = {item}/>
            ))
            }

        </div>
        
        </>

    )

}

export default ItemsList

