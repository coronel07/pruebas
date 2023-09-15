import React from 'react';
import './Argentinos.css'; // Asegúrate de tener un archivo CSS para estos estilos

function ArgentinosJuniors() {
  return (
    <div className="argentinos-container">
      <div className="argentinos-content">
        <h1 className="argentinos-title">Club Atlético Argentinos Juniors</h1>
        <p>
          El Club Atlético Argentinos Juniors, conocido comúnmente como Argentinos Juniors o simplemente Argentinos, es un club de fútbol argentino con sede en el barrio de La Paternal, Buenos Aires. Fue fundado el 15 de agosto de 1904 y es uno de los clubes más antiguos de Argentina.
        </p>
        <p>
          Argentinos Juniors ha tenido una destacada participación en la Primera División de Argentina a lo largo de su historia y ha ganado varios títulos nacionales e internacionales, incluyendo la Copa Libertadores en 1985.
        </p>
        <h2 className="argentinos-subtitle">Estadio Diego Armando Maradona</h2>
        <p>
          El estadio del club, conocido como el Estadio Diego Armando Maradona, es uno de los recintos deportivos más emblemáticos de Argentina. Fue inaugurado el 26 de diciembre de 1940 y ha sido testigo de numerosos momentos históricos del fútbol argentino.
        </p>
        <p>
          El estadio lleva el nombre de Diego Armando Maradona en honor al legendario futbolista argentino que se formó en las categorías juveniles de Argentinos Juniors antes de embarcarse en una destacada carrera internacional.
        </p>
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipOyonDiikoLlt_U_3ByvgBmad36mePqU6LdP498=s680-w680-h510"
          alt="Estadio Diego Armando Maradona"
          className="argentinos-image"
        />
      </div>
    </div>
  );
}

export default ArgentinosJuniors;