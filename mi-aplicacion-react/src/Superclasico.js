import { useState } from 'react';
import "./Superclasico.css"
import { Tooltip as ReactTooltip } from "react-tooltip";



function Solaris() {

  const [mostrarTuto, setMostrarTuto] = useState(false);

  function reset() {
    const iframe = document.getElementById('miIframe');
    iframe.src = iframe.src;
    console.log(iframe.src)
  }

  const toggleInfo = () => {
    setMostrarTuto(!mostrarTuto);
  };

  return (
    <>
      <div className="main-container">
        <div className="containerGame">
          <h1 className="titulo-juego" data-tooltip-id="tool2" >Superclasico</h1>
          <div>
            <h4>Bienvenido al mejor juego del mundo basado en el juego de los cabezones</h4>
            <p>En 'Superclasico', te sumergirás en el emocionante mundo del futbol profecional argentino y en el mejor clasico del mundo por lejos de otros.</p>
            <h5>Para jugar tenes que pulsar el juego con el click derecho del mouse</h5>
          </div>
          <button id="resetButton" onClick={toggleInfo}>
            Como jugar
          </button>
          {mostrarTuto && (
            <div id="tuto-text">
              <div class="cuadro-amarillo">
                <img className="control" src="https://mail.google.com/mail/u/0?ui=2&ik=73e40d6e34&attid=0.1&permmsgid=msg-f:1778291616378279955&th=18adc2cda5485813&view=att&disp=safe&realattid=f_ln39ramu0"></img>
              </div>
            </div>
          )}
          <br></br>
          <div id="iframeContainer">
            <iframe id="miIframe" src="/galaga/index.html"></iframe>
          </div>
          <button id="resetButton" onClick={reset}>Reset</button>
        </div>
      </div>
      
    </>
  );
}

export default Solaris;