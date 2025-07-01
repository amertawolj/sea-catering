import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../helper/supabaseClient';

const SubscriptionForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    planSelection: '',
    mealTypes: [],
    deliveryDays: [],
    allergies: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const planOptions = [
    { id: 'diet', name: 'Diet Plan', price: 30000 },
    { id: 'protein', name: 'Protein Plan', price: 40000 },
    { id: 'royal', name: 'Royal Plan', price: 60000 }
  ];

  const mealTypeOptions = [
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' }
  ];

  const dayOptions = [
    { id: 'monday', name: 'Monday' },
    { id: 'tuesday', name: 'Tuesday' },
    { id: 'wednesday', name: 'Wednesday' },
    { id: 'thursday', name: 'Thursday' },
    { id: 'friday', name: 'Friday' },
    { id: 'saturday', name: 'Saturday' },
    { id: 'sunday', name: 'Sunday' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const calculateTotal = () => {
    const selectedPlan = planOptions.find(plan => plan.id === formData.planSelection);
    if (!selectedPlan) return 0;
    
    const mealsPerDay = formData.mealTypes.length;
    const daysSelected = formData.deliveryDays.length;
    return selectedPlan.price * mealsPerDay * daysSelected * 4.3;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2
    }).format(amount);
  };

    
const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.phone ||
    !formData.planSelection ||
    formData.mealTypes.length === 0 ||
    formData.deliveryDays.length === 0
  ) {
    alert('Please fill in all required fields');
    return;
  }

  try {
    setLoading(true);

    const subscriptionData = {
      username: formData.name,
      phone_number: formData.phone,
      plan_selection: formData.planSelection,
      meal_type: formData.mealTypes.join(','), // format ke string
      delivery_type: formData.deliveryDays.join(','), // format ke string
      allergies: formData.allergies || null // jika kosong kirim null
    };

    const { data, error } = await supabase
      .from('subscription')
      .insert([subscriptionData]);
      navigate('/pay', { state: { total: calculateTotal() } });

    if (error) {
      console.error('Supabase insert error:', error.message);
      throw error;
    }

    console.log('Subscription created:', data);
    setSubmitted(true);

    setFormData({
      name: '',
      phone: '',
      planSelection: '',
      mealTypes: [],
      deliveryDays: [],
      allergies: ''
    });

  } catch (error) {
    console.error('Error creating subscription:', error);
    alert('Failed to create subscription. Please try again.');
  } finally {
    setLoading(false);
  }
};


  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FBED70] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscription Created!</h2>
          <p className="text-gray-600 mb-6">Thank you for subscribing to SEA Catering. We'll contact you soon with payment details.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-[#41521F] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Create Another Subscription
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBED70]">
      <div className="py-16 bg-[#FBED70]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#41521F]">
            Made for You — But First, Tell Us About You
          </h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-blue-100 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Active Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Plan Selection*
                  </label>
                  <div className="space-y-2">
                    {planOptions.map(plan => (
                      <label key={plan.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="planSelection"
                          value={plan.id}
                          checked={formData.planSelection === plan.id}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                          required
                        />
                        <span className="text-gray-700">
                          {plan.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Meal Type* (Select at least one)
                  </label>
                  <div className="space-y-2">
                    {mealTypeOptions.map(meal => (
                      <label key={meal.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          value={meal.id}
                          checked={formData.mealTypes.includes(meal.id)}
                          onChange={(e) => handleCheckboxChange(e, 'mealTypes')}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-gray-700">{meal.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Delivery Days*
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {dayOptions.map(day => (
                      <label key={day.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          value={day.id}
                          checked={formData.deliveryDays.includes(day.id)}
                          onChange={(e) => handleCheckboxChange(e, 'deliveryDays')}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-gray-700">{day.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Allergies
                  </label>
                  <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    placeholder="Please list any allergies or dietary restrictions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="3"
                  />
                </div>
              </form>
            </div>
              <div className="bg-white rounded-lg p-3 h-[200px]">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Total:</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">
                  {formatCurrency(calculateTotal())}
                </p>
                
                <button
                  type="submit"
                  form="subscription-form"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#41521F] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;