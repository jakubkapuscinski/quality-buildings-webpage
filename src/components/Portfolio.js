import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Rezydencja Parkowa',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      description: 'Luksusowa rezydencja z basenem',
      details: 'Ekskluzywna rezydencja o powierzchni 450m² z basenem, sauną i przestronnym ogrodem.',
      year: '2024',
      area: '450 m²',
      duration: '12 miesięcy'
    },
    {
      id: 2,
      title: 'Apartament Skyline',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      description: 'Nowoczesne wnętrze w centrum miasta',
      details: 'Projekt i wykonanie luksusowego apartamentu na 25. piętrze z panoramicznym widokiem.',
      year: '2024',
      area: '180 m²',
      duration: '4 miesiące'
    },
    {
      id: 3,
      title: 'Biurowiec Crystal',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Nowoczesny kompleks biurowy',
      details: 'Kompleksowa realizacja 10-piętrowego biurowca klasy A z podziemnym parkingiem.',
      year: '2023',
      area: '8500 m²',
      duration: '18 miesięcy'
    },
    {
      id: 4,
      title: 'Villa Marina',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      description: 'Dom nad morzem',
      details: 'Ekskluzywna willa z prywatnym dostępem do plaży i spektakularnym widokiem na morze.',
      year: '2023',
      area: '320 m²',
      duration: '10 miesięcy'
    },
    {
      id: 5,
      title: 'Restauracja Złota',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
      description: 'Eleganckie wnętrze restauracji',
      details: 'Projekt i aranżacja ekskluzywnej restauracji w zabytkowej kamienicy.',
      year: '2024',
      area: '280 m²',
      duration: '3 miesiące'
    },
    {
      id: 6,
      title: 'Centrum Handlowe',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800',
      description: 'Modernizacja galerii handlowej',
      details: 'Kompleksowa modernizacja i rozbudowa centrum handlowego.',
      year: '2023',
      area: '15000 m²',
      duration: '24 miesiące'
    }
  ];

  const filters = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'residential', label: 'Mieszkalne' },
    { value: 'commercial', label: 'Komercyjne' },
    { value: 'interior', label: 'Wnętrza' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'text-black'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
              }`}
              style={activeFilter === filter.value ? {backgroundColor: '#D4AF37'} : {}}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
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
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black/90 backdrop-blur-xl rounded-3xl max-w-4xl w-full overflow-hidden border border-white/20 backdrop-blur-sm"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-200 mb-6">{selectedProject.details}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Rok realizacji</p>
                    <p className="text-lg font-semibold text-white">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Powierzchnia</p>
                    <p className="text-lg font-semibold text-white">{selectedProject.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Czas realizacji</p>
                    <p className="text-lg font-semibold text-white">{selectedProject.duration}</p>
                  </div>
                </div>
                <button className="px-8 py-3 text-black rounded-full font-medium hover:brightness-110 transition-colors duration-300" style={{backgroundColor: '#D4AF37'}}>
                  Zapytaj o podobny projekt
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;