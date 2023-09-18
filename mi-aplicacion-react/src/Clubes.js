import React from 'react';
import { Link, useParams } from 'react-router-dom';
import clubInfo from './clubInfo';

function Clubes() {
  const { clubName } = useParams();
  const club = clubInfo[clubName];

  return (
    <div className="outer-container">
      <div className="page-container">
        <h1>{club.titulo}</h1>
        <p>{club.descripcion}</p>
        <p>{club.historia}</p>
        <div className="club-info">
          <p>Estadio: {club.estadio.nombre}</p>
          <img src={club.estadio.imagen} alt={clubName} />
          <Link to="/Equipos">Volver a Equipos</Link>
        </div>
      </div>
    </div>
  );
}

export default Clubes;
