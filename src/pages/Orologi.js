import React, { useState, useEffect } from 'react'; // Aggiungi useEffect qui
import './Orologi.css';
import FiltroOrologi from '../components/FiltroOrologi';

const orologi = [
  { id: 1, brand: 'Citizen', name: 'Meccanico Tsuyosa Piccoli Secondi NK5010-51L', price: '€ 369,00', movement: 'Meccanico', imgSrc: '/path/to/image1.jpg', details: 'Edizione Limitata' },
  { id: 2, brand: 'Citizen', name: 'Diver Promaster "Godzilla" Limited Edition BJ8059-03Z', price: '€ 649,00', movement: 'Automatico', imgSrc: '/path/to/image2.jpg', details: 'Edizione Limitata' },
  { id: 3, brand: 'Citizen', name: 'Automatico Super Titanio NJ0180-80H', price: '€ 429,00', movement: 'Automatico', imgSrc: '/path/to/image3.jpg', details: '' },
  { id: 4, brand: 'Citizen', name: 'Uomo Super Titanio 0130 ref.AW0130-85L', price: '€ 329,00', movement: 'Automatico', imgSrc: '/path/to/image4.jpg', details: '' },
  { id: 5, brand: 'Citizen', name: 'Crono Super Titanio 4610 ref.CA4610-85Z', price: '€ 449,00', movement: 'Cronografo', imgSrc: '/path/to/image5.jpg', details: '' },
  { id: 6, brand: 'Citizen', name: 'Crono Super Titanio 4610 ref.CA4610-85X', price: '€ 449,00', movement: 'Cronografo', imgSrc: '/path/to/image6.jpg', details: '' },
  { id: 7, brand: 'Citizen', name: 'Crono Super Titanio 4610 ref.CA4610-85L', price: '€ 449,00', movement: 'Cronografo', imgSrc: '/path/to/image7.jpg', details: '' },
  { id: 8, brand: 'Citizen', name: 'Crono Super Titanio 4610 ref.CA4610-85A', price: '€ 449,00', movement: 'Cronografo', imgSrc: '/path/to/image8.jpg', details: '' },
  { id: 9, brand: 'Citizen', name: 'Diver Eco Drive 200mt BN0162-02X', price: '€ 268,00', movement: 'Eco Drive', imgSrc: '/path/to/image9.jpg', details: '' },
  { id: 10, brand: 'Citizen', name: 'Tsuyosa NJ0150-81Z', price: '€ 289,00', movement: 'Automatico', imgSrc: '/path/to/image10.jpg', details: 'Edizione Limitata' },
  { id: 11, brand: 'Citizen', name: 'Lady EM0890-85L', price: '€ 139,00', movement: 'Quarzo', imgSrc: '/path/to/image11.jpg', details: '' },
  { id: 12, brand: 'Citizen', name: 'Lady EM0813-86Y', price: '€ 199,00', movement: 'Quarzo', imgSrc: '/path/to/image12.jpg', details: '' },
  { id: 13, brand: 'Citizen', name: 'Lady EM0899-81X', price: '€ 149,00', movement: 'Quarzo', imgSrc: '/path/to/image13.jpg', details: '' },
  { id: 14, brand: 'Citizen', name: 'Lady EW2449-83A', price: '€ 129,00', movement: 'Quarzo', imgSrc: '/path/to/image14.jpg', details: '' },
  { id: 15, brand: 'Citizen', name: 'ProMaster Diver 200mt BN0158-85X', price: '€ 288,00', movement: 'Eco Drive', imgSrc: '/path/to/image15.jpg', details: '' },
  { id: 16, brand: 'Citizen', name: 'ProMaster Diver 200mt BN0150-61E', price: '€ 288,00', movement: 'Eco Drive', imgSrc: '/path/to/image16.jpg', details: '' },
  { id: 17, brand: 'Citizen', name: 'ProMaster Diver 200mt BN0163-00H', price: '€ 268,00', movement: 'Eco Drive', imgSrc: '/path/to/image17.jpg', details: '' },
  { id: 18, brand: 'Citizen', name: 'Altichron Super Titanio BN4021-02E', price: '€ 698,00', movement: 'Analogico', imgSrc: '/path/to/image18.jpg', details: '' },
  { id: 19, brand: 'Citizen', name: 'Marine 1760 AW1760-81X', price: '€ 169,00', movement: 'Quarzo', imgSrc: '/path/to/image19.jpg', details: '' },
  { id: 20, brand: 'Citizen', name: 'Tsuyosa Automatic NJ0154-80H', price: '€ 299,00', movement: 'Automatico', imgSrc: '/path/to/image20.jpg', details: 'Edizione Limitata' },
  { id: 21, brand: 'Citizen', name: 'Radiocontrollato Unite with Blue Limited Edition AT8188-64L', price: '€ 1.390,00', movement: 'Radiocontrollato', imgSrc: '/path/to/image21.jpg', details: 'Edizione Limitata' },
  { id: 22, brand: 'Citizen', name: 'Marine 1760 AW1760-81Z', price: '€ 169,00', movement: 'Quarzo', imgSrc: '/path/to/image22.jpg', details: '' },
];

const Orologi = () => {
  const [filteredOrologi, setFilteredOrologi] = useState(orologi);
  const [brands, setBrands] = useState([]);
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    // Estrai le marche uniche e i movimenti dagli orologi
    const uniqueBrands = [...new Set(orologi.map((orologio) => orologio.brand))];
    const uniqueMovements = [...new Set(orologi.map((orologio) => orologio.movement))];
    setBrands(uniqueBrands);
    setMovements(uniqueMovements);
  }, []);

  const handleFilter = (filters) => {
    const { brand, movement, minPrice, maxPrice } = filters;

    const filtered = orologi.filter((orologio) => {
      const price = parseFloat(orologio.price.replace('€ ', '').replace(',', '.'));
      const brandMatch = brand ? orologio.brand === brand : true;
      const movementMatch = movement ? orologio.movement === movement : true;
      const minPriceMatch = minPrice ? price >= parseFloat(minPrice) : true;
      const maxPriceMatch = maxPrice ? price <= parseFloat(maxPrice) : true;

      return brandMatch && movementMatch && minPriceMatch && maxPriceMatch;
    });

    setFilteredOrologi(filtered);
  };

  return (
    <div className="orologi">
      <FiltroOrologi onFilter={handleFilter} brands={brands} movements={movements} />
      <div className="orologi-container">
        {filteredOrologi.map((orologio) => (
          <div key={orologio.id} className="orologio-box">
            <img src={orologio.imgSrc} alt={orologio.name} className="orologio-image" />
            <div className="orologio-info">
              <h2 className="orologio-name">{orologio.name}</h2>
              <p className="orologio-brand">{orologio.brand}</p>
              <p className="orologio-movement">{orologio.movement}</p>
              <p className="orologio-price">{orologio.price}</p>
              <p className="orologio-details">{orologio.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orologi;