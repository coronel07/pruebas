import React from 'react';
import { Link } from 'react-router-dom';
import './Clubes.css';

function Clubes() {
  const clubes = [
    'Argentinos', 'Arsenal', 'Atlético Tucumán', 'Banfield',
    'Barracas Central', 'Belgrano', 'Boca', 'Central Córdoba',
    'Colón', 'Defensa y Justicia', 'Estudiantes', 'Gimnasia',
    'Godoy Cruz', 'Huracán', 'Independiente', 'Instituto',
    'Lanús', 'Newell’s', 'Platense', 'Racing', 'River',
    'Rosario Central', 'San Lorenzo', 'Sarmiento', 'Talleres', 'Tigre', 'Unión', 'Vélez'
  ];

  // Objeto que asocia el nombre del club con su URL de imagen
  const clubImages = {
    Argentinos: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/ARG-cuadrado.png',
    Arsenal: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/ARS-cuadrado.png',
    'Atlético Tucumán': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/ATU-cuadrado.png',
    Banfield: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/BAN-cuadrado.png',
    'Barracas Central': 'https://www.ligaprofesional.ar/wp-content/uploads/2022/01/BAR-cuadrado.jpg',
    Belgrano: 'https://www.ligaprofesional.ar/wp-content/uploads/2022/12/belgrano-03-1.jpg',
    Boca: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/BOC-cuadrado.png',
    'Central Córdoba': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/CCO-cuadrado.png',
    Colón: 'https://www.ligaprofesional.ar/wp-content/uploads/2022/06/Colon-web.png',
    'Defensa y Justicia': 'https://www.ligaprofesional.ar/wp-content/uploads/2022/06/Defensa-Web.png',
    Estudiantes: 'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/PortadaEstudiantesOK.jpg',
    Gimnasia: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/GIM-cuadrado.png',
    'Godoy Cruz': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/GOD-cuadrado.png',
    Huracán: 'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/PortadaHuracanOK.jpg',
    Independiente: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/IND-cuadrado.png',
    Instituto: 'https://www.ligaprofesional.ar/wp-content/uploads/2022/12/instituto-01-1.jpg',
    Lanús: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/LAN-cuadrado.png',
    'Newell’s': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/NOB-cuadrado.png',
    Platense: 'https://www.ligaprofesional.ar/wp-content/uploads/2021/02/PLA-cuadrado.png',
    Racing: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/RAC-cuadrado.png',
    River: 'https://www.ligaprofesional.ar/wp-content/uploads/2022/03/RIV-cuadrado.jpg',
    'Rosario Central': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/RC-cuadrado.png',
    'San Lorenzo': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/SLO-cuadrado.png',
    Sarmiento: 'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/PortadaSarmientoOK.jpg',
    Talleres: 'https://www.ligaprofesional.ar/wp-content/uploads/2022/06/Talleres-Web.png',
    Tigre: 'https://www.ligaprofesional.ar/wp-content/uploads/2022/01/TIG-cuadrado.jpg',
    Unión: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/UNI-cuadrado.png',
    Vélez: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/VEL-cuadrado.png',
  };
  

  return (
    <div className="outer-container">
      <div className="page-container">
        <h1>Conocé los clubes que integran la Liga Profesional de Fútbol</h1>
        <div className="club-grid">
          {clubes.map((club, index) => (
            <div key={index} className="club-item">
              <img src={clubImages[club]} alt={club} />
              <Link to={`/clubes/${club}`}>{club}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clubes;
