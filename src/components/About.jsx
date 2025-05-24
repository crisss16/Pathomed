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
                <li><strong>Test Babes-Papanicolau:</strong> 
                <br /><br />Testul Papanicolau este o investigație ginecologică esențială pentru prevenirea și depistarea precoce a modificărilor celulare de la nivelul colului uterin. Acest test constă în recoltarea de celule de pe suprafața colului uterin, care sunt ulterior analizate microscopic pentru a identifica eventuale leziuni precanceroase, infecții sau alte anomalii.
                <br /><br />
                 Este o metodă nedureroasă, rapidă și eficientă, recomandată în mod regulat femeilor active sexual, în special celor cu vârste între 21 și 65 de ani. Prin efectuarea periodică a testului PAP, riscul de a dezvolta cancer cervical scade considerabil, datorită posibilității de a interveni din timp asupra celulelor anormale.</li>
                <li><strong>Test HPV:</strong>
                <br /><br /> Testul HPV detectează prezența ADN-ului tulpinilor cu risc oncogen ale virusului papilloma uman, principalul factor de risc pentru apariția cancerului de col uterin. Spre deosebire de testul Papanicolau, care analizează modificările celulare, testul HPV are rolul de a identifica infecția virală înainte ca aceasta să producă modificări vizibile la nivelul celulelor.
                <br /><br />
                Este recomandat fie ca test de screening complementar PAP-ului, fie ca test de sine stătător, în special la femeile peste 30 de ani. Rezultatul negativ oferă un grad ridicat de siguranță că nu există risc oncogen activ, în timp ce un rezultat pozitiv poate indica necesitatea unor investigații suplimentare.

                 </li>
                <li><strong>Biopsii:</strong>
                <br /><br />Biopsia reprezintă procesul de prelevare a unei mici mostre de țesut dintr-o zonă suspectă, în scopul examinării sale la microscop. Acest test este esențial pentru stabilirea unui diagnostic precis, în special în cazurile în care alte teste (precum PAP sau HPV) au semnalat modificări anormale.
                <br /><br />  
                Există mai multe tipuri de biopsii în funcție de zona vizată și metoda utilizată (biopsii cervicale, endometriale, mamare etc.). Mostra este analizată în laborator de către un medic anatomopatolog, care va identifica prezența celulelor canceroase, inflamațiilor sau altor afecțiuni. Biopsia este o procedură de înaltă precizie, indispensabilă în oncologie și în multe alte specialități medicale.</li>
            </ul>
        </div>
    );
};

export default About;
