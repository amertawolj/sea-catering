import React from 'react';
import CornDog from '../assets/images/CornDog.png';
import Cust from '../assets/images/Cust.png';

const About = () => {
  return ( 
    <div className="py-20 bg-gray-50 space-y-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6" style={{color: '#41521F'}}>
                Healthy Meals, Anytime, Anywhere
                </h2>
                <p className="text-lg leading-relaxed" style={{color: '#8A8A8A'}}>
                At SEA Catering, we believe that healthy eating should be simple, delicious, and accessible. Whether you're in Jakarta, Bali, or anywhere across Indonesia, we deliver fresh, customizable meals right to your doorstep — tailored to your taste, lifestyle, and nutritional goals.
                </p>
            </div>
            <div className="flex-1">
                <img 
                src={CornDog} 
                alt="Anjing Makan Jagung" 
                className="rounded-lg shadow-lg w-full max-w-[400px] mx-auto md:mx-0"
                />
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6" style={{color: '#41521F'}}>
                Thousands trust SEA Catering for their daily nutrition
                </h2>
                <p className="text-lg leading-relaxed" style={{color: '#8A8A8A'}}>
                With over 15,000 happy customers in 20+ major cities in Indonesia, SEA Catering makes healthy eating easy and accessible. Whether you're on a diet, chasing fitness goals, or just want wholesome meals delivered — we've got you covered.
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1">
                    <img 
                    src={Cust}
                    alt="Customer Setia" 
                    className="rounded-lg shadow-lg w-full max-w-[400px] mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default About