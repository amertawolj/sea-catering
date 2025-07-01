import React from 'react';

const keyFeatures = () => {
  return ( 
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{color: '#41521F'}}>Meal Customization</h3>
                    <p className="leading-relaxed" style={{color: '#8A8A8A'}}>
                        Personalize your meals to match your dietary preferences, allergies, and portion sizes and protein types to specific plans like low-carb, high-protein.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{color: '#41521F'}}>Delivery to Major Cities</h3>
                    <p className="leading-relaxed" style={{color: '#8A8A8A'}}>
                        We deliver fresh, healthy meals to customers across major cities, ensuring quick and secure arrival right at your doorstep.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{color: '#41521F'}}>Detailed Nutritional Information</h3>
                    <p className="leading-relaxed" style={{color: '#8A8A8A'}}>
                        Each meal comes with complete nutritional breakdown, including track calories, macros, and daily intake goals with ease.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default keyFeatures