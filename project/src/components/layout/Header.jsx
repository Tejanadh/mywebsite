import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'header-scrolled py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <a href="#pricing" className="hidden md:block btn btn-primary">
          Join Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl z-50 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full bg-kong-black-900 flex flex-col items-center justify-center md:hidden z-40"
          >
            <ul className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-2xl nav-link font-medium"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#pricing" 
                  className="btn btn-primary mt-4"
                  onClick={toggleMenu}
                >
                  Join Now
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;