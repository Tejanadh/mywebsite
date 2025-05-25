import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kong-black-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-kong-gray-300 mb-6">
              Kong Fitness Studio is Nellore's premier fitness destination. 
              We are dedicated to helping you transform your body and mind through 
              expert guidance and state-of-the-art facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">About Us</a></li>
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Programs</a></li>
              <li><a href="#gallery" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Gallery</a></li>
              <li><a href="#pricing" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Pricing</a></li>
              <li><a href="#contact" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Strength Training</a></li>
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Cardio Fitness</a></li>
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">CrossFit</a></li>
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Zumba Classes</a></li>
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Yoga Sessions</a></li>
              <li><a href="#programs" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">Personal Training</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-kong-red mt-1 mr-3" />
                <span className="text-kong-gray-300">123 Fitness Avenue, Nellore, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-kong-red mr-3" />
                <a href="tel:07330872240" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">07330 872240</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-kong-red mr-3" />
                <a href="mailto:info@kongfitness.com" className="text-kong-gray-300 hover:text-kong-red transition-colors duration-300">info@kongfitness.com</a>
              </li>
              <li>
                <h4 className="text-white font-medium mb-2">Opening Hours:</h4>
                <p className="text-kong-gray-300">Monday - Friday: 5:00 AM - 10:00 PM</p>
                <p className="text-kong-gray-300">Saturday - Sunday: 6:00 AM - 8:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-kong-black-600 mb-8" />

        <div className="text-center text-kong-gray-300">
          <p>&copy; {currentYear} Kong Fitness Studio. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-kong-red transition-colors duration-300">Privacy Policy</a> | 
            <a href="#" className="hover:text-kong-red transition-colors duration-300 ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;