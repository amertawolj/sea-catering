import React from 'react';
import BGLast from '../assets/images/BGLast.png';

const LastHome = () => {
  return ( 
    <div className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BGLast})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="bg-white bg-opacity-90 p-12 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#41521F'}}>
              Make eating healthy<br />
              the easiest part<br />
              of your day
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{color: '#8A8A8A'}}>
              From fully customizable meal plans to ready-to-eat options and flexible deliveries in just several clicks, SEA Catering brings nutritious meals to your doorstep — simple, personalized, and always satisfying.
            </p>
            <button className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity" style={{backgroundColor: '#41521F'}}>
              See Menu
            </button>
          </div>
        </div>
      </div>
  );
};

export default LastHome