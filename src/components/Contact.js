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
    <section id="contact" className="py-24 bg-gradient-to-b from-luxury-gray-850 to-luxury-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/3 via-transparent to-transparent"></div>
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
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-luxury-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rozpocznij swoją podróż do wymarzonej przestrzeni
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-luxury-gray-850 to-luxury-gray-900 rounded-3xl shadow-xl p-8 border border-luxury-gray-750 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Wyślij zapytanie
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-luxury-gray-300 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all bg-luxury-gray-800 text-white ${
                      errors.name ? 'border-red-500' : 'border-luxury-gray-600'
                    }`}
                    placeholder="Jan Kowalski"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-luxury-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all bg-luxury-gray-800 text-white ${
                        errors.email ? 'border-red-500' : 'border-luxury-gray-600'
                      }`}
                      placeholder="jan@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-luxury-gray-300 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all bg-luxury-gray-800 text-white ${
                        errors.phone ? 'border-red-500' : 'border-luxury-gray-600'
                      }`}
                      placeholder="+48 123 456 789"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gray-300 mb-2">
                    Typ projektu *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all bg-luxury-gray-800 text-white ${
                      errors.projectType ? 'border-red-500' : 'border-luxury-gray-600'
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
                  <label className="block text-sm font-medium text-luxury-gray-300 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all resize-none bg-luxury-gray-800 text-white ${
                      errors.message ? 'border-red-500' : 'border-luxury-gray-600'
                    }`}
                    placeholder="Opisz swój projekt..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-luxury-gold text-white rounded-full font-medium text-lg hover:bg-luxury-gold-dark transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-luxury-gray-850 to-luxury-gray-900 rounded-3xl shadow-xl p-8 border border-luxury-gray-750 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Informacje kontaktowe
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-2xl mr-4">{info.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      {info.content.map((line, idx) => (
                        <p key={idx} className="text-luxury-gray-300">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-luxury-gray-850 to-luxury-gray-900 rounded-3xl shadow-xl p-8 border border-luxury-gray-750 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Lokalizacja
              </h3>
              <div className="aspect-video bg-luxury-gray-800 rounded-lg flex flex-col items-center justify-center text-luxury-gray-400 border border-luxury-gray-700">
                <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>ul. Luksusowa 123, Warszawa</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex-1 bg-luxury-gray-700 text-white py-3 px-6 rounded-full text-center hover:bg-luxury-gray-600 transition-colors border border-luxury-gray-600">
                Facebook
              </a>
              <a href="#" className="flex-1 bg-luxury-gray-700 text-white py-3 px-6 rounded-full text-center hover:bg-luxury-gray-600 transition-colors border border-luxury-gray-600">
                Instagram
              </a>
              <a href="#" className="flex-1 bg-luxury-gray-700 text-white py-3 px-6 rounded-full text-center hover:bg-luxury-gray-600 transition-colors border border-luxury-gray-600">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;