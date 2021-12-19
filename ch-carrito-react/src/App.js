
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount"
import ItemsList from './components/ItemsList';

const Items =[
  { id:5, titulo:"Producto1", descripcion:"basico", stock:3},
  { id:34, titulo:"Producto2", descripcion:"premiun", stock:12},
  { id:56, titulo:"Producto3", descripcion:"special", stock:9},
]


function App() {
  return (
   

   <div className="App">
    
        <NavBar/>
        <br></br>
        <ItemListContainer text={"Aquí van los Items"}/>
        <br></br>
        <ItemCount stock = "10"/>
        <br></br>
        <br></br>
        {Items.map((ele)=>{
        return (<ItemsList id={ele.id} titulo={ele.producto} descripcion={ele.descripcion} stock={ele.stock}></ItemsList>)})
        }
   
    </div>

  );
}

export default App;

