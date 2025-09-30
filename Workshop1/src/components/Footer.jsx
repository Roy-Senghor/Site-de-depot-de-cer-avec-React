import React from "react";

function Footer() {
  return (
    <footer>
      <div className="foot-container">
        <div className="foot-column">
          <img src="./assets/Logo.png" alt="Archiva Logo" width="100" height="50" />
          <p><a href="mailto:info@archiva.com">info@archiva.com</a></p>
          <p><a href="tel:+237600000000">+237 600 000 000</a></p>
          <p><a href="#">Yassa, Douala/Cameroun</a></p>
        </div>

        <div className="foot-column">
          <h4>Accueil</h4>
          <p><a href="TousLesCer.html">CERs</a></p>
          <p><a href="#">Mes CER favoris</a></p>
          <p><a href="GestionDeCER.html">Gestion de CER</a></p>
        </div>

        <div className="foot-column">
          <h4>Social</h4>
          <img src="assets/Capture d'écran 2025-09-21 035629.png" alt="Facebook" width="90" height="15" />
        </div>
      </div>

      <div className="foot-bottom">
        <p>© 2024 Archiva. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
