import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';
import "../styles/Header.css"// Créons ce fichier CSS

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo du site" className="logo" />
          </Link>
        </div>
       
        {/* Menu de navigation */}
        <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/tous-les-cers" className="nav-link">CERs</Link>
          </li>
          <li className="nav-item">
            <Link to="/favoris" className="nav-link">Mes CER favoris</Link>
          </li>
          <li className="nav-item">
            <Link to="/gestion-de-cer" className="nav-link">Gestion de CER</Link>
          </li>
        </ul>

        {/* Bouton de connexion */}
        <div className="auth-section">
          <button className="connexion-btn">
            <Link to="/connexion" className="connexion-link">Connexion</Link>
          </button>
        </div>

        {/* Menu burger pour mobile */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;