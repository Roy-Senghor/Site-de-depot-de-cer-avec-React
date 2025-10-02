import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Fstyles.css";
import activeDirect from "../assets/ActiveDirect.jpg";
import architecture from "../assets/Architecture.jpg";
import uml from "../assets/Uml.png";
import devWeb from "../assets/DevWeb.jpg";



// Données des CER favoris (vous pouvez les récupérer depuis un state ou API)
const cerFavoris = [
  {
    id: 1,
    image: activeDirect,
    auteur: "Sadjo Mamadou",
    titre: "Prosit 3.2 Annuaire Active Directory",
    description: "L'Annuaire Active Directory (AD) est un service de gestion des identités et des accès utilisé principalement dans les environnements Windows. Il permet de...."
  },
  {
    id: 2,
    image: "uml",
    auteur: "Pauline lock",
    titre: "Prosit 2.2 Modélisation UML",
    description: "Le Langage de Modélisation Unifié, de l'anglais Unified Modeling Language, est un langage de modélisation graphique à base de pictogrammes conçu comme..."
  },
  {
    id: 3,
    image:devWeb,
    auteur: "Providence Djekoun",
    titre: "Prosit 4.1 Développement avancé",
    description: "Advance Web Development fait référence au processus de création de sites Web dynamiques et interactifs qui vont au-delà des pages Web statique...."
  }
];

function Favoris() {
  return (
    <div className="favoris-page">
      <Header />
      
      <main className="favoris-main">
        <h1 className="favoris-title">Mes CER favoris</h1>
        
        <div className="favoris-container">
          {cerFavoris.map((cer) => (
            <div key={cer.id} className="favoris-card">
              <img src={cer.image} alt={cer.titre} className="favoris-image" />
              <p className="favoris-auteur">par {cer.auteur}</p>
              <h3 className="favoris-titre">{cer.titre}</h3>
              <p className="favoris-description">{cer.description}</p>
              <button className="favoris-consulter">Consulter le CER</button>
            </div>
          ))}
        </div>

        {/* Message si aucun favori */}
        {cerFavoris.length === 0 && (
          <div className="favoris-vide">
            <p>Vous n'avez aucun CER dans vos favoris</p>
            <Link to="/tous-les-cers" className="btn-decouvrir">
              Découvrir les CERs
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Favoris;