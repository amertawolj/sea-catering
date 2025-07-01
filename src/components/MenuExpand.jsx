import React from 'react';
import { X } from 'lucide-react';

const MenuExpand = ({ item, onClose, onAddToCart, onAddToFavorites }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors duration-200"
          >
            <X size={20} />
          </button>
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
            {item.type}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-2xl font-bold text-green-600">
                {formatPrice(item.price)}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-3">Nutritional Info (per serving)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Calories:</span>
                  <span className="font-medium">{item.nutritionalInfo.calories} kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Protein:</span>
                  <span className="font-medium">{item.nutritionalInfo.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbs:</span>
                  <span className="font-medium">{item.nutritionalInfo.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fat:</span>
                  <span className="font-medium">{item.nutritionalInfo.fat}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fiber:</span>
                  <span className="font-medium">{item.nutritionalInfo.fiber}g</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-3">Contains Allergens</h3>
              <div className="space-y-1">
                {item.allergens && item.allergens.map((allergen, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                    <span className="text-gray-600">{allergen}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExpand;