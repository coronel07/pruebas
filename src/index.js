import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Estadios from './navs/Estadios';
import Home from './navs/Home';
import Clubes from './navs/Clubes';
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Componente Navbar siempre se muestra */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Renderiza Home en la ruta raíz */}
          <Route path="/Estadios" element={<Estadios />} /> {/* Renderiza Estadios en /Estadios */}
          <Route path="/Clubes" element={<Clubes />} /> {/* Renderiza Clubes en /Clubes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
