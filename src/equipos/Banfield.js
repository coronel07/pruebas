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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScW-3-v3YvJEfCuXx_htFqv8RWCLZ2nsheGQ&usqp=CAU"
          alt="Estadio Florencio Sola"
          className="banfield-image"
        />
      </div>
    </div>
  );
}

export default Banfield;
