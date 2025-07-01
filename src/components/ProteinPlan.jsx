import React from 'react';
import MenuSmall from './MenuSmall';

const ProteinPlan = ({ items, onCardClick }) => {
  const proteinPlanItems = items.filter(item => item.category === 'Protein Plan');

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Protein Plan</h2>
        <p className="text-gray-600">High-protein meals made with quality ingredients — ideal for muscle maintenance and daily energy.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {proteinPlanItems.map((item) => (
          <MenuSmall 
            key={item.id} 
            item={item} 
            onCardClick={onCardClick}
          />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
          See Menu
        </button>
      </div>
    </div>
  );
};

export default ProteinPlan;