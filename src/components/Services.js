import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-luxury-gray-850 to-luxury-gray-900 rounded-3xl max-w-2xl w-full p-8 relative border border-luxury-gray-750 backdrop-blur-sm"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-luxury-gray-800 hover:bg-luxury-gray-700 transition-colors text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 mr-4 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
              {service.icon}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-luxury-gray-300 mb-6">{service.fullDescription}</p>
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-luxury-gold mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-luxury-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full px-6 py-3 bg-luxury-gold text-white rounded-full font-medium hover:bg-luxury-gold-dark transition-colors duration-300">
            Zapytaj o tę usługę
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Konstrukcje i Budowa',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      description: 'Kompleksowe usługi budowlane od fundamentów po dach',
      fullDescription: 'Zajmujemy się kompleksową realizacją projektów budowlanych, od przygotowania terenu, przez fundamenty, konstrukcje nośne, aż po wykończenie dachu. Stosujemy najnowocześniejsze technologie i materiały najwyższej jakości.',
      features: [
        'Budowa domów jednorodzinnych',
        'Konstrukcje żelbetowe i stalowe',
        'Rozbudowy i nadbudowy',
        'Prace fundamentowe',
        'Instalacje wewnętrzne'
      ]
    },
    {
      title: 'Projektowanie Wnętrz',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.995 15.995 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      description: 'Kreatywne i funkcjonalne projekty dopasowane do Twoich potrzeb',
      fullDescription: 'Tworzymy unikalne projekty wnętrz, które łączą estetykę z funkcjonalnością. Nasi projektanci pracują nad każdym detalem, aby stworzyć przestrzeń idealnie dopasowaną do Twojego stylu życia.',
      features: [
        'Projekty 3D i wizualizacje',
        'Dobór materiałów i kolorystyki',
        'Projektowanie oświetlenia',
        'Meble na wymiar',
        'Nadzór nad realizacją'
      ]
    },
    {
      title: 'Wykończenia Premium',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      description: 'Luksusowe wykończenia z dbałością o każdy detal',
      fullDescription: 'Specjalizujemy się w wykończeniach najwyższej klasy. Używamy tylko premium materiałów i współpracujemy z najlepszymi rzemieślnikami, aby zapewnić perfekcyjne wykonanie.',
      features: [
        'Ekskluzywne materiały wykończeniowe',
        'Ręcznie wykonane detale',
        'Systemy smart home',
        'Luksusowe łazienki i kuchnie',
        'Podłogi drewniane i kamienne'
      ]
    },
    {
      title: 'Renowacje i Remonty',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      description: 'Przywracamy blask i modernizujemy istniejące przestrzenie',
      fullDescription: 'Przeprowadzamy kompleksowe renowacje budynków historycznych oraz modernizacje istniejących przestrzeni. Łączymy poszanowanie dla tradycji z nowoczesnymi rozwiązaniami.',
      features: [
        'Renowacje zabytków',
        'Modernizacje budynków',
        'Adaptacje przestrzeni',
        'Termomodernizacje',
        'Remonty generalne'
      ]
    },
    {
      title: 'Zarządzanie Projektem',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      description: 'Profesjonalna koordynacja od koncepcji do realizacji',
      fullDescription: 'Oferujemy pełne zarządzanie projektem budowlanym. Koordynujemy wszystkie prace, pilnujemy terminów i budżetu, zapewniając płynną realizację inwestycji.',
      features: [
        'Planowanie i harmonogramowanie',
        'Kontrola budżetu',
        'Koordynacja podwykonawców',
        'Nadzór budowlany',
        'Raportowanie postępów'
      ]
    },
    {
      title: 'Konsultacje Eksperckie',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      description: 'Profesjonalne doradztwo na każdym etapie inwestycji',
      fullDescription: 'Nasi eksperci służą pomocą na każdym etapie realizacji projektu. Od wyboru działki, przez projekt, aż po odbiór końcowy - jesteśmy z Tobą.',
      features: [
        'Analiza wykonalności projektu',
        'Doradztwo techniczne',
        'Optymalizacja kosztów',
        'Wybór technologii',
        'Audyty budowlane'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-luxury-gray-900 to-luxury-gray-850 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 via-transparent to-transparent"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-luxury-gold/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-luxury-gold/15 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-32 left-20 w-1 h-1 bg-luxury-gold/25 rounded-full"
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
              Nasze Usługi
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-luxury-gray-300 max-w-4xl mx-auto leading-relaxed">
            Oferujemy kompleksowe rozwiązania w zakresie budownictwa i wykończeń wnętrz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : {}}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onClick={() => setSelectedService(service)}
              className="bg-gradient-to-br from-luxury-gray-850 to-luxury-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-luxury-gray-750 hover:border-luxury-gold/30 hover:bg-gradient-to-br hover:from-luxury-gray-800 hover:to-luxury-gray-850 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-luxury-gold">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-luxury-gray-300 mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-luxury-gold font-medium group-hover:gap-3 transition-all duration-300">
                <span>Dowiedz się więcej</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default Services;