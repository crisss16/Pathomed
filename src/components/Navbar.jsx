import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const toggleMenu = () => {
        document.getElementById('menuHidded').classList.toggle('active');
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                {/* Logo-ul Pathomed */}
                <Link className="navbar-brand" to="/">Pathomed</Link>

                {/* Burger Menu */}
                <div id="burger" className="burger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* Meniu ascuns */}
                <div id="menuHidded" className="menuHideed">
                    <div><Link className="nav-link" to="/" onClick={toggleMenu}>Acasă</Link></div>
                    <div><Link className="nav-link btn-despre" to="/despre" onClick={toggleMenu}>Despre</Link></div>
                    <div><Link className="nav-link" to="/contact" onClick={toggleMenu}>Contact</Link></div>
                    <div><Link className="nav-link btn-programare" to="/programare" onClick={toggleMenu}>Programează-te!</Link></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
