import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaRegClock, FaTrophy } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  const stats = [
    { icon: <FaDumbbell size={30} />, value: '1000+', label: 'Equipment' },
    { icon: <FaUsers size={30} />, value: '500+', label: 'Members' },
    { icon: <FaRegClock size={30} />, value: '24/7', label: 'Access' },
    { icon: <FaTrophy size={30} />, value: '10+', label: 'Expert Trainers' },
  ];

  return (
    <section id="about" className="section-padding bg-kong-black-800">
      <div className="container-custom">
        <SectionTitle 
          subtitle="About Us" 
          title="Building Stronger Bodies and Minds"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <AnimatedSection delay={0.2}>
            <p className="text-kong-gray-200 mb-6 leading-relaxed">
              Founded in 2015, <span className="text-kong-red font-semibold">Kong Fitness Studio</span> has been Nellore's 
              premier fitness destination, dedicated to transforming lives through fitness. 
              Our state-of-the-art facility spans over 10,000 square feet, featuring the latest equipment
              and technology to help you achieve your fitness goals.
            </p>
            <p className="text-kong-gray-200 mb-8 leading-relaxed">
              At Kong Fitness, we believe that fitness is more than just physical – it's a holistic journey
              that encompasses mental and emotional wellbeing. Our expert trainers work with you to create
              personalized fitness plans that fit your lifestyle and help you achieve sustainable results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a 
                href="#programs" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Programs
              </motion.a>
            </div>
          </AnimatedSection>
          
          {/* Right Column - Image with overlay */}
          <AnimatedSection delay={0.4}>
            <div className="relative rounded-lg overflow-hidden h-96">
              <div className="absolute inset-0 bg-about-pattern bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-kong-black-900 to-transparent opacity-70"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-kong-gray-200 mb-6">
                  To create a fitness community that inspires, educates, and empowers individuals to reach their full potential.
                </p>
                <motion.button 
                  className="btn btn-primary self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              className="bg-kong-black-700 p-6 rounded-lg text-center"
              delay={0.2 + (index * 0.1)}
            >
              <div className="text-kong-red mb-3 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-kong-gray-300">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;