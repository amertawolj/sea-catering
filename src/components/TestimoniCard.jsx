import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const TestimoniCard = ({ name, location, text, rating = 5 }) => {
  return (
    <div className="w-[280px] p-6 rounded-lg shadow-sm h-full flex flex-col" style={{ backgroundColor: '#41521F' }}>
      <div className="flex mb-4">
        {[...Array(Math.floor(rating))].map((_, i) => (
        <AiFillStar key={i} className="w-4 h-4 mr-1" style={{ color: '#FBED70' }} />
        ))}
      </div>
      <p className="text-white text-sm mb-4 leading-relaxed flex-grow">
        "{text}"
      </p>
      <div className="mt-auto">
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-gray-300 text-xs">{location}</p>
      </div>
    </div>
  );
};


export default TestimoniCard;