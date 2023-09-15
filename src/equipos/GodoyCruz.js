import React from 'react';
import './GodoyCruz.css'; // Asegúrate de tener un archivo CSS para estos estilos

function GodoyCruz() {
  return (
    <div className="godoycruz-container">
      <div className="godoycruz-content">
        <h1 className="godoycruz-title">Club Deportivo Godoy Cruz Antonio Tomba</h1>
        <p>
          El Club Deportivo Godoy Cruz Antonio Tomba, comúnmente conocido como Godoy Cruz, es un club de fútbol argentino con sede en la ciudad de Mendoza, Argentina. Fue fundado el 1 de junio de 1921 y es uno de los clubes más representativos de la provincia de Mendoza.
        </p>
        <p>
          Godoy Cruz ha participado en varias temporadas de la Primera División de Argentina y ha ganado seguidores en todo el país. El club es conocido por su ferviente afición y su estadio repleto de pasión.
        </p>
        <h2 className="godoycruz-subtitle">Estadio Malvinas Argentinas</h2>
        <p>
          El estadio del club, conocido como Estadio Malvinas Argentinas, es el lugar donde Godoy Cruz juega sus partidos como local. Fue inaugurado el 14 de mayo de 1978 y es uno de los estadios más importantes de Mendoza.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Malvinas Argentinas"
          className="godoycruz-image"
        />
      </div>
    </div>
  );
}

export default GodoyCruz;
