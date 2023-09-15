import React from 'react';
import './Independiente.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Independiente() {
  return (
    <div className="independiente-container">
      <div className="independiente-content">
        <h1 className="independiente-title">Club Atlético Independiente</h1>
        <p>
          El Club Atlético Independiente, comúnmente conocido como Independiente, es un club de fútbol argentino con sede en el barrio de Avellaneda, Buenos Aires. Fue fundado el 1 de enero de 1905 y es uno de los clubes más exitosos de Argentina y de Sudamérica.
        </p>
        <p>
          Independiente ha ganado numerosos títulos nacionales e internacionales, incluyendo la Copa Libertadores en varias ocasiones. Es conocido por su rica historia y por ser uno de los equipos más populares de Argentina.
        </p>
        <h2 className="independiente-subtitle">Estadio Libertadores de América</h2>
        <p>
          El estadio del club, conocido como Estadio Libertadores de América, es uno de los recintos deportivos más emblemáticos de Buenos Aires. Fue inaugurado el 4 de marzo de 1928 y ha sido testigo de innumerables victorias y momentos históricos del fútbol argentino.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Libertadores de América"
          className="independiente-image"
        />
      </div>
    </div>
  );
}

export default Independiente;
