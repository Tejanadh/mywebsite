import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <div className="testimonial-card p-8 rounded-lg h-full flex flex-col">
      <div className="flex-grow">
        <FaQuoteLeft className="text-kong-red text-3xl mb-4" />
        <p className="text-kong-gray-200 italic mb-6">{quote}</p>
      </div>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-kong-gray-300 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;