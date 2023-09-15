import React from 'react';
import './Gimnasia.css'; // Asegúrate de tener un archivo CSS para estos estilos

function Gimnasia() {
  return (
    <div className="gimnasia-container">
      <div className="gimnasia-content">
        <h1 className="gimnasia-title">Club de Gimnasia y Esgrima La Plata</h1>
        <p>
          El Club de Gimnasia y Esgrima La Plata, comúnmente conocido como Gimnasia y Esgrima o simplemente Gimnasia, es un club de fútbol argentino con sede en la ciudad de La Plata, Buenos Aires. Fue fundado el 3 de junio de 1887 y es uno de los clubes más antiguos de Argentina.
        </p>
        <p>
          Gimnasia y Esgrima ha tenido una destacada trayectoria en el fútbol argentino y es conocido por su intensa rivalidad con el Club Estudiantes de La Plata.
        </p>
        <h2 className="gimnasia-subtitle">Estadio Juan Carmelo Zerillo</h2>
        <p>
          El estadio del club, conocido como Estadio Juan Carmelo Zerillo o "El Bosque", es el lugar donde Gimnasia y Esgrima juega sus partidos como local. Fue inaugurado el 1 de abril de 1923 y es uno de los estadios más emblemáticos de La Plata.
        </p>
        <img
          src="URL_DE_LA_IMAGEN_DEL_ESTADIO"
          alt="Estadio Juan Carmelo Zerillo"
          className="gimnasia-image"
        />
      </div>
    </div>
  );
}

export default Gimnasia;
