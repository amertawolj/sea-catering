import React, { useState, useEffect } from 'react';
import DietPlan from '../components/DietPlan';
import ProteinPlan from '../components/ProteinPlan';
import RoyalPlan from '../components/RoyalPlan';
import MenuExpand from '../components/MenuExpand';
import supabase from '../helper/supabaseClient';
import GlutenFree from '../assets/images/gluten_free.jpg';
import Pescatarian from '../assets/images/pescatarian.jpg';
import Vegan from '../assets/images/vegan.jpg';

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetchMenuItems();
  }, []);

const fetchMenuItems = async () => {
  try {
    setLoading(true);

    const { data, error } = await supabase
      .from('product')
      .select('id, name_product, product_type, product_price, product_img, product_description, product_plan, product_nutrition, allergies, additional_info');

      console.log('Raw database data:', data);
    console.log('Unique product_plan values:', [...new Set(data.map(item => item.product_plan))]);

    if (error) {
    console.error('Supabase fetch error:', error.message);
    throw error;
    }

    const parseNutrition = (str) => {
      const numbers = str.match(/\d+/g);
      return {
        calories: parseInt(numbers[0]),
        protein: parseInt(numbers[1]),
        fat: parseInt(numbers[2]),
        carbs: parseInt(numbers[3]),
        fiber: numbers[4] ? parseInt(numbers[4]) : 0
      };
    };

    const parseAllergies = (str) => {
      return str === 'None' ? [] : str.split(',').map(s => s.trim());
    };

    const formattedData = data.map(item => ({
      id: item.id,
      name: item.name_product,
      type: item.product_type,
      price: item.product_price,
      image: item.product_img,
      description: item.product_description,
      category: item.product_plan,
      nutritionalInfo: parseNutrition(item.product_nutrition),
      allergens: parseAllergies(item.allergies)
    }));

    setMenuItems(formattedData);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching menu:', error);
    setLoading(false);
  }
};


  const parseNutrition = (str) => {
    const nutrition = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    };
    if (!str) return nutrition;

    str.split(',').forEach((entry) => {
      const [key, val] = entry.split(':').map(s => s.trim().toLowerCase());
      if (key.includes('calories')) nutrition.calories = parseInt(val);
      if (key.includes('protein')) nutrition.protein = parseInt(val);
      if (key.includes('carbs')) nutrition.carbs = parseInt(val);
      if (key.includes('fat')) nutrition.fat = parseInt(val);
      if (key.includes('fiber')) nutrition.fiber = parseInt(val);
    });

    return nutrition;
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
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
     <div className="py-16 bg-[#FBED70]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#41521F]">
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

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find What Fit You The Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img src={GlutenFree} alt="Gluten Free" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <h3 className="text-white text-xl font-bold p-6">Gluten Free</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img src={Pescatarian} alt="Pescatarian" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <h3 className="text-white text-xl font-bold p-6">Pescatarian</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img src={Vegan} alt="Vegetarian" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <h3 className="text-white text-xl font-bold p-6">Vegetarian</h3>
              </div>
            </div>
          </div>
        </div>

        <DietPlan items={menuItems} onCardClick={handleCardClick} />
        <ProteinPlan items={menuItems} onCardClick={handleCardClick} />
        <RoyalPlan items={menuItems} onCardClick={handleCardClick} />
      </div>

      {selectedItem && (
        <MenuExpand
          item={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MenuPage;
