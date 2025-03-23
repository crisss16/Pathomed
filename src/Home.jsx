import React from 'react';
import './Home.css';
//import logo from '../assets/pathomed-logo.png'; // Asigură-te că logo-ul este în acest folder

const Home = () => {
  return (
    <div className="home-container">
      

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
