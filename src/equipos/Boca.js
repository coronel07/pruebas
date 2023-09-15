import React from 'react';
import './Boca.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Boca() {
  return (
    <div className="boca-container">
      <div className="boca-content">
        <h1 className="boca-title">Club Atlético Boca Juniors</h1>
        <p>
          El Club Atlético Boca Juniors, comúnmente conocido como Boca Juniors o simplemente Boca, es uno de los clubes de fútbol más emblemáticos de Argentina y del mundo. Fundado el 3 de abril de 1905, el club tiene su sede en el barrio de La Boca, en la ciudad de Buenos Aires.
        </p>
        <p>
          Boca Juniors es conocido por su rica historia en el fútbol argentino y su fuerte rivalidad con el Club Atlético River Plate, el "Superclásico" del fútbol argentino. El club ha ganado numerosos campeonatos nacionales e internacionales, incluyendo la Copa Libertadores en múltiples ocasiones.
        </p>
        <h2 className="boca-subtitle">Estadio Alberto J. Armando (La Bombonera)</h2>
        <p>
          El estadio del club, conocido como La Bombonera debido a su forma característica, es uno de los estadios más icónicos del mundo del fútbol. Inaugurado el 25 de mayo de 1940, el estadio tiene una capacidad de más de 50,000 espectadores y es famoso por su atmósfera única y apasionada durante los partidos.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Estadio_La_Bombonera_%28Vista_panor%C3%A1mica%29.jpg/800px-Estadio_La_Bombonera_%28Vista_panor%C3%A1mica%29.jpg"
          alt="Estadio Alberto J. Armando (La Bombonera)"
          className="boca-image"
        />
      </div>
    </div>
  );
}

export default Boca;
