import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">


      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="/logo/1.png" 
            alt="Logo" 
            className="h-32 w-auto mx-auto mb-8 object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              duration: 1, 
              delay: 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }
          }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, delay: 0.4 }
            }}
            className="block"
          >
            Luksusowe Konstrukcje
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, delay: 0.6 }
            }}
            className="block mt-2" style={{color: '#F4E49C'}}
          >
            i Wykończenia Wnętrz
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
        >
          Tworzymy przestrzenie, które łączą elegancję z funkcjonalnością.
          Najwyższa jakość w każdym detalu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -3,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-black rounded-full font-medium text-lg hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl" style={{backgroundColor: '#D4AF37'}}
          >
            Rozpocznij projekt
          </motion.button>
          <motion.button
            whileHover={{ 
              y: -3,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Zobacz realizacje
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1, duration: 1 }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center cursor-pointer"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-sm mb-2"
          >
            Przewiń w dół
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative"
          >
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;