import React from "react";
import "./Home.css"; // Importa el archivo de estilos CSS

function Home() {
  return (
    <div>
      <div className="banner">
        {/* Contenido del banner (puedes agregar imágenes, texto, etc.) */}
      </div>

      <div className="content">
        <h1>Bienvenido a la Página de Inicio de la Liga Argentina</h1>
        <p>
          La Liga Argentina es una de las ligas de fútbol más emocionantes y
          competitivas del mundo. Aquí encontrarás información sobre tus equipos
          y jugadores favoritos, estadísticas, noticias y mucho más.
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
