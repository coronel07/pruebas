import React from 'react';
import './Belgrano.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Belgrano() {
  return (
    <div className="belgrano-container">
      <div className="belgrano-content">
        <h1 className="belgrano-title">Club Atlético Belgrano</h1>
        <p>
          El Club Atlético Belgrano, comúnmente conocido como Belgrano, es un club de fútbol argentino con sede en la ciudad de Córdoba, Argentina. Fue fundado el 19 de marzo de 1905 y es uno de los clubes más emblemáticos de la región.
        </p>
        <p>
          Belgrano ha tenido una rica historia en el fútbol argentino y ha competido en diversas categorías del fútbol nacional. Su sede en la ciudad de Córdoba lo convierte en un club querido por los cordobeses y amantes del fútbol en la región.
        </p>
        <h2 className="belgrano-subtitle">Estadio Julio César Villagra</h2>
        <p>
          El estadio del club, conocido como Estadio Julio César Villagra o simplemente "El Gigante de Alberdi", es uno de los recintos deportivos más importantes de la ciudad de Córdoba. Fue inaugurado el 15 de agosto de 1929 y ha sido testigo de innumerables partidos y eventos deportivos a lo largo de los años.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Estadio_Julio_C%C3%A9sar_Villagra_Panor%C3%A1mica.jpg/800px-Estadio_Julio_C%C3%A9sar_Villagra_Panor%C3%A1mica.jpg"
          alt="Estadio Julio César Villagra"
          className="belgrano-image"
        />
      </div>
    </div>
  );
}

export default Belgrano;
