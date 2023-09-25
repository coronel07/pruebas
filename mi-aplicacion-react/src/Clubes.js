import React from 'react';
import { Link, useParams } from 'react-router-dom';
import clubInfo from './clubInfo';

function Clubes() {
  const { clubName } = useParams();
  const club = clubInfo[clubName];

  return (
    <div style={styles.outerContainer}>
      <div style={styles.pageContainer}>
        <h1>{club.titulo}</h1>
        <p>{club.descripcion}</p>
        <p>{club.historia}</p>
        <div style={styles.clubInfo}>
          <p>Estadio: {club.estadio.nombre}</p>
          <img src={club.estadio.imagen} alt={clubName} style={styles.image} />
          <Link to="/Equipos" style={styles.link}>
            Volver a Equipos
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0e3f9d',
  },
  pageContainer: {
    backgroundColor: '#1458DC',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '600px',
    color: '#000000',
  },
  clubInfo: {
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Clubes;
