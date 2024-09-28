import React from 'react';
import './Footer.css'; // Assicurati di avere il CSS aggiornato per il footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo2.png" alt="Logo AR Rovighi" />
        </div>
        <div className="footer-links">
          <h3>🔗 Navigazione</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/servizi">Servizi</a></li>
            <li><a href="/orologi">Orologi</a></li>
            <li><a href="/contatti">Contatti</a></li>
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
            <li><a href="https://www.facebook.com/YourPage" aria-label="Facebook">Facebook</a></li>
            <li><a href="https://twitter.com/YourProfile" aria-label="Twitter">Twitter</a></li>
            <li><a href="https://www.instagram.com/YourProfile" aria-label="Instagram">Instagram</a></li>
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
