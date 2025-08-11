import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'O nas', href: '#about' },
    { name: 'Usługi', href: '#services' },
    { name: 'Realizacje', href: '#portfolio' },
    { name: 'Proces', href: '#process' },
    { name: 'Opinie', href: '#testimonials' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      scrolled ? 'bg-luxury-gray-900/95 backdrop-blur-md shadow-lg py-4 border-b border-luxury-gray-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="/logo/1.png" 
              alt="Logo" 
              className="h-16 w-auto object-contain"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-luxury-gold group ${
                  scrolled ? 'text-white' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-gold-light transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="px-6 py-2 bg-luxury-gold text-white rounded-full font-medium hover:bg-luxury-gold-dark transition-colors duration-300"
            >
              Darmowa wycena
            </motion.button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            } ${scrolled || mobileMenuOpen ? 'bg-luxury-gray-900' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 my-1 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            } ${scrolled || mobileMenuOpen ? 'bg-luxury-gray-900' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            } ${scrolled || mobileMenuOpen ? 'bg-luxury-gray-900' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-gray-900/95 backdrop-blur-md border-t border-luxury-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-white hover:text-luxury-gold transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-luxury-gold text-white rounded-full font-medium hover:bg-luxury-gold-dark transition-colors duration-300">
                Darmowa wycena
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;