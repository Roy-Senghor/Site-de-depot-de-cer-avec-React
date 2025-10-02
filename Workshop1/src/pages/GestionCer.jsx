import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CERModal from "../components/CERModal";
import CERTable from "../components/CerTable";
import "../styles/Gstyles.css";


const GestionDeCER = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cerData, setCerData] = useState([
    {
      titre: "Prosit 3.2 - Annuaire Active Directory",
      specialite: "Réseaux et Infra; Sécurité",
      niveaux: "X3",
      date: "11/07/2024"
    },
    {
      titre: "Prosit 1.2 - Les réseaux LAN",
      specialite: "Réseaux et Infra; Sécurité",
      niveaux: "X1",
      date: "13/02/2024"
    },
    {
      titre: "Prosit 4.2 - Charte d'un projet",
      specialite: "Gestion de projet",
      niveaux: "X4",
      date: "01/07/2024"
    },
    {
      titre: "Prosit 4.2 - Base de données analytique",
      specialite: "Data",
      niveaux: "X3",
      date: "11/07/2024"
    },
    {
      titre: "Prosit 1.2 - IHM intuitives",
      specialite: "Génie-logiciel",
      niveaux: "X1",
      date: "11/07/2024"
    },
    {
      titre: "SAM Gestion des ressources humaines",
      specialite: "Gestion de projet",
      niveaux: "X5",
      date: "11/09/2024"
    },
    {
      titre: "Prosit 4.3 - Investigation numérique",
      specialite: "Sécurité",
      niveaux: "X3",
      date: "11/07/2024"
    }
  ]);

  const handleAddCER = (newCER) => {
    const nouveauCER = {
      titre: newCER.titre,
      specialite: newCER.domaines.join('; '),
      niveaux: newCER.niveaux === 'premier' ? 'X1' : 
               newCER.niveaux === 'deuxieme' ? 'X2' :
               newCER.niveaux === 'troisieme' ? 'X3' :
               newCER.niveaux === 'quatrieme' ? 'X4' : 'X5',
      date: new Date().toLocaleDateString('fr-FR')
    };
    
    setCerData(prev => [...prev, nouveauCER]);
  };

  const handleEditCER = (cer) => {
    // Logique pour éditer un CER
    console.log('Éditer:', cer);
    // Vous pouvez ouvrir un modal d'édition ici
  };

  const handleDeleteCER = (cer) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer "${cer.titre}" ?`)) {
      setCerData(prev => prev.filter(item => item.titre !== cer.titre));
    }
  };

  return (
    <>
      <Header />
      
      <main className='GestionDeCER'>
        <h1>Gestion de CER</h1>
        <br />
        
        <div className="gestion-container">
          <p>Filtrer:</p>
          <p>Tous</p>
          <button 
            id="btnOuvrir" 
            className="btn-ajouter"
            onClick={() => setIsModalOpen(true)}
          >
            Ajouter un CER
          </button>

          <CERModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddCER}
          />
        </div>

        <CERTable 
          cerData={cerData}
          onEdit={handleEditCER}
          onDelete={handleDeleteCER}
        />
      </main>

      <Footer />
    </>
  );
};

export default GestionDeCER;