import React from 'react';
import { Plus } from 'lucide-react';

const MenuSmall = ({ item, onCardClick }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
          {item.type}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-green-600 text-sm">
            {formatPrice(item.price)}
          </span>
          <button 
            onClick={() => onCardClick(item)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-1 transition-colors duration-200"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSmall;