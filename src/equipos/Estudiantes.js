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
          src="data:image/jpeg;base64,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"
          alt="Estadio Jorge Luis Hirschi"
          className="estudiantes-image"
        />
      </div>
    </div>
  );
}

export default Estudiantes;
