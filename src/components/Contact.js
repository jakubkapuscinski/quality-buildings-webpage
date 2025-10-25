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
          {/* Contact Form - Left Side (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-10 lg:p-12 border border-white/10">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">
                Wyślij zapytanie
              </h3>
              <p className="text-gray-300 mb-8">Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe</p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
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
                  className="w-full px-8 py-4 text-black rounded-full font-medium text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg" style={{backgroundColor: '#D4AF37'}}
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

          {/* Contact Info - Right Side (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Information Card */}
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Informacje kontaktowe
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 228, 156, 0.2))'}}>
                      <span className="text-2xl">{info.icon}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      {info.content.map((line, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Nasza lokalizacja
              </h3>
              <div className="aspect-video bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3543!2d21.0133!3d52.2319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2spl!4v1692123456789!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Quality Building"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;