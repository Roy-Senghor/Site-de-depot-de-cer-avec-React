import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImgConnexion from "../assets/connexion.png"
import "../styles/Cstyles.css";

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur quand l'utilisateur tape
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulation d'appel API
      // En production, remplacez par votre vraie API
      const response = await fakeLoginAPI(formData);
      
      if (response.success) {
        // Stocker le token ou les infos utilisateur
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        // Redirection vers la page d'accueil
        navigate('/');
      } else {
        setError(response.message || 'Erreur de connexion');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  // Fonction simulée pour l'API de connexion
  const fakeLoginAPI = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulation de vérification
        if (data.email === 'test@example.com' && data.password === 'password') {
          resolve({
            success: true,
            token: 'fake-jwt-token',
            user: {
              id: 1,
              name: 'John Doe',
              email: data.email
            }
          });
        } else {
          resolve({
            success: false,
            message: 'Email ou mot de passe incorrect'
          });
        }
      }, 1000);
    });
  };

  return (
    <>
 
      
      <div className="connexion-page">
        <div className="register-container">
          <div className="register-box">
            <h1>Se connecter</h1>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Votre email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Votre mot de passe" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                  disabled={loading}
                />
              </div>

              <button 
                type="submit" 
                className="btn-connexion"
                disabled={loading}
              >
                {loading ? 'Connexion...' : 'Se connecter'}
              </button>

              <p className="login-link">
                Vous n'avez pas de compte ? 
                <Link to="/inscription">Créez un nouveau compte</Link>
              </p>

              <div className="forgot-password">
                <Link to="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
              </div>
            </form>
          </div>
                 <div className="image-container">
           <img src={ImgConnexion} alt="Connexion" className="Connexion image" />
        </div>
        </div>
        
 
      </div>

  
    </>
  );
};

export default Connexion;