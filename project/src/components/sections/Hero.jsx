import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="bg-hero-pattern bg-cover bg-center h-screen flex items-center relative"
    >
      <div className="container-custom z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-kong-red font-semibold uppercase tracking-wider text-lg md:text-xl">
              Welcome to Kong Fitness Studio
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            <AnimatedText
              text="Unleash the Beast Within"
              delay={0.5}
            />
          </h1>
          
          <motion.p 
            className="text-kong-gray-200 text-xl mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Nellore's premium fitness destination offering state-of-the-art equipment, 
            expert trainers, and a motivating atmosphere to help you achieve your fitness goals.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <motion.a 
              href="#pricing" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
            <motion.a 
              href="#programs" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Programs
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-kong-red rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;