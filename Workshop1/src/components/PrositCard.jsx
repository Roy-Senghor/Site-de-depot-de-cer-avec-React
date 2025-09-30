import React from "react";

function PrositCard({ image, auteur, titre, description }) {
  return (
    <div className="prosit">
      <img src={image} alt={titre} />
      <p>par {auteur}</p>
      <h3>{titre}</h3>
      <p>{description}</p>
      <button className="Consulter">Consulter le CER</button>
    </div>
  );
}

export default PrositCard;
