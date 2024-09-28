// src/Ecommerce.js
import React from 'react';

const Ecommerce = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://0a6978-ef.myshopify.com/"
        title="E-commerce"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
};

export default Ecommerce;
