import React from 'react';
import { useState } from 'react';
import heroImage from '../assets/images/hero-image.png';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Hero = () => {
    
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOpenSignIn = () => {
    setShowSignIn(true);
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };

  const handleOpenSignUp = () => {
  setShowSignUp(true);
  setShowSignIn(false); // Close sign in if open
  };

  const handleCloseSignUp = () => {
  setShowSignUp(false);
  };

  const handleSwitchToSignUp = () => {
  setShowSignIn(false);
  setShowSignUp(true);
  };

  const handleSwitchToSignIn = () => {
  setShowSignUp(false);
  setShowSignIn(true);
  };
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
          <button 
            onClick={handleOpenSignIn}
            className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: '#41521F' }}
            >
            See Menu
          </button>
        </div>
      </div>
        {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <button
                onClick={handleCloseSignIn}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
                ×
            </button>
            <SignIn onSwitchToSignUp={handleSwitchToSignUp} />
            </div>
        </div>
        )}
        {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <button
                onClick={handleCloseSignUp}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
                ×
            </button>
            <SignUp onSwitchToSignIn={handleSwitchToSignIn} />
            </div>
        </div>
        )}
    </div>
  );
};

export default Hero;
