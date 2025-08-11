import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: '01',
      title: 'Konsultacja',
      description: 'Poznajemy Twoje potrzeby i wizję projektu',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
      details: [
        'Bezpłatne spotkanie wstępne',
        'Analiza wymagań i oczekiwań',
        'Wstępna wycena projektu'
      ]
    },
    {
      number: '02',
      title: 'Projektowanie',
      description: 'Tworzymy szczegółowy projekt dostosowany do Twoich potrzeb',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.995 15.995 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      details: [
        'Koncepcja architektoniczna',
        'Wizualizacje 3D',
        'Dobór materiałów'
      ]
    },
    {
      number: '03',
      title: 'Planowanie',
      description: 'Przygotowujemy harmonogram i kosztorys',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
        </svg>
      ),
      details: [
        'Szczegółowy harmonogram prac',
        'Finalny kosztorys',
        'Wybór podwykonawców'
      ]
    },
    {
      number: '04',
      title: 'Realizacja',
      description: 'Wykonujemy prace zgodnie z projektem',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      details: [
        'Profesjonalna ekipa budowlana',
        'Regularne raporty postępu',
        'Kontrola jakości na każdym etapie'
      ]
    },
    {
      number: '05',
      title: 'Kontrola Jakości',
      description: 'Sprawdzamy każdy detal przed oddaniem',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        'Szczegółowa inspekcja',
        'Testy wszystkich instalacji',
        'Lista wykończeniowa'
      ]
    },
    {
      number: '06',
      title: 'Oddanie',
      description: 'Przekazujemy gotowy projekt z pełną dokumentacją',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159-.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      ),
      details: [
        'Odbiór końcowy',
        'Przekazanie dokumentacji',
        'Gwarancja i serwis'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-luxury-gray-950 to-luxury-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-luxury-gold/4 via-transparent to-transparent"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-24 left-8 w-2 h-2 bg-luxury-gold/25 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 18, 0],
            x: [0, 12, 0],
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-56 right-24 w-3 h-3 bg-luxury-gold/18 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -22, 0],
            rotate: [0, 6, 0],
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-48 left-16 w-1 h-1 bg-luxury-gold/30 rounded-full"
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
              Nasz Proces
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-luxury-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sprawdzony proces realizacji projektów od koncepcji do oddania kluczy
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-luxury-gold/30" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  scale: 0.9
                }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: index * 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                } : {}}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-gradient-to-br from-luxury-gray-850 to-luxury-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-luxury-gray-750 hover:border-luxury-gold/20 backdrop-blur-sm ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-luxury-gold text-sm font-semibold">KROK {step.number}</span>
                        <h3 className="text-2xl font-serif font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-luxury-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-luxury-gray-400">
                          <svg className="w-4 h-4 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-center justify-center my-8 lg:my-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  >
                    {step.number}
                  </motion.div>
                </div>

                <div className="flex-1 lg:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-luxury-gold text-white rounded-full font-medium text-lg hover:bg-luxury-gold-dark transition-all duration-300 transform hover:scale-105">
            Rozpocznij swój projekt
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;