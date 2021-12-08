import React from "react";



const NavBar = ()=>{
    return (
        <>       
              
        <header className = "header"> 
            <nav className = "nav">
                <a href = " " className="logo nav-link">Logo</a>
                <button className="nav-toggle">
                Responsive
                </button>
                 <ul className = "nav-menu">
                    <li className ="nav-menu-item nav-link">Contacto</li> 
                    <li className ="nav-menu-item nav-link">Clientes</li>
                    <li className ="nav-menu-item nav-link">roductos</li>
                    <li className ="nav-menu-item nav-link">Servicios</li>
                </ul>
            </nav>
        </header>
        </>
    )

}

export default NavBar;



