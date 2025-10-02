import React from 'react';

const CERTable = ({ cerData, onEdit, onDelete }) => {
  return (
    <table className="cer-table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Spécialité</th>
          <th>Niveaux</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cerData.map((cer, index) => (
          <tr key={index}>
            <td>{cer.titre}</td>
            <td>{cer.specialite}</td>
            <td>{cer.niveaux}</td>
            <td>{cer.date}</td>
            <td>
              <button 
                className="btn-edit" 
                onClick={() => onEdit(cer)}
              >
                Éditer
              </button>
              <button 
                className="btn-delete" 
                onClick={() => onDelete(cer)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CERTable;