
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Clientes from './components/Clientes';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/Contacto';
import Home from "./components/Home"
import Cart from './components/Cart';





function App() {
  return (
   

   <div className="App">
    
        {/* <NavBar/>
        <br></br>
       
        <br></br>
        <ItemCount stock = "10"/>
        <br></br>
        <br></br>
         <ItemListContainer/>
         <br></br>
         <br></br>
         <ItemDetailContainer></ItemDetailContainer> */}
        <BrowserRouter>
               <NavBar></NavBar>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<ItemDetailContainer />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />


        </Routes>
      </BrowserRouter>




        
    </div>

  );
}

export default App;

