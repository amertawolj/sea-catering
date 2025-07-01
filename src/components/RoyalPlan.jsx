import React from 'react';
import MenuSmall from './MenuSmall';

const RoyalPlan = ({ items, onCardClick }) => {
  const royalPlanItems = items.filter(item => item.category === 'royal');

  return ( 
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Royal Plan</h2>
        <p className="text-gray-600">Our premium package with the finest ingredients and complete portions — delicious and nutritionally rich.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {royalPlanItems.map((item) => (
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

export default RoyalPlan;
