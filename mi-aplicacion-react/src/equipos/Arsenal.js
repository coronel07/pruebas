import React from 'react';
import './Arsenal.css'; // Asegúrate de tener un archivo CSS para estos estilos

function ArsenalFC() {
  return (
    <div className="arsenal-container">
      <div className="arsenal-content">
        <h1 className="arsenal-title">Arsenal Fútbol Club</h1>
        <p>
          El Arsenal Fútbol Club, comúnmente conocido como Arsenal, es un club de fútbol argentino con sede en Sarandí, Buenos Aires. Fue fundado el 11 de enero de 1957 y ha tenido una trayectoria destacada en el fútbol argentino.
        </p>
        <p>
          Arsenal ha competido en la Primera División de Argentina y ha participado en varias competiciones nacionales e internacionales.
        </p>
        <h2 className="arsenal-subtitle">Estadio Julio Humberto Grondona</h2>
        <p>
          El estadio del club, conocido como el Estadio Julio Humberto Grondona, es donde Arsenal juega sus partidos de local. Este estadio ha sido testigo de momentos memorables en la historia del club.
        </p>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/0e/df/24/estadio-arsenal-futbol.jpg?w=1200&h=-1&s=1"
          alt="Estadio Julio Humberto Grondona"
          className="arsenal-image"
        />
      </div>
    </div>
  );
}

export default ArsenalFC;
