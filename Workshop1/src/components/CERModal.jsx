import React, { useState } from 'react';

const CERModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    titre: '',
    niveaux: 'premier',
    domaines: [],
    description: '',
    fichier: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      domaines: checked 
        ? [...prev.domaines, name]
        : prev.domaines.filter(d => d !== name)
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      fichier: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    // Réinitialiser le formulaire
    setFormData({
      titre: '',
      niveaux: 'premier',
      domaines: [],
      description: '',
      fichier: null
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titre">Titre du CER</label><br />
            <input 
              type="text" 
              id="titre"
              name="titre"
              placeholder="Exemple: Prosit 4.3 - Recherche Operationnelle"
              value={formData.titre}
              onChange={handleInputChange}
              required
            /><br />
          </div>

          <div> 
            <label htmlFor="niveaux">Niveaux :</label><br />
            <select 
              id="niveaux" 
              name="niveaux" 
              value={formData.niveaux}
              onChange={handleInputChange}
              required
            >
              <option value="premier">X1</option>
              <option value="deuxieme">X2</option>
              <option value="troisieme">X3</option>
              <option value="quatrieme">X4</option>
              <option value="cinquieme">X5</option>
            </select>
          </div>

          <div>
            <p>Domaines de spécialité</p><br />
            {['Gestion', 'Genie', 'Reseaux', 'Securite', 'Data'].map((domaine) => (
              <div key={domaine}>
                <input 
                  type="checkbox" 
                  id={domaine} 
                  name={domaine} 
                  onChange={handleCheckboxChange}
                  checked={formData.domaines.includes(domaine)}
                />
                <label htmlFor={domaine}>
                  {domaine === 'Gestion' ? 'Gestion de projet' :
                   domaine === 'Genie' ? 'Génie-logiciel' :
                   domaine === 'Reseaux' ? 'Réseaux et Infra' :
                   domaine === 'Securite' ? 'Sécurité' : 'Data'}
                </label><br />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="description">Description du CER</label><br />
            <textarea 
              id="description"
              name="description"
              placeholder="Entrez ici la description ou résumé de votre CER"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
            /><br />  
          </div>

          <div>
            <label htmlFor="fichier">Ajouter le fichier du CER</label><br />
            <input 
              type="file" 
              id="fichier" 
              name="fichier"
              onChange={handleFileChange}
            /><br />
          </div>    

          <div>
            <button type="submit" className="btn-enregistrer">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CERModal;