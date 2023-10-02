import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import clubInfo from './clubInfo';

function Clubes() {
  const { clubName } = useParams();
  const club = clubInfo[clubName];
  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVolverClick = () => {
    navigate(-1);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.pageContainer}>
        <h1>{club.titulo}</h1>
        <p>{club.descripcion}</p>
        <p>{club.historia}</p>
        <div style={styles.clubInfo}>
          <img src={club.estadio.imagen} alt={clubName} style={styles.image} />
          <h3>Estadio: {club.estadio.nombre}</h3>
          <button onClick={handleVolverClick} style={styles.link}>
            Volver a Equipos
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    padding: '105px',
    display: 'flex',
    height: '500px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c436f',
  },
  
  pageContainer: {
    backgroundColor: '#eee',
    padding: '50px',
    borderRadius: '50px',
    boxShadow: '0 10px 50px #000',
    textAlign: 'center',
    maxWidth: '600px',
    minHeight: 'auto', 
    color: '#000000',
    fontSize: '20px',
  },
  
  clubInfo: {
    marginTop: '10px',
  },
  
  image: {
    maxHeight: '250px',
    height: 'auto'
  },
  
  link: {
    textDecoration: 'none', 
    backgroundColor: '#2c436f',
    color: '#eee',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)', 
    padding: '12px 24px', 
    borderRadius: '5px',
    borderColor: 'transparent',
    fontWeight: 'bold', 
    fontSize: '20px',
    cursor: 'pointer',
  }
};  

export default Clubes;
