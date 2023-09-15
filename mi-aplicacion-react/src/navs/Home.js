import React from "react";
import "./Home.css"; // Importa el archivo de estilos CSS

function Home() {
  return (
    <div>
      <div className="banner">
        {/* Aquí puedes agregar imágenes, texto y otros elementos para el banner */}
        
      </div>

      <div className="content">
        <h1>Bienvenido a la Página de Inicio de la Liga Argentina</h1>
        <p>
          La Liga Argentina es una de las ligas de fútbol más emocionantes y
          competitivas del mundo. Fundada el 21 de febrero de 1893, la Asociación del Fútbol Argentino (AFA) es el órgano rector del fútbol en Argentina. Desde entonces, ha sido el epicentro de pasión y emoción para los fanáticos del fútbol en Argentina y en todo el mundo.
        </p>
        <p>
          La AFA ha sido el hogar de innumerables talentos y equipos legendarios, y ha producido algunos de los momentos más memorables en la historia del fútbol. En nuestra página, encontrarás información detallada sobre la AFA, sus clubes afiliados, jugadores destacados, estadísticas y más.
        </p>
        <p>
          ¡Explora nuestro sitio para mantenerte actualizado sobre lo que está
          sucediendo en el mundo del fútbol argentino!
        </p>
      </div>
    </div>
  );
}

export default Home;
