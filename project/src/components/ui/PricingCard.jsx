import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ title, price, features, isPopular, cta = "Choose Plan" }) => {
  return (
    <motion.div 
      className={`card p-8 h-full flex flex-col ${isPopular ? 'border-2 border-kong-red' : ''}`}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 } 
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isPopular ? 0.2 : 0.3 }}
    >
      {isPopular && (
        <div className="bg-kong-red text-white py-1 px-4 rounded-full text-sm font-bold uppercase absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex justify-center items-baseline">
          <span className="text-4xl font-bold">₹{price}</span>
          <span className="text-kong-gray-300 ml-1">/month</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className="text-kong-red mt-1 mr-2 flex-shrink-0" />
            <span className="text-kong-gray-200">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`btn ${isPopular ? 'btn-primary' : 'btn-outline'} w-full mt-auto`}>
        {cta}
      </button>
    </motion.div>
  );
};

export default PricingCard;