import { useEffect, useState } from "react";
import Items from "./Items";


const ItemsList = ({productos}) => {

    const[cerveza, setCerveza] = useState([]);

useEffect(() => {
    
    const promesa = new Promise ((resolve, reject)=>{

        setTimeout(() => {
            if(cerveza.length>0){
                resolve(cerveza)
            }else{
                reject("Sin datos del producto")
            }
        }, 2000);
    })

    promesa
        .then(res => {setCerveza(res)})
        .catch(err => {console.log(err)})
    
}, [cerveza])

    return(

    <>
     

        <div>
            Productos
        </div>
        
        <div className="row">

            {
           
            <Items productos = {productos}/>
            
            
            }

        </div>

       
        
    </>
     

    )

}

export default ItemsList

