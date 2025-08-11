import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { value: 15, suffix: '+', label: 'Lat doświadczenia' },
    { value: 250, suffix: '+', label: 'Zrealizowanych projektów' },
    { value: 98, suffix: '%', label: 'Zadowolonych klientów' },
    { value: 25, suffix: '+', label: 'Ekspertów w zespole' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-luxury-gray-950 to-luxury-gray-900 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -35, 0],
            rotate: [0, 12, 0],
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-4 h-4 bg-luxury-gold/12 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 25, 0],
            x: [0, -20, 0],
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-8 w-2 h-2 bg-luxury-gold/18 rounded-full"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                O nas
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mb-6"></div>
              <h3 className="text-2xl md:text-3xl font-serif text-luxury-gold mb-8">Budujemy z pasją</h3>
            </div>
            <p className="text-xl text-luxury-gray-300 mb-6 leading-relaxed">
              Jesteśmy liderem w branży luksusowych konstrukcji i wykończeń wnętrz. 
              Nasze projekty łączą innowacyjne rozwiązania z ponadczasową elegancją.
            </p>
            <p className="text-lg text-luxury-gray-400 mb-10 leading-relaxed">
              Każdy projekt traktujemy indywidualnie, dostosowując się do unikalnych 
              potrzeb i wizji naszych klientów. Dbałość o szczegóły i najwyższa jakość 
              wykonania to nasza wizytówka.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-luxury-gray-300">Certyfikowany wykonawca</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-luxury-gray-300">Gwarancja jakości</span>
              </div>
            </div>
            <button className="px-8 py-3 bg-luxury-gold text-white rounded-full font-medium hover:bg-luxury-gold-dark transition-colors duration-300">
              Dowiedz się więcej
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-luxury-gold/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-luxury-gold/20 rounded-full blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
              alt="O nas"
              className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : {}}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="text-center p-6 rounded-2xl hover:bg-luxury-gray-850/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
                <CounterAnimation end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-luxury-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;