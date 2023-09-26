import React from 'react';
import './Reglamentos.css';

function Reglamentos() {
  const reglamentos = [
    'Reglamento General', 'Reglamento Requisitos Mínimos y Control Económico Financiero',
    'Reglamento Organización, Desarrollo y Transmisión', 'Reglamento Torneos LPF 2023',
    'Reglamento Torneos LPF Proyección 2023', 'Reglamento Torneos Juveniles 2023',
    'Reglamento Torneos LPF 2022', 'Reglamento Torneos Juveniles LPF 2022',
    'Reglamento Torneos LPF 2021', 'Reglamento Copa Diego A. Maradona'
  ];

  // Objeto que asocia el nombre del reglamento con su URL de imagen
  const img = {
    'Reglamento General': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Requisitos Mínimos y Control Económico Financiero': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Organización, Desarrollo y Transmisión': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Torneos LPF 2023': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Torneos LPF Proyección 2023': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Torneos Juveniles 2023': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Torneos LPF 2022': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Torneos Juveniles LPF 2022': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Torneos LPF 2021': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
    'Reglamento Copa Diego A. Maradona': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/tapa-Reglamentos-scaled.jpg',
  };

  // Objeto que asocia el nombre del reglamento con su URL de documento PDF
  const pdfLinks = {
    'Reglamento General': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/Reglamento-General-LPF.pdf',
    'Reglamento Requisitos Mínimos y Control Económico Financiero': 'https://www.ligaprofesional.ar/wp-content/uploads/2023/01/Reglamento-Requisitos-Minimos-y-Control-Eco-Fin-LPF-2023.pdf',
    'Reglamento Organización, Desarrollo y Transmisión': 'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/Reglamento-ODT-2023.pdf',
    'Reglamento Torneos LPF 2023': 'https://www.ligaprofesional.ar/wp-content/uploads/2023/08/Reglamento-Torneos-LPF-2023.pdf',
    'Reglamento Torneos LPF Proyección 2023': 'https://www.ligaprofesional.ar/wp-content/uploads/2023/09/Reglamento-Torneos-LPF-Proyeccion-2023.pdf',
    'Reglamento Torneos Juveniles 2023': 'https://www.ligaprofesional.ar/wp-content/uploads/2023/03/Reglamento-Torneos-Juveniles-LPF_2023.pdf',
    'Reglamento Torneos LPF 2022': 'https://www.ligaprofesional.ar/wp-content/uploads/2022/03/Reglamento-Torneos-LPF-2022.pdf',
    'Reglamento Torneos Juveniles LPF 2022': 'https://www.ligaprofesional.ar/wp-content/uploads/2022/03/Reglamento-Torneos-Juveniles-LPF_2022.pdf',
    'Reglamento Torneos LPF 2021': 'https://www.ligaprofesional.ar/wp-content/uploads/2021/07/Reglamento-Torneos-LPF-2021.pdf',
    'Reglamento Copa Diego A. Maradona': 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/Reglamento-Copa-LPF-2020.pdf',
  };

  return (
    <div className="outer-container">
      <div className="page-container">
        <h1>Conocé los Reglamentos que integran la Liga Profesional de Fútbol</h1>
        <div className="reglamento-grid">
          {reglamentos.map((reglamento, index) => (
            <div key={index} className="reglamento-item">
              <a href={pdfLinks[reglamento]} target="_blank" rel="noopener noreferrer">
                <img src={img[reglamento]} alt={reglamento} />
              </a>
              <p className="reglamento-title">{reglamento}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reglamentos;
