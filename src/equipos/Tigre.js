import React from 'react';
import './Tigre.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Tigre() {
  return (
    <div className="tigre-container">
      <div className="tigre-content">
        <h1 className="tigre-title">Club Atlético Tigre</h1>
        <p>
          El Club Atlético Tigre, conocido comúnmente como Tigre, es un club de fútbol argentino con sede en la ciudad de Zona Norte, en la provincia de Buenos Aires. Fue fundado el 3 de agosto de 1902 y ha tenido una destacada trayectoria en el fútbol argentino.
        </p>
        <p>
        El apodo del Matador surgió por la contundencia que caracterizó al equipo que disputó el Torneo de Primera División en 1955. Identificado con los colores azul y rojo desde su inicio, el club de Victoria ostenta como título oficial la Copa de la Superliga 2019.
        </p>
        <h2 className="tigre-subtitle">Estadio Estadio José Dellagiovanna</h2>
        <p>
          El estadio del club, conocido como Estadio José Dellagiovanna, es uno de los recintos deportivos más importantes de Buenos Aires. Fue inaugurado el 20 de septiembre de 1936 y ha sido testigo de numerosos eventos deportivos históricos.
        </p>
        <img
          src="data:image/jpeg;base64,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"
          alt="[NOMBRE DEL ESTADIO]"
          className="tigre-image"
        />
      </div>
    </div>
  );
}

export default Tigre;
