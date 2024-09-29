import React from 'react';
import './Contatti.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Carica l'icona di default di Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Correggi l'icona di default per il marker
const defaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41], // dimensioni dell'icona
  iconAnchor: [12, 41], // punto in cui l'icona è ancorata
  popupAnchor: [1, -34], // punto in cui si apre il popup
  shadowSize: [41, 41], // dimensioni dell'ombra
});

const Contatti = () => {
  const position = [45.4601, 9.1669]; // Coordinate per Via Giorgio Washington, Milano

  return (
    <div className="contatti-container">
      <h1>📍 Contatti e informazioni</h1>

      {/* Box Info */}
      <div className="box info">
        <p>🏢 <strong>Indirizzo:</strong> Via Giorgio Washington 57, Milano, Italia</p>
        <p>📞 <strong>Telefono:</strong> +39 02-48193341</p>
        <p>💬 <strong>WhatsApp:</strong> +39 393 8883671</p>
        <p>📧 <strong>Email:</strong> <a href="mailto:info@rovighi.it">info@rovighi.it</a></p>
      </div>

      {/* Box Mappa */}
      <div className="box map-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={defaultIcon}>
            <Popup>
              Via Giorgio Washington 57, Milano, Italia
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Box Modulo Contatti */}
      <div className="box contact-form">
        <h2>✉️ Contattaci</h2>
        <form>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Messaggio" required></textarea>
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Contatti;
