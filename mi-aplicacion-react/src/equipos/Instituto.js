import React from 'react';
import './Instituto.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Instituto() {
  return (
    <div className="instituto-container">
      <div className="instituto-content">
        <h1 className="instituto-title">Instituto Atlético Central Córdoba</h1>
        <p>
          Instituto Atlético Central Córdoba, comúnmente conocido como Instituto, es un club de fútbol argentino con sede en la ciudad de Córdoba, Argentina. Fue fundado el 8 de agosto de 1918 y es uno de los equipos más representativos de la provincia de Córdoba.
        </p>
        <p>
          Instituto ha tenido una destacada participación en el fútbol argentino y ha competido en varias temporadas de la Primera División. El club cuenta con una base de seguidores apasionados y es un símbolo del fútbol cordobés.
        </p>
        <h2 className="instituto-subtitle">Estadio Juan Domingo Perón</h2>
        <p>
          El estadio del club, conocido como Estadio Juan Domingo Perón, es el recinto donde Instituto juega sus partidos de local. Fue inaugurado el [FECHA DE INAUGURACIÓN] y ha sido testigo de emocionantes encuentros a lo largo de los años.
        </p>
        <img
          src="data:image/jpeg;base64,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"
          alt="Estadio Juan Domingo Perón"
          className="instituto-image"
        />
      </div>
    </div>
  );
}

export default Instituto;
