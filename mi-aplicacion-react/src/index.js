import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Reglamentos from "./navs/Reglamentos";
import Home from "./navs/Home";
import Clubes from "./navs/Clubes";
import "./index.css";
import Argentinos from "./equipos/Argentinos";
import Arsenal from "./equipos/Arsenal";
import AtléticoTucumán from "./equipos/AtléticoTucumán";
import Banfield from "./equipos/Banfield";
import BarracasCentral from "./equipos/BarracasCentral";
import Belgrano from "./equipos/Belgrano";
import Boca from "./equipos/Boca";
import CentralCórdoba from "./equipos/CentralCórdoba";
import Colón from "./equipos/Colón";
import DefensayJusticia from "./equipos/DefensayJusticia";
import Estudiantes from "./equipos/Estudiantes";
import Gimnasia from "./equipos/Gimnasia";
import GodoyCruz from "./equipos/GodoyCruz";
import Huracán from "./equipos/Huracán";
import Independiente from "./equipos/Independiente";
import Instituto from "./equipos/Instituto";
import Lanús from "./equipos/Lanús";
import Newells from "./equipos/Newells";
import Platense from "./equipos/Platense";
import Racing from "./equipos/Racing";
import River from "./equipos/River";
import RosarioCentral from "./equipos/RosarioCentral";
import SanLorenzo from "./equipos/SanLorenzo";
import Sarmiento from "./equipos/Sarmiento";
import Talleres from "./equipos/Talleres";
import Tigre from "./equipos/Tigre";
import Unión from "./equipos/Unión";
import Vélez from "./equipos/Vélez";
import Imagenes from "./navs/Imagenes";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Componente Navbar siempre se muestra */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Renderiza Home en la ruta raíz */}
          <Route path="/Reglamentos" element={<Reglamentos />} />{" "}
          {/* Renderiza Estadios en /Estadios */}
          <Route path="/Clubes" element={<Clubes />} />{" "}
          <Route path="/Imagenes" element={<Imagenes />} />{" "}
          {/* Renderiza Clubes en /Clubes */}
          <Route path="club/">
            <Route path="Argentinos" element={<Argentinos />} />
            <Route path="Arsenal" element={<Arsenal />} />
            <Route path="AtléticoTucumán" element={<AtléticoTucumán />} />
            <Route path="Banfield" element={<Banfield />} />
            <Route path="BarracasCentral" element={<BarracasCentral />} />
            <Route path="Belgrano" element={<Belgrano />} />
            <Route path="Boca" element={<Boca />} />
            <Route path="CentralCórdoba" element={<CentralCórdoba />} />
            <Route path="Colón" element={<Colón />} />
            <Route path="DefensayJusticia" element={<DefensayJusticia />} />
            <Route path="Estudiantes" element={<Estudiantes />} />
            <Route path="Gimnasia" element={<Gimnasia />} />
            <Route path="GodoyCruz" element={<GodoyCruz />} />
            <Route path="Huracán" element={<Huracán />} />
            <Route path="Independiente" element={<Independiente />} />
            <Route path="Instituto" element={<Instituto />} />
            <Route path="Lanús" element={<Lanús />} />
            <Route path="Newells" element={<Newells />} />
            <Route path="Platense" element={<Platense />} />
            <Route path="Racing" element={<Racing />} />
            <Route path="River" element={<River />} />
            <Route path="RosarioCentral" element={<RosarioCentral />} />
            <Route path="SanLorenzo" element={<SanLorenzo />} />
            <Route path="Sarmiento" element={<Sarmiento />} />
            <Route path="Talleres" element={<Talleres />} />
            <Route path="Tigre" element={<Tigre />} />
            <Route path="Unión" element={<Unión />} />
            <Route path="Vélez" element={<Vélez />} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
