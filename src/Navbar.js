import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo CSS


function Navbar() {
    return (
        <div className="nav-container">
            <div class="liga">
                <h1>LIGA ARGENTINA</h1>
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Clubes">Clubes</Link>
                    </li>
                    <li>
                        <Link to="/Estadios">Estadios</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;


