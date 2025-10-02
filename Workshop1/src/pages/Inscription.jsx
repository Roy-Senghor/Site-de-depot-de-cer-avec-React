import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Istles.css'; // Nous allons créer ce fichier
import Connexion from './Connexion';
import ImgInscription from "../assets/inscription.png"

const Inscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    niveaux: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique pour traiter l'inscription
    console.log('Données du formulaire:', formData);
    // Exemple: appel à une API, validation, etc.
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-box">
          <h1>Créer un compte</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom complet</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Votre nom" 
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Votre email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label htmlFor="niveaux">Niveau :</label>
            <select 
              id="niveaux" 
              name="niveaux" 
              value={formData.niveaux}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="X1">X1</option>
              <option value="X2">X2</option>
              <option value="X3">X3</option>
              <option value="X4">X4</option>
              <option value="X5">X5</option>
            </select>
            
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Votre mot de passe" 
              value={formData.password}
              onChange={handleChange}
              required 
            />

            <button type="submit">Créer un compte</button>

            <p className="login-link">
              Vous avez déjà un compte ? 
              <Link to="/connexion">Connectez-vous</Link>
            </p>
          </form>
        </div>
            <div className="image-container">
                 <img src={ImgInscription} alt="Inscription" className="Inscription image" />
            </div>

      </div>
    </div>
  );
};

export default Inscription;