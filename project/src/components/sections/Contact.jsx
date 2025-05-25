import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';
import AnimatedSection from '../ui/AnimatedSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-kong-red text-2xl" />,
      title: 'Our Location',
      info: '123 Fitness Avenue, Nellore, Andhra Pradesh, India',
    },
    {
      icon: <FaPhoneAlt className="text-kong-red text-2xl" />,
      title: 'Phone Number',
      info: '07330 872240',
      link: 'tel:07330872240'
    },
    {
      icon: <FaEnvelope className="text-kong-red text-2xl" />,
      title: 'Email Address',
      info: 'info@kongfitness.com',
      link: 'mailto:info@kongfitness.com'
    },
    {
      icon: <FaClock className="text-kong-red text-2xl" />,
      title: 'Opening Hours',
      info: 'Mon-Fri: 5:00 AM - 10:00 PM\nSat-Sun: 6:00 AM - 8:00 PM',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-kong-black-900">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Contact Us" 
          title="Get In Touch"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info and Map */}
          <div>
            <AnimatedSection delay={0.2}>
              <p className="text-kong-gray-200 mb-8">
                Have questions about our programs or membership options? 
                Want to schedule a tour of our facility? Fill out the form or contact us directly.
                We're here to help you on your fitness journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-kong-black-800 p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-kong-gray-300 whitespace-pre-line">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61763.19902331206!2d79.94187688383726!3d14.44100449018492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cca0e958771%3A0xd3036c2025161f55!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1628487585926!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Kong Fitness Studio Location"
              ></iframe>
            </AnimatedSection>
          </div>
          
          {/* Right Column - Contact Form */}
          <AnimatedSection delay={0.3} className="bg-kong-black-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;