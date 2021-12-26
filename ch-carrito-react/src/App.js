
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount"
import ItemDetailContainer from './components/ItemDetailContainer';





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
         <br></br>
         <br></br>
         <ItemDetailContainer></ItemDetailContainer>

        
    </div>

  );
}

export default App;

