import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Reglamentos from "./navs/Reglamentos";
import Home from "./navs/Home";
import Equipos from "./navs/Equipos";
import "./index.css";
import Clubes from "./Clubes"; // Importa Clubes en lugar de importar club individualmente


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reglamentos" element={<Reglamentos />} />
          <Route path="/Equipos" element={<Equipos />} />
          <Route path="club/:clubName" element={<Clubes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
