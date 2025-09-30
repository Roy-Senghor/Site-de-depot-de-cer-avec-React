import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrositCard from "./components/PrositCard";
import "./styles/styles.css";

function App() {
  const prosits = [
    {
      image: "assets/ActiveDirect.jpg",
      auteur: "Sadjo Mamadou",
      titre: "Prosit 3.2 Annuaire Active Directory",
      description: "L'Annuaire Active Directory (AD) est un service de gestion des identités et des accès utilisé principalement dans les environnements Windows. Il permet de...."
    },
    {
      image: "assets/Uml.png",
      auteur: "Pauline lock",
      titre: "Prosit 2.2 Modélisation UML",
      description: "Le Langage de Modélisation Unifié, de l'anglais Unified Modeling Language, est un langage de modélisation graphique à base de pictogrammes conçu comme..."
    },
    {
      image: "assets/DevWeb.jpg",
      auteur: "Providence Djekoun",
      titre: "Prosit 4.1 Développement avancé",
      description: "Advance Web Development fait référence au processus de création de sites Web dynamiques et interactifs qui vont au-delà des pages Web statique...."
    },
    {
      image: "assets/API .jpg",
      auteur: "Daryl Noupik",
      titre: "Prosit 3.3 API et Webservice",
      description: "Les API sont principalement axées sur la communication entre applications pour l'accès aux fonctionnalités. L'EDI se concentre sur l'échange de documents..."
    },
    {
      image: "assets/Microservice.png",
      auteur: "Providence Djekoun",
      titre: "Prosit 4.5 Architecture microservices",
      description: "Une architecture de microservices est un type d'architecture d'application dans laquelle l'application est développée sous la forme de services...."
    },
    {
      image: "assets/Architecture.jpg",
      auteur: "Sadjo Mamadou",
      titre: "Prosit 4.5 Architecture distribuée",
      description: "L'architecture distribuée ou l'informatique distribuée désigne un système d'information ou un réseau pour lequel l'ensemble des ressources disponibles ne se trouvent..."
    }
  ];

  return (
    <>
      <Header />

      <main>
        <div className="Barre-de-recherche">
          <input type="text" placeholder="Rechercher un CER" />
        </div>

        <h1>Bienvenue sur Archiva, votre espace</h1>
        <h2>Espace d'archivage d'ancien CERs</h2>
        <h4>L'homme n'est rien sans son bord</h4>

        <div className="button-container">
          <button className="Explorer"><a href="GestionDeCER.html">Explorer plus de CER</a></button>
          <button className="TousLesCer"><a href="TousLesCer.html">Tous les CERs</a></button>
        </div>

        <h1>Les meilleurs CERs du moment</h1>
        <p>
          Découvreez ci-dessous les CERs les plus appreciés par notre communauté d'utilisateurs.<br />
          Ces CERs ont été sélectionnés et évalué par nos membres en fonction de leur qualité et utilité.
        </p>

        <div className="prosit-container">
          {prosits.map((p, index) => (
            <PrositCard 
              key={index}
              image={p.image}
              auteur={p.auteur}
              titre={p.titre}
              description={p.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
