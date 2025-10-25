import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Portfolio = ({ projects }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projectsData = projects || [
    {
      id: 1,
      title: 'Rezydencja w Stylu Angielskim',
      category: 'residential',
      image: '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4008.jpg',
      description: 'Luksusowy apartament w klasycznym stylu',
      details: 'Kompleksowy remont apartamentu w kamienicy z zachowaniem klasycznego charakteru. Elegancka kuchnia z czarno-białą szachownicą marmu, biblioteka z regałami na całą ścianę, marmurowe łazienki oraz designerskie schody spiralne z drewna dębowego.',
      year: '2024',
      area: '180 m²',
      duration: '8 miesięcy',
      scope: [
        'Wykończenie kompleksowe wszystkich pomieszczeń',
        'Montaż marmurowych podłóg i okładzin ściennych',
        'Zabudowa mebli na wymiar - biblioteka, szafy, kuchnia',
        'Montaż designerskich schodów spiralnych z drewna dębowego',
        'Instalacje elektryczne i oświetlenie LED',
        'Instalacje wodno-kanalizacyjne i c.o.',
        'Malowanie ścian farbami premium',
        'Montaż drzwi wewnętrznych i listew przypodłogowych'
      ],
      gallery: {
        kuchnia: [
          '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3966.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3978.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3983.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3985.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3986.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_4256.jpg'
        ],
        salonBiblioteka: [
          '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4008.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4011.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4017.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4024.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4031.jpg'
        ],
        lazienki: [
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4044.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4052.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4053.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4152.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4156.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4157.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4158.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4278.jpg'
        ],
        schody: [
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4182.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4202.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4210.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4226.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4228.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4229.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4237.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4239.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4243.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4244.jpg'
        ],
        holKorytarze: [
          '/realizacje/mieszkalne/klasyczny-angielski/hol-korytarze/IMG_4166.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/hol-korytarze/IMG_4197.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/hol-korytarze/IMG_4248.jpg'
        ],
        sypialnia: [
          '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4104.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4111.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4147.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4149.jpg'
        ],
        detale: [
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_3971.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4022.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4023.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4082.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4086.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4100.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4174.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4176.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4289.jpg',
          '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4293.jpg'
        ]
      }
    }
  ];


  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight text-center">
              Nasze Realizacje
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{background: 'linear-gradient(to right, #D4AF37, #F4E49C)'}}></div>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Portfolio naszych najlepszych projektów
          </p>
        </motion.div>


        <AnimatePresence mode="wait">
          <motion.div
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Link to={`/realizacja/${project.id}`} className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                      <div className="flex items-center mt-3" style={{color: '#F4E49C'}}>
                        <span className="text-sm">Zobacz więcej</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;