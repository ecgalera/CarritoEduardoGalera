
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
   

   <div className="App">
    
        <NavBar/>
      
        <ItemListContainer text={"Aquí van los Items"}/>

    </div>
  );
}

export default App;

