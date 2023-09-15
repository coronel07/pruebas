import React from 'react';
import './BarracasCentral.css'; // Asegúrate de tener un archivo CSS para estos estilos

function BarracasCentral() {
  return (
    <div className="barracas-container">
      <div className="barracas-content">
        <h1 className="barracas-title">Club Atlético Barracas Central</h1>
        <p>
          El Club Atlético Barracas Central, conocido comúnmente como Barracas Central, es un club de fútbol argentino con sede en el barrio de Barracas, Buenos Aires. Fue fundado el 5 de abril de 1904 y ha tenido una destacada trayectoria en el fútbol argentino.
        </p>
        <p>
          Barracas Central ha participado en diversas competencias nacionales e internacionales y es conocido por su compromiso con la comunidad y su sólida base de seguidores.
        </p>
        <h2 className="barracas-subtitle">Estadio Claudio Chiqui Tapia</h2>
        <p>
          El estadio del club, conocido como Estadio Claudio Chiqui Tapia, es uno de los recintos deportivos más emblemáticos de Argentina. Fue inaugurado el 20 de agosto de 1937 y ha sido testigo de numerosos momentos históricos del fútbol argentino.
        </p>
        <p>
          El estadio lleva el nombre de Claudio "Chiqui" Tapia, quien es una figura destacada en la administración del fútbol argentino.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Claudio Chiqui Tapia"
          className="barracas-image"
        />
      </div>
    </div>
  );
}

export default BarracasCentral;
