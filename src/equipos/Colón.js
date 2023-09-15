import React from 'react';
import './Colón.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Colón() {
  return (
    <div className="colon-container">
      <div className="colon-content">
        <h1 className="colon-title">Club Atlético Colón</h1>
        <p>
          El Club Atlético Colón, comúnmente conocido como Colón, es un club de fútbol argentino con sede en la ciudad de Santa Fe, Argentina. Fue fundado el 5 de mayo de 1905 y es uno de los clubes más representativos de la región.
        </p>
        <p>
          Colón ha tenido una destacada participación en la Primera División de Argentina y ha competido en varias ediciones de competiciones internacionales. Sus colores característicos son el rojo y el negro.
        </p>
        <h2 className="colon-subtitle">Estadio Brigadier General Estanislao López</h2>
        <p>
          El estadio del club, conocido como Estadio Brigadier General Estanislao López o simplemente "El Cementerio de los Elefantes", es uno de los recintos deportivos más emblemáticos de Santa Fe y el país. Fue inaugurado el 9 de julio de 1946 y tiene una capacidad para más de 40,000 espectadores.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Brigadier General Estanislao López"
          className="colon-image"
        />
      </div>
    </div>
  );
}

export default Colón;
