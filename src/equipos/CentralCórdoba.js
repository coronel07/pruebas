import React from 'react';
import './CentralCórdoba.css'; // Asegúrate de tener un archivo CSS para estos estilos

function CentralCórdoba() {
  return (
    <div className="central-container">
      <div className="central-content">
        <h1 className="central-title">Club Atlético Central Córdoba</h1>
        <p>
          El Club Atlético Central Córdoba, comúnmente conocido como Central Córdoba, es un club de fútbol argentino con sede en la ciudad de Santiago del Estero, Argentina. Fue fundado el 3 de abril de 1919 y ha tenido una destacada participación en el fútbol argentino.
        </p>
        <p>
          El club ha competido en diversas categorías del fútbol argentino y ha logrado varios éxitos a lo largo de su historia. Sus colores característicos son el rojo y blanco.
        </p>
        <h2 className="central-subtitle">Estadio Alfredo Terrera</h2>
        <p>
          El estadio del club, conocido como Estadio Alfredo Terrera, es uno de los recintos deportivos más importantes de Santiago del Estero. Fue inaugurado el 17 de marzo de 1971 y tiene una capacidad para aproximadamente 15,000 espectadores.
        </p>
        <img
          src="https://ejemplo.com/imagen-estadio.jpg"
          alt="Estadio Alfredo Terrera"
          className="central-image"
        />
      </div>
    </div>
  );
}

export default CentralCórdoba;
