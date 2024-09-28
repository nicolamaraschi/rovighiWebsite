import React, { useState, useEffect } from 'react';
import './FiltroOrologi.css';

const FiltroOrologi = ({ onFilter, brands, movements }) => {
  const [brand, setBrand] = useState('');
  const [movement, setMovement] = useState('');
  const [minPrice, setMinPrice] = useState(100); // Prezzo minimo predefinito
  const [maxPrice, setMaxPrice] = useState(2000); // Prezzo massimo predefinito

  const handleFilter = () => {
    onFilter({ brand, movement, minPrice, maxPrice });
  };

  return (
    <div className="filtro-orologi">
      <h2>Filtra Orologi</h2>

      {/* Filtro per la Marca */}
      <div className="filter-group">
        <label htmlFor="brand">Marca:</label>
        <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Tutte le Marche</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro per il Movimento */}
      <div className="filter-group">
        <label htmlFor="movement">Movimento:</label>
        <select id="movement" value={movement} onChange={(e) => setMovement(e.target.value)}>
          <option value="">Tutti i Movimenti</option>
          {movements.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Slider per Prezzo Minimo */}
      <div className="filter-group">
        <label htmlFor="minPrice">Prezzo Minimo (€):</label>
        <input
          id="minPrice"
          type="range"
          min="100"
          max="2000"
          step="10"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span className="slider-value">€ {minPrice}</span>
      </div>

      {/* Slider per Prezzo Massimo */}
      <div className="filter-group">
        <label htmlFor="maxPrice">Prezzo Massimo (€):</label>
        <input
          id="maxPrice"
          type="range"
          min="100"
          max="2000"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <span className="slider-value">€ {maxPrice}</span>
      </div>

      {/* Bottone di Filtraggio */}
      <button onClick={handleFilter}>Filtra</button>
    </div>
  );
};

export default FiltroOrologi;
