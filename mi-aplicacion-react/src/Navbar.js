import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const timerRef = useRef(null); 

    const showMenuOnHover = () => {
        setShowMenu(true);
    };

    const hideMenuOnLeave = () => {
        timerRef.current = setTimeout(() => {
            setShowMenu(false);
        }, 1500);
    };

    const cancelHideMenu = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    return (
        <div
            className="nav-container"
            onMouseEnter={showMenuOnHover}
            onMouseLeave={hideMenuOnLeave}
        >
            <div
                className={`liga ${showMenu ? 'liga-clicked' : ''}`}
                onMouseEnter={cancelHideMenu}
            >
                <h1>LIGA ARGENTINA</h1>
            </div>
            <nav className={`navbar ${showMenu ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li>
                        <Link to="/" onClick={hideMenuOnLeave}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Equipos" onClick={hideMenuOnLeave}>Clubes</Link>
                    </li>
                    <li>
                        <Link to="/Reglamentos" onClick={hideMenuOnLeave}>Reglamentos</Link>
                    </li>
                    <li><Link to="/juegos" onClick={hideMenuOnLeave}>JUEGO</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
