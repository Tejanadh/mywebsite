import React from 'react';
import { motion } from 'framer-motion';

const ProgramCard = ({ title, icon, image, description }) => {
  return (
    <motion.div 
      className="program-card relative overflow-hidden rounded-lg h-80 group"
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 } 
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="program-overlay absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-75 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
        <div className="program-icon text-kong-red mb-4 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-kong-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        
        {/* CTA Button that appears on hover */}
        <motion.button 
          className="btn btn-outline mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProgramCard;