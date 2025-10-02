import React from 'react';

const FilterSidebar = () => {
    // Les données de démonstration pour les filtres
    const niveaux = ['X1', 'X2', 'X3', 'X4', 'X5'];
    const domaines = ['Développement Web', 'Cybersécurité', 'Administration Système', 'Base de Données'];

    // .filter-sidebar (width: 250px)
    return (
        <aside className="filter-sidebar w-64 p-4 bg-white rounded-lg shadow-md flex-shrink-0">
            <h2 className="text-xl font-bold text-almost-black mb-6 border-b pb-2">
                Filtrer les CERs
            </h2>

            {/* Groupe de Filtres : Niveaux (.filter-group) */}
            <div className="filter-group mb-5">
                <h3 className="text-lg font-semibold text-almost-black mb-3">Niveaux</h3>
                {niveaux.map((niveau) => (
                    <label key={niveau} className="text-medium-gray text-sm flex items-center mb-2 cursor-pointer hover:text-almost-black">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary mr-3" />
                        {niveau}
                    </label>
                ))}
            </div>

            {/* Groupe de Filtres : Domaines */}
            <div className="filter-group mb-5">
                <h3 className="text-lg font-semibold text-almost-black mb-3">Domaines</h3>
                {domaines.map((domaine) => (
                    <label key={domaine} className="text-medium-gray text-sm flex items-center mb-2 cursor-pointer hover:text-almost-black">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary mr-3" />
                        {domaine}
                    </label>
                ))}
            </div>

            {/* Ajoutez ici d'autres groupes de filtres (ex: Auteur, Date, etc.) */}
            <button className="btn btn-primary btn-block text-white font-semibold mt-4">
                Appliquer
            </button>
        </aside>
    );
};

export default FilterSidebar;