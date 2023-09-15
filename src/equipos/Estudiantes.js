import React from 'react';
import './Estudiantes.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Estudiantes() {
  return (
    <div className="estudiantes-container">
      <div className="estudiantes-content">
        <h1 className="estudiantes-title">Club Estudiantes de La Plata</h1>
        <p>
          El Club Estudiantes de La Plata, comúnmente conocido como Estudiantes, es un club de fútbol argentino con sede en la ciudad de La Plata, Buenos Aires. Fue fundado el 4 de agosto de 1905 y es uno de los clubes más históricos de Argentina.
        </p>
        <p>
          Estudiantes ha tenido un destacado desempeño en la Primera División de Argentina y ha ganado numerosos títulos, incluyendo la Copa Libertadores en varias ocasiones.
        </p>
        <h2 className="estudiantes-subtitle">Estadio Jorge Luis Hirschi</h2>
        <p>
          El estadio del club, conocido como Estadio Jorge Luis Hirschi, es el lugar donde Estudiantes juega sus partidos como local. Fue inaugurado el 9 de noviembre de 2019 y es uno de los recintos deportivos más modernos de Argentina.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Jorge Luis Hirschi"
          className="estudiantes-image"
        />
      </div>
    </div>
  );
}

export default Estudiantes;
