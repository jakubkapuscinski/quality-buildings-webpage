import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Anna Kowalska',
      role: 'Właścicielka rezydencji',
      project: 'Rezydencja Parkowa',
      content: 'Współpraca przeszła nasze najśmielsze oczekiwania. Profesjonalizm, dbałość o szczegóły i terminowość to cechy, które wyróżniają ten zespół. Nasza rezydencja wygląda dokładnie tak, jak sobie wymarzyliśmy.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Piotr Nowak',
      role: 'CEO, Tech Solutions',
      project: 'Biurowiec Crystal',
      content: 'Niesamowite podejście do projektu. Zespół wykazał się ogromną kreatywnością i elastycznością. Nasz nowy biurowiec nie tylko spełnia wszystkie wymagania funkcjonalne, ale też robi wrażenie na klientach.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 3,
      name: 'Maria Wiśniewska',
      role: 'Architekt wnętrz',
      project: 'Apartament Skyline',
      content: 'Jako architekt wnętrz, doceniam jakość wykonania i uwagę poświęconą detalom. Współpraca była przyjemnością, a efekt końcowy przekroczył oczekiwania moich klientów.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 4,
      name: 'Tomasz Zieliński',
      role: 'Inwestor',
      project: 'Villa Marina',
      content: 'Budowa domu nad morzem była moim marzeniem. Zespół wykonał fantastyczną pracę, dostosowując projekt do trudnych warunków terenowych. Rezultat jest spektakularny!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=8'
    },
    {
      id: 5,
      name: 'Katarzyna Dąbrowska',
      role: 'Właścicielka restauracji',
      project: 'Restauracja Złota',
      content: 'Transformacja naszej restauracji była niesamowita. Nowe wnętrze przyciąga klientów i tworzy wyjątkową atmosferę. Wzrost rezerwacji o 40% mówi sam za siebie!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=9'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-luxury-gold' : 'text-luxury-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-luxury-gray-900 to-luxury-gray-850 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-transparent to-luxury-gold/5" />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-32 right-16 w-3 h-3 bg-luxury-gold/15 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-40 left-12 w-2 h-2 bg-luxury-gold/20 rounded-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight text-center">
              Opinie Klientów
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-luxury-gray-300 max-w-4xl mx-auto leading-relaxed">
            Zobacz, co mówią o nas nasi zadowoleni klienci
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-luxury-gray-750 to-luxury-gray-850 rounded-3xl shadow-2xl p-8 md:p-12 border border-luxury-gray-700 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <p className="text-lg text-luxury-gray-300 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-luxury-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-luxury-gold mt-1">
                      Projekt: {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prevTestimonial}
            whileHover={{ 
              scale: 1.1, 
              x: -2,
              backgroundColor: "#D4AF37",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-luxury-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-luxury-gray-600 transition-colors border border-luxury-gray-600"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ 
              scale: 1.1, 
              x: 2,
              backgroundColor: "#D4AF37",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-luxury-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-luxury-gray-600 transition-colors border border-luxury-gray-600"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-luxury-gold' 
                    : 'bg-luxury-gray-300 hover:bg-luxury-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
            <p className="text-luxury-gray-400">Satysfakcji klientów</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-luxury-gold mb-2">5.0</div>
            <p className="text-luxury-gray-400">Średnia ocena</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-luxury-gold mb-2">250+</div>
            <p className="text-luxury-gray-400">Zadowolonych klientów</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-luxury-gold mb-2">98%</div>
            <p className="text-luxury-gray-400">Poleceń</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;