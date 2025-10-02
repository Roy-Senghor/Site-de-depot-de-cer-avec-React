// Dans votre main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import GestionDeCER from './pages/GestionCer'; // Supprimez "../src/"
import './styles/styles.css';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import CerFavoris from './pages/CerFavoris';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gestion-de-cer" element={<GestionDeCER />} />
        <Route path="/Connexion" element={<Connexion />}/>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/favoris" element={<CerFavoris />} />
      </Routes>
    </Router>
  </React.StrictMode>
);