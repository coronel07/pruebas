import React, {useState} from "react";
import Solaris from "./Superclasico";
import './Juegos.css';


function Juegos() {
    const [juego, setJuego] = useState("solaris");

    let handleGame = (e)=>{
        setJuego(e.target.value);
    }

    return (
      <>
        <div className="barra" data-tooltip-id="tool1">
                <option value="solaris"></option>
            {juego === "solaris" && <Solaris/>}
        </div>
  
      </>
    );
}

export default Juegos;