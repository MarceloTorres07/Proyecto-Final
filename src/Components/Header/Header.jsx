import React, { useState } from 'react';
import './header.css';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="footer-logo">
                <img src="src/assets/Images/Logo/icon.png" alt="Mi sitio"/>
            </div>

            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <a href="#home">Inicio</a>
                <a href="#services">Servicios</a>
                <a href="#about">Sobre Nosotros</a>
                <a href="#contact">Contacto</a>
            </nav>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
}

export default Header;
