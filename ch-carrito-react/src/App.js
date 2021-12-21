
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount"





function App() {
  return (
   

   <div className="App">
    
        <NavBar/>
        <br></br>
       
        <br></br>
        <ItemCount stock = "10"/>
        <br></br>
        <br></br>
         <ItemListContainer/>
    </div>

  );
}

export default App;

