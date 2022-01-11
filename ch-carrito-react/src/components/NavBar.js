import React from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

// const navToggle = document.querySelector(".nav-toggle")
// const navMenu = document.querySelector(".nav-menu")

// navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("nav-menu_visible")

//     if (navMenu.classList.contains("nav-menu_visible")) {
//         navToggle.setAttribute("aria-label", "Cerrar menú");
//     } else {
//         navToggle.setAttribute("aria-label", "Abrir menú")
//     }
// })


const NavBar = ()=>{

    return (
        <div>
        <header className='header'>
            <nav className='nav'>
                 <Link to="home">Home</Link>
                            
                <ul className='nav-menu'>
                    <li className='nav-menu-item '> 
                        <Link to="contacto">Contacto</Link>
                    </li>
                    <li className='nav-menu-item '>
                    <Link to="clientes">clientes</Link>
                    </li>
                        <li className='nav-menu-item '>                    
                        <Link to="productos">Productos</Link>
                    </li>
                    <li className='nav-menu-item '>                    
                        <Link to="cart">Cart</Link> 
                    </li>
                </ul>

                <CartWidget/>

                <button className="nav-toggle">
                <img src="/img/menuAmbur.png" width={30} className="nav-menu-img"/>
                </button>
            </nav>

        </header>

    </div>
    )

}

export default NavBar;



