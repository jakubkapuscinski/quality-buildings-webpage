import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Imię i nazwisko jest wymagane';
    if (!formData.email) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email jest nieprawidłowy';
    }
    if (!formData.phone) newErrors.phone = 'Telefon jest wymagany';
    if (!formData.projectType) newErrors.projectType = 'Wybierz typ projektu';
    if (!formData.message) newErrors.message = 'Wiadomość jest wymagana';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Adres',
      content: ['ul. Luksusowa 123', '00-001 Warszawa']
    },
    {
      icon: '📞',
      title: 'Telefon',
      content: ['+48 123 456 789', '+48 987 654 321']
    },
    {
      icon: '✉️',
      title: 'Email',
      content: ['kontakt@luxuryconstruction.pl', 'biuro@luxuryconstruction.pl']
    },
    {
      icon: '🕐',
      title: 'Godziny otwarcia',
      content: ['Pon-Pt: 9:00 - 18:00', 'Sob: 10:00 - 14:00']
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
              Skontaktuj się z nami
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{background: 'linear-gradient(to right, #D4AF37, #F4E49C)'}}></div>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Rozpocznij swoją podróż do wymarzonej przestrzeni
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-10 lg:p-12 border border-white/10 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Wyślij zapytanie
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all bg-white/5 backdrop-blur-sm text-white border-white/20 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-50 ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Jan Kowalski"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all bg-white/5 backdrop-blur-sm text-white border-white/20 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-50 ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      }`}
                      placeholder="jan@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-all bg-white/5 backdrop-blur-sm text-white border-white/20 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-50 ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      }`}
                      placeholder="+48 123 456 789"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Typ projektu *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-all bg-white/5 backdrop-blur-sm text-white border-white/20 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-50 ${
                      errors.projectType ? 'border-red-500' : 'border-white/20'
                    }`}
                  >
                    <option value="">Wybierz typ projektu</option>
                    <option value="construction">Budowa</option>
                    <option value="interior">Wykończenie wnętrz</option>
                    <option value="renovation">Renowacja</option>
                    <option value="commercial">Projekt komercyjny</option>
                    <option value="consultation">Konsultacja</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg transition-all resize-none bg-white/5 backdrop-blur-sm text-white border-white/20 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-50 ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Opisz swój projekt..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-black rounded-full font-medium text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" style={{backgroundColor: '#D4AF37'}}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                </button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                  >
                    Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-serif font-bold text-white mb-4">
                Informacje kontaktowe
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-xl mr-3">{info.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{info.title}</h4>
                      {info.content.map((line, idx) => (
                        <p key={idx} className="text-gray-200 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-serif font-bold text-white mb-4">
                Lokalizacja
              </h3>
              <div className="aspect-[4/3] bg-black/30 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center text-gray-300 border border-white/10">
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-center px-4">ul. Luksusowa 123<br/>00-001 Warszawa</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#" className="bg-black/20 backdrop-blur-sm text-white py-3 px-6 rounded-full text-center hover:bg-black/30 transition-colors border border-white/20 text-sm">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </span>
              </a>
              <a href="#" className="bg-black/20 backdrop-blur-sm text-white py-3 px-6 rounded-full text-center hover:bg-black/30 transition-colors border border-white/20 text-sm">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                  Instagram
                </span>
              </a>
              <a href="#" className="bg-black/20 backdrop-blur-sm text-white py-3 px-6 rounded-full text-center hover:bg-black/30 transition-colors border border-white/20 text-sm">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;