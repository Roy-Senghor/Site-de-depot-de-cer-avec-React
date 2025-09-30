import React from "react";



function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src="./assets/Logo.png" alt="Archiva Logo" />
        </div>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="TousLesCer.html">CERs</a></li>
          <li><a href="Favoris.html">Mes CER favoris</a></li>
          <li><a href="GestionDeCER.html">Gestion de CER</a></li>
        </ul>
        <button className="connexion">
          <a href="Connexion.html">Connexion</a>
        </button>
      </nav>
    </header>
  );
}

export default Header;
