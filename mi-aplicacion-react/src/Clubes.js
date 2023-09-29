import React from 'react';
import { Link, useParams } from 'react-router-dom';
import clubInfo from './clubInfo';

function Clubes() {
  const { clubName } = useParams();
  const club = clubInfo[clubName];

  return (
    <div style={styles.outerContainer}>
      <div style={styles.pageContainer}>
        <h1 style={styles.title}>{club.titulo}</h1>
        <p style={styles.description}>{club.descripcion}</p>
        <p>{club.historia}</p>
        <img src={club.estadio.imagen} alt={clubName} style={styles.image} />
        <div style={styles.clubInfo}>
          <h3>Estadio: {club.estadio.nombre}</h3>
        </div>
        <Link to="/Equipos" style={styles.link}>
          Volver a Equipos
        </Link>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#2c436f',

  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: '50px',
    borderRadius: '50px',
    boxShadow: '0 10px 50px #000',
    maxWidth: '900px',
    color: '#000000',
    textAlign: 'center',
    fontSize: '22px', 
  },
  title: {
    fontSize: '36px', 
    fontWeight: 'bold',
    marginBottom: '20px', 
  },
  description: {
    fontSize: '24px', 
    marginBottom: '20px',
  },
  clubInfo: {
    marginTop: '20px',
    fontSize: '20px', 
  },
  image: {
    maxWidth: 'auto',
    height: '300px',
    marginTop: '20px',
    borderRadius: '20px',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#2c436f',
    color: '#fff',
    boxShadow: '0 10px 100px #000',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Clubes;
