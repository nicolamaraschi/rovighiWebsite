import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link da React Router
import './Footer.css'; // Assicurati di avere il CSS aggiornato per il footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Logo" />
        </div>
        <div className="footer-links">
          <h3>🔗 Navigazione</h3>
          <ul>
            {/* Utilizza Link di React Router per gestire la navigazione interna */}
            <li><Link to="/">Home</Link></li>
            <li><a href="https://www.orologeriarovighi.com/webstore" target="_blank" rel="noopener noreferrer">Eccommerce</a></li>
            <li><Link to="/servizi">Servizi</Link></li>
            <li><Link to="/contatti">Contatti</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>📞 Contatti</h3>
          <p>📍 Via Giorgio Washington 57, Milano, Italia</p>
          <p>📞 +39 02-48193341</p>
          <p>💬 +39 393 8883671</p>
          <p>📧 <a href="mailto:info@rovighi.it">info@rovighi.it</a></p>
        </div>
        <div className="footer-social">
          <h3>🌐 Seguici</h3>
          <ul>
            <li><a href="https://www.facebook.com/OrologeriaRovighiSas/?locale=it_IT" aria-label="Facebook">Facebook</a></li>
            <li><a href="https://twitter.com/YourProfile" aria-label="Twitter">Twitter</a></li>
            <li><a href="https://www.instagram.com/orologeria_rovighi/?hl=en" aria-label="Instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 AR Rovighi Milano. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default Footer;
