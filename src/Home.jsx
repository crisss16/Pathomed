import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
//import logo from '../assets/pathomed-logo.png'; // Asigură-te că logo-ul este în acest folder

const Home = () => {
  return (
    <div className="home-container">
      <header className="page-header">
        <div className="overlay">
          <div className="home-section">
            <h1>Bine ai venit la Pathomed!</h1>
            <p>Laborator specializat în analize de anatomie patologică.</p>
          </div>
        </div>
      
        <div className="login-section">
          <h2>Accesează rezultatele analizelor</h2>
          <Link to="/login" className="login-button">Accesare rezultate</Link>
        </div>
      </header>

      <section className="about">
        <h2>Despre noi</h2>
        <p>La Pathomed, oferim servicii medicale de înaltă calitate, utilizând tehnologii moderne și o echipă de specialiști dedicați.</p>
      </section>

      <section className="values">
        <h2>Valorile noastre</h2>
        <ul>
          <li>✔ Profesionalism</li>
          <li>✔ Empatie</li>
          <li>✔ Inovație</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
