import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const RealizationDetail = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('kuchnia');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedPhotoIndex === null) return;

      const currentPhotos = project.gallery[selectedCategory] || [];

      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) =>
          prev < currentPhotos.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev > 0 ? prev - 1 : currentPhotos.length - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhotoIndex, selectedCategory, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Nie znaleziono realizacji</h2>
          <Link
            to="/"
            className="px-8 py-3 rounded-full font-medium inline-block transition-all duration-300"
            style={{backgroundColor: '#D4AF37', color: '#000'}}
          >
            Powrót do strony głównej
          </Link>
        </div>
      </div>
    );
  }

  const allPhotos = project.gallery
    ? project.gallery[selectedCategory] || []
    : [];

  const categoryLabels = {
    kuchnia: 'Kuchnia',
    salonBiblioteka: 'Salon & Biblioteka',
    lazienki: 'Łazienki',
    schody: 'Schody',
    holKorytarze: 'Hol & Korytarze',
    sypialnia: 'Sypialnia',
    detale: 'Detale'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center text-sm text-gray-400 mb-8"
        >
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
            Home
          </button>
          <span className="mx-2">/</span>
          <button onClick={() => {
            navigate('/');
            setTimeout(() => {
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }} className="hover:text-white transition-colors">
            Realizacje
          </button>
          <span className="mx-2">/</span>
          <span className="text-white">{project.title}</span>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* O Projekcie */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">O Projekcie</h2>
                <div className="w-16 h-1 mb-6" style={{background: 'linear-gradient(to right, #D4AF37, #F4E49C)'}}></div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* Zakres Prac */}
            {project.scope && (
              <div className="space-y-6 lg:pl-8 lg:border-l border-white/10">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-white mb-2">Zakres Prac</h3>
                  <div className="w-16 h-1 mb-6" style={{background: 'linear-gradient(to right, #D4AF37, #F4E49C)'}}></div>
                </div>
                <div className="space-y-3">
                  {project.scope.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" style={{color: '#D4AF37'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Gallery Section */}
        {project.gallery && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Galeria Zdjęć
              </h2>
              <div className="w-16 h-1 mx-auto" style={{background: 'linear-gradient(to right, #D4AF37, #F4E49C)'}} />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(project.gallery).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-black'
                      : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20'
                  }`}
                  style={selectedCategory === category ? {backgroundColor: '#D4AF37'} : {}}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allPhotos.map((photoUrl, index) => (
                <motion.div
                  key={photoUrl}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                >
                  <img
                    src={photoUrl}
                    alt={`${categoryLabels[selectedCategory] || 'Galeria'} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    <div className="absolute top-4 right-4">
                      <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Podobał Ci się ten projekt?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić Twoją wizję i rozpocząć realizację marzenia o idealnym wnętrzu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:brightness-110"
              style={{backgroundColor: '#D4AF37', color: '#000'}}
            >
              Skontaktuj się z nami
            </button>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-8 py-4 rounded-full font-medium transition-all duration-300 bg-white/10 text-white hover:bg-white/20 border border-white/20"
            >
              Zobacz więcej realizacji
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Zamknij"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Photo Counter */}
              <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white font-medium">
                  {selectedPhotoIndex + 1} / {allPhotos.length}
                </span>
              </div>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex((prev) =>
                    prev > 0 ? prev - 1 : allPhotos.length - 1
                  );
                }}
                className="absolute left-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Poprzednie zdjęcie"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image */}
              <motion.img
                key={allPhotos[selectedPhotoIndex]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={allPhotos[selectedPhotoIndex]}
                alt={`${categoryLabels[selectedCategory] || 'Galeria'} ${selectedPhotoIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex((prev) =>
                    prev < allPhotos.length - 1 ? prev + 1 : 0
                  );
                }}
                className="absolute right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Następne zdjęcie"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Category Label */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white font-medium">
                  {categoryLabels[selectedCategory] || 'Wszystkie'}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RealizationDetail;
