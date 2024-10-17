import React from 'react';
import Slider from 'react-slick';
import './Home.css'; // Assicurati di importare il file CSS

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="home">
      <img src={`${process.env.PUBLIC_URL}/logo3.png`} alt="AR Rovighi logo" className="home-image" />
      <div className="home-content">
        <h1 className="home-title">AR Rovighi Milano</h1>
        <p className="home-text">
          Fondata nel 1970 da Alberto Rovighi e continuata l'attività dal figlio Andrea, AR Rovighi Milano si impegna a offrire solo i migliori servizi e prodotti ai propri clienti garantendo qualità e affidabilità.
        </p>
        <p className="home-text">
          Lavoriamo da oltre 50 anni per assicurare ai nostri clienti un ampio assortimento di orologi di ogni fascia di prezzo, anche di difficile reperimento o in edizione limitata.
        </p>
        <div className="home-carousel">
          <Slider {...settings}>
            <div><img src={`${process.env.PUBLIC_URL}/negozio.webp`} alt="Negozio" className="carousel-image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/riparazione.webp`} alt="Riparazione" className="carousel-image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/riparazione2.webp`} alt="Riparazione 2" className="carousel-image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/orologi.webp`} alt="Orologi" className="carousel-image" /></div>
            <div><img src={`${process.env.PUBLIC_URL}/orologi2.webp`} alt="Orologi 2" className="carousel-image" /></div>
          </Slider>
        </div>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-d9b4ea73-aec4-43aa-9f25-6d63db0728c7" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
}

export default Home;
