import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';

const CTASection = () => {
  return (
    <section className="bg-cta-pattern bg-cover bg-center py-24 relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span 
            className="inline-block text-kong-red font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Limited Time Offer
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
            <AnimatedText
              text="Get 20% Off on All Memberships This Month"
              className="leading-tight"
            />
          </h2>
          
          <motion.p 
            className="text-kong-gray-200 text-xl mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join now and start your fitness journey with Kong Fitness Studio. 
            Use code <span className="text-kong-red font-semibold">KONG20</span> at checkout.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a 
              href="#pricing" 
              className="btn btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Offer Now
            </motion.a>
          </motion.div>
          
          <motion.p
            className="text-kong-gray-300 mt-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Offer valid until August 31, 2025. Terms and conditions apply.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;