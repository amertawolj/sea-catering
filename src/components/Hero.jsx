import React from 'react';
import heroImage from '../assets/images/hero-image.png';

const Hero = () => {
  return ( 
    <div className="py-20" style={{ backgroundColor: '#FBED70' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img 
            src={heroImage} 
            alt="Healthy meal bowl"
            className="object-cover w-full max-w-[400px] md:max-w-[500px] mx-auto md:rounded-full md:w-[500px] md:h-[500px] shadow-2xl"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#41521F' }}>
            Healthy Meals,<br />
            Anytime, Anywhere
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: '#8A8A8A' }}>
            Streamline meal planning based on available ingredients and support users in maintaining a healthy or personalized diet.
          </p>
          <button className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#41521F' }}>
            See Menu
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
