import React from 'react'
import ItemsList from '../components/ItemsList'



const ItemListContainer = () => {

    const productos = [
        {id:1, producto: "Ipa", precio: 100},
        {id:2, producto: "Red Ipa", precio: 200},
        {id:3, producto: "Pilsen", precio: 300}

    ]

    return (
        <>
           <ItemsList productos = {productos}/>
        </>
    )
}

export default ItemListContainer
