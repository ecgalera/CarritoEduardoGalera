import React, {useState} from 'react'




const ItemCount = ({stock, onAdded}) => {

    const [contador, setContador] = useState(1)
    
    function onAdd(){
        if(stock > contador){ return setContador(contador + 1
            )}else{return setContador(contador)}
        
        }
    function onSubtact(){
         if(contador>0){ return setContador(contador -1)}
    
         }

    return (
        <>
        <p>Camisa Tiger</p>
        <br></br>
        <div className='button-contador'>
            <button onClick={onAdd}>+</button>
            <p className='button-contador-p'>{contador}</p>
            <button onClick={onSubtact}>-</button>
        </div>
        <br></br>
        <button onClick={onAdded}>Agregar Carrito</button>
        </>
    )

    }
export default ItemCount;
