import React from 'react';
import './Banfield.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Banfield() {
  return (
    <div className="banfield-container">
      <div className="banfield-content">
        <h1 className="banfield-title">Club Atlético Banfield</h1>
        <p>
          El Club Atlético Banfield, conocido comúnmente como Banfield, es un club de fútbol argentino con sede en la ciudad de Banfield, Buenos Aires. Fue fundado el 21 de enero de 1896 y es uno de los clubes más antiguos de Argentina.
        </p>
        <p>
          Banfield ha tenido una destacada participación en la Primera División de Argentina a lo largo de su historia y ha ganado varios títulos nacionales e internacionales.
        </p>
        <h2 className="banfield-subtitle">Estadio Florencio Sola</h2>
        <p>
          El estadio del club, conocido como el Estadio Florencio Sola, es uno de los recintos deportivos más emblemáticos de Argentina. Fue inaugurado el 24 de febrero de 1940 y ha sido testigo de numerosos momentos históricos del fútbol argentino.
        </p>
        <img
          src="data:image/jpeg;base64,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"
          alt="Estadio Florencio Sola"
          className="banfield-image"
        />
      </div>
    </div>
  );
}

export default Banfield;
