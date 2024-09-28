import React from 'react';
import './Servizi.css';

const serviziList = [
  {
    title: 'Vendita di Orologi Rinomati',
    description: 'CITIZEN, CASIO, VAGARY, MONDAINE, SEIKO, BULOVA.',
    imageUrl: '/vendita.jpeg'  // Path aggiornato per la cartella public
  },
  {
    title: 'Assistenza Qualificata',
    description: 'Sostituzione o revisione movimenti al quarzo, revisione automatici e meccanici (Rolex, Cartier, Omega, Jaeger Le-Coultre e altri marchi di alta gamma).',
    imageUrl: '/assistenza.jpeg'  // Path aggiornato per la cartella public
  },
  {
    title: 'Cinturini e Bracciali',
    description: 'Vasta gamma di cinturini Morellato e artigianali italiani in pelle e bracciali in acciaio.',
    imageUrl: '/cinturino.jpg'  // Path aggiornato per la cartella public
  },
  {
    title: 'Gioielleria in Argento',
    description: 'Vendita gioielleria in argento 925 NOMISSIMO.',
    imageUrl: '/silver.jpeg'  // Path aggiornato per la cartella public
  },
  {
    title: 'Cambio Pile e Impermeabilità',
    description: 'Vendita e cambio di pile alta qualità Maxell con prova impermeabilità.',
    imageUrl: '/pila.jpeg'  // Path aggiornato per la cartella public
  }
];

const Servizi = () => {
  return (
    <div className="servizi">
      <h1>I nostri servizi</h1>
      <div className="cards-container">
        {serviziList.map((servizio, index) => (
          <div key={index} className="card">
            <img src={servizio.imageUrl} alt={servizio.title} className="card-image" />
            <h2>{servizio.title}</h2>
            <p>{servizio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servizi;
