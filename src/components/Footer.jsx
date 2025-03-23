import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section contact">
                        <h3>Contact</h3>
                        <p><strong>Telefon:</strong> <a href="tel:+40712345678">+40 712 345 678</a></p>
                        <p><strong>Email:</strong> <a href="mailto:contact@pathomed.ro">contact@pathomed.ro</a></p>
                    </div>
                    <div className="footer-section address">
                        <h3>Adresă</h3>
                        <p>Strada Sanatatii nr. 10, București, România</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.569008049847!2d26.097879415521133!3d44.43966397910296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff404d8fb6e5%3A0x2b35f3176a8e6a0d!2sBucharest!5e0!3m2!1sen!2sro!4v1614356864625!5m2!1sen!2sro"
                            width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Pathomed. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;