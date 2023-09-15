import React from 'react';
import './AtléticoTucumán.css';

function AtléticoTucumán() {
  return (
    <div className="tucuman-container">
      <div className="tucuman-content">
        <h1 className="tucuman-title">Club Atlético Tucumán</h1>
        <p>
          El Club Atlético Tucumán, conocido popularmente como Atlético Tucumán, es un club de fútbol argentino con sede en San Miguel de Tucumán, Argentina. Fue fundado el 27 de septiembre de 1902 y ha tenido una destacada trayectoria en el fútbol argentino.
        </p>
        <p>
          Atlético Tucumán ha participado en diversas ediciones de la Primera División de Argentina y ha logrado representar a Argentina en competiciones internacionales.
        </p>
        <h2 className="tucuman-subtitle">Estadio Monumental José Fierro</h2>
        <p>
          El estadio del club, conocido como el Estadio Monumental José Fierro, es uno de los lugares emblemáticos de la ciudad de San Miguel de Tucumán. Ha sido testigo de emocionantes partidos de fútbol a lo largo de los años.
        </p>
        <p>
          El estadio lleva el nombre de José Fierro en honor a una figura importante en la historia del club.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBQhwBCOywsoJr0h6yL6ttWNRIEFJkYBIYA&usqp=CAU"
          alt="Estadio Monumental José Fierro"
          className="tucuman-image"
        />
      </div>
    </div>
  );
}

export default AtléticoTucumán;
