// pages/MenuPage.jsx
import React, { useState, useEffect } from 'react';
import DietPlan from '../components/DietPlan';
import ProteinPlan from '../components/ProteinPlan';
import RoyalPlan from '../components/RoyalPlan';
import BigCard from '../components/MenuExpand';
import supabase from '../helper/supabaseClient';

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data - replace with Supabase fetch
  const sampleData = [
    {
      id: 1,
      name: 'Nasi Goreng',
      type: 'Lunch',
      price: 30000,
      image: '/api/placeholder/300/200',
      description: 'A hearty portion of our classic Indonesian fried rice — stir-fried with garlic, vegetables, and your choice of protein (chicken, tofu, or shrimp). Balanced, flavorful, and satisfying.',
      nutritionalInfo: {
        calories: 520,
        protein: 25,
        carbs: 55,
        fat: 20,
        fiber: 5
      },
      allergens: ['Egg', 'Soy (in sauce)'],
      category: 'Diet Plan'
    },
    {
      id: 2,
      name: 'Breakfast Nasi Uduk',
      type: 'Breakfast',
      price: 23100,
      image: '/api/placeholder/300/200',
      description: 'Traditional Indonesian coconut rice served with fried chicken, sambal, and fresh vegetables. A perfect start to your day.',
      nutritionalInfo: {
        calories: 480,
        protein: 22,
        carbs: 48,
        fat: 18,
        fiber: 4
      },
      allergens: ['Egg', 'Soy'],
      category: 'Protein Plan'
    },
    {
      id: 3,
      name: 'Royal Beef Rendang',
      type: 'Lunch',
      price: 45000,
      image: '/api/placeholder/300/200',
      description: 'Premium slow-cooked beef rendang with authentic spices, served with jasmine rice and traditional accompaniments.',
      nutritionalInfo: {
        calories: 680,
        protein: 35,
        carbs: 45,
        fat: 28,
        fiber: 6
      },
      allergens: ['Coconut', 'Soy'],
      category: 'Royal Plan'
    }
  ];

  useEffect(() => {
    // Replace this with actual Supabase fetch
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      
      // Supabase fetch example:
      // const { data, error } = await supabase
      //   .from('menu_items')
      //   .select('*');
      
      // if (error) throw error;
      // setMenuItems(data);
      
      // For now, using sample data
      setMenuItems(sampleData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      setLoading(false);
    }
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = async (item) => {
    try {
      // Add to cart logic here
      // Example Supabase insert:
      // const { error } = await supabase
      //   .from('cart_items')
      //   .insert([{ menu_item_id: item.id, quantity: 1, user_id: userId }]);
      
      console.log('Added to cart:', item);
      alert(`${item.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleAddToFavorites = async (item) => {
    try {
      // Add to favorites logic here
      // Example Supabase insert:
      // const { error } = await supabase
      //   .from('favorites')
      //   .insert([{ menu_item_id: item.id, user_id: userId }]);
      
      console.log('Added to favorites:', item);
      alert(`${item.name} added to favorites!`);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-yellow-400 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What Would You Like To Eat?
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Type Here, e.g: Vegan Protein Yummy Yum"
                className="w-full px-6 py-4 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="absolute right-2 top-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors duration-200">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Diet Category Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find What Fit You The Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img src="/api/placeholder/400/300" alt="Gluten Free" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <h3 className="text-white text-xl font-bold p-6">Gluten Free</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img src="/api/placeholder/400/300" alt="Pescatarian" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <h3 className="text-white text-xl font-bold p-6">Pescatarian</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img src="/api/placeholder/400/300" alt="Vegetarian" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <h3 className="text-white text-xl font-bold p-6">Vegetarian</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Plans */}
        <DietPlan items={menuItems} onCardClick={handleCardClick} />
        <ProteinPlan items={menuItems} onCardClick={handleCardClick} />
        <RoyalPlan items={menuItems} onCardClick={handleCardClick} />
      </div>

      {/* Big Card Modal */}
      {selectedItem && (
        <BigCard
          item={selectedItem}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
          onAddToFavorites={handleAddToFavorites}
        />
      )}
    </div>
  );
};

export default MenuPage;