import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input peer"
            placeholder=" "
            required
          />
          <label 
            htmlFor="name"
            className="absolute left-4 -top-3 bg-kong-black-700 px-1 text-sm text-kong-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-kong-red"
          >
            Your Name
          </label>
        </div>
        
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input peer"
            placeholder=" "
            required
          />
          <label 
            htmlFor="email"
            className="absolute left-4 -top-3 bg-kong-black-700 px-1 text-sm text-kong-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-kong-red"
          >
            Your Email
          </label>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input peer"
            placeholder=" "
          />
          <label 
            htmlFor="phone"
            className="absolute left-4 -top-3 bg-kong-black-700 px-1 text-sm text-kong-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-kong-red"
          >
            Phone Number
          </label>
        </div>
        
        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input peer"
            placeholder=" "
            required
          />
          <label 
            htmlFor="subject"
            className="absolute left-4 -top-3 bg-kong-black-700 px-1 text-sm text-kong-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-kong-red"
          >
            Subject
          </label>
        </div>
      </div>
      
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="form-input peer"
          placeholder=" "
          required
        ></textarea>
        <label 
          htmlFor="message"
          className="absolute left-4 -top-3 bg-kong-black-700 px-1 text-sm text-kong-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-kong-red"
        >
          Your Message
        </label>
      </div>
      
      <div className="text-center">
        <motion.button 
          type="submit"
          className="btn btn-primary px-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;