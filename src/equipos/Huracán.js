import React from 'react';
import './Huracán.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Huracán() {
  return (
    <div className="huracan-container">
      <div className="huracan-content">
        <h1 className="huracan-title">Club Atlético Huracán</h1>
        <p>
          El Club Atlético Huracán, comúnmente conocido como Huracán, es un club de fútbol argentino con sede en el barrio de Parque Patricios, Buenos Aires. Fue fundado el 1 de noviembre de 1908 y es uno de los clubes más tradicionales de Argentina.
        </p>
        <p>
          Huracán ha tenido una destacada participación en la Primera División de Argentina a lo largo de su historia y es conocido por su ferviente afición y su estadio emblemático.
        </p>
        <h2 className="huracan-subtitle">Estadio Tomás Adolfo Ducó</h2>
        <p>
          El estadio del club, conocido como Estadio Tomás Adolfo Ducó o "El Palacio", es uno de los recintos deportivos más emblemáticos de Buenos Aires. Fue inaugurado el 7 de abril de 1949 y ha sido testigo de numerosos momentos históricos del fútbol argentino.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Tomás Adolfo Ducó"
          className="huracan-image"
        />
      </div>
    </div>
  );
}

export default Huracán;
