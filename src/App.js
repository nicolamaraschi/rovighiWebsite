import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import Orologi from './pages/Orologi';
import Contatti from './pages/Contatti';

import './App.css';
import "slick-carousel/slick/slick.css"; // Importa il CSS di slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Importa il tema di slick-carousel

function App() {
  // Usa il basename solo in produzione (ad esempio, su GitHub Pages)
  const basename = process.env.NODE_ENV === 'production' ? '/rovighiWebsite' : '';

  return (
    <Router basename={basename}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />  {/* Reindirizza alla route /home */}
          <Route path="/home" element={<Home />} />  {/* Aggiungi la route /home */}
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/orologi" element={<Orologi />} />
          <Route path="/contatti" element={<Contatti />} />

          {/* Reindirizzamento da qualsiasi percorso sconosciuto alla home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
