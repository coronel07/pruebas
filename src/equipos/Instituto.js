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
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Juan Domingo Perón"
          className="instituto-image"
        />
      </div>
    </div>
  );
}

export default Instituto;
