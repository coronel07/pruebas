import { useState } from "react";
import "./Superclasico.css";

function Solaris() {
  const [mostrarTuto, setMostrarTuto] = useState(false);

  function reset() {
    const iframe = document.getElementById("miIframe");
    iframe.src = iframe.src;
    console.log(iframe.src);
  }

  const toggleInfo = () => {
    setMostrarTuto(!mostrarTuto);
  };

  return (
    <>
      <div className="main-container">
        <div className="containerGame">
          <h1 className="titulo-juego" data-tooltip-id="tool2">
            Superclasico
          </h1>
          <div class="image-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Boca_escudo.png"
              class="img1"
              alt="Boca Juniors"
            ></img>
            <h3>VS</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Escudo_del_Club_Atl%C3%A9tico_River_Plate_%281998-2006%29.svg"
              class="img2"
              alt="River Plate"
            ></img>
          </div>

          <div>
            <h4>
              Bienvenido al mejor juego del mundo basado en el juego de los
              cabezones
            </h4>
            <p>
              En el 'Superclasico', te sumergirás en el emocionante mundo del
              futbol profecional argentino y en el mejor clasico del mundo por
              lejos de otros.
            </p>
            <h5>
              Para jugar tenes que pulsar el juego con el click derecho del
              mouse
            </h5>
          </div>
          <button id="resetButton" onClick={toggleInfo}>
            Como jugar
          </button>
          {mostrarTuto && (
            <div id="tuto-text">
              <div class="cuadro-amarillo">
                <img
                  className="control"
                  src="https://i.ibb.co/PYDTBrp/comojugar.png"
                ></img>
              </div>
            </div>
          )}
          <br></br>
          <div id="iframeContainer">
            <iframe id="miIframe" src="/galaga/index.html"></iframe>
          </div>
          <button id="resetButton" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Solaris;
