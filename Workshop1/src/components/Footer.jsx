import React from "react";
import logo from "../assets/Logo.png";
import social from "../assets/Capture d'écran 2025-09-21 035629.png";


function Footer() {
  return (
    <footer>
      <div className="foot-container text-center">
        <div className="foot-column">
          <img src={logo} alt="Logo du site" className="footer-logo" width="90" height="30" />
          <p><a href="mailto:info@archiva.com">info@archiva.com</a></p>
          <p><a href="tel:+237600000000">+237 600 000 000</a></p>
          <p><a href="#">Yansoki, Douala/Cameroun</a></p>
        </div>

        <div className="foot-column">
          <h4>Accueil</h4>
          <p><a href="TousLesCer.html">CERs</a></p>
          <p><a href="#">Mes CER favoris</a></p>
          <p><a href="GestionDeCER.html">Gestion de CER</a></p>
        </div>

        <div className="foot-column">
          <h4>Social</h4>
          <img src={social} alt="Logo du site" className="footer-logo" width="90" height="30" />
        </div>
      </div>

      <div className="foot-bottom text-center">
        <p>© 2025 Archiva. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
