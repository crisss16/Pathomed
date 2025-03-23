import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import backgroundImg from '../../src/assets/background.jpg';


const Header = () => {
    return (
        <header className="page-header">
            <div className="overlay">
                <div className="home-section">
                    <h1>Bine ai venit la Pathomed!</h1>
                    <p>Laborator specializat în analize de anatomie patologică.</p>
                 </div>
            </div>


            <div className="login-section">
                <h2>Acceseaza rezultatele analizelor</h2>
                <Link to="/login" className="login-button">Accesare rezultate</Link>
            </div>
        </header>
    );
};

export default Header;