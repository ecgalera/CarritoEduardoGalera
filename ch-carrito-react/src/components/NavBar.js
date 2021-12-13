import React from "react";
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
                <a href = "https://reactjs.org" className="logo nav-link">Tienda</a>
                            
                <ul className='nav-menu'>
                    <li className='nav-menu-item '> 
                        <a className="nav-menu-link nav-link nav-menu-link_active"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">Contacto
                        </a>
                    </li>
                    <li className='nav-menu-item '>
                        <a className="nav-menu-link nav-link nav-menu-link_active"
                        href="https://reactjs.org"
                        target="_blank" rel="noopener noreferrer">Clientes
                        </a>
                    </li>
                        <li className='nav-menu-item '>                    
                        <a className="nav-menu-link nav-link nav-menu-link_active"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">Productos 
                        </a>
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



