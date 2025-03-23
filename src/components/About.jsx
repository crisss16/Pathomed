import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1>Despre Pathomed</h1>
            <p>
                Pathomed este un laborator modern de anatomie patologică, dedicat diagnosticării precise și rapide.
                Echipa noastră de specialiști utilizează tehnologie de ultimă generație pentru a oferi servicii medicale
                de înaltă calitate.
            </p>
            
            <h2>Servicii oferite</h2>
            <ul>
                <li><strong>Test Babes-Papanicolau:</strong> Examinare microscopică pentru detectarea precoce a leziunilor precanceroase și a cancerului cervical.</li>
                <li><strong>Test HPV:</strong> Identificarea tipurilor de virus papilloma uman (HPV), responsabile pentru majoritatea cazurilor de cancer de col uterin.</li>
                <li><strong>Biopsii:</strong> Analiza histopatologică a țesuturilor prelevate pentru un diagnostic precis.</li>
            </ul>
        </div>
    );
};

export default About;
