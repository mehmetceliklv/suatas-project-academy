import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { 
      icon: <Facebook size={24} />, 
      url: 'https://www.facebook.com/suatas.project.academy',
      label: 'Facebook',
      color: 'hover:text-[#1877F2]'
    },
    { 
      icon: <Instagram size={24} />, 
      url: 'https://www.instagram.com/suatas.project.academy/',
      label: 'Instagram',
      color: 'hover:text-[#E4405F]'
    },
    { 
      icon: <Youtube size={24} />, 
      url: 'https://www.youtube.com/@suatastalks',
      label: 'Youtube',
      color: 'hover:text-[#FF0000]'
    },
    { 
      icon: <Linkedin size={24} />, 
      url: 'https://www.linkedin.com/company/suatas-project-academy',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]'
    }
  ];

  const subjects = [
    'EU PROJECT CONSULTATION',
    'TRAINING REQUEST',
    'WORKSHOP BOOKING',
    'SPEAKING ENGAGEMENT',
    'RESEARCH COLLABORATION',
    'MENTORING REQUEST',
    'MEDIA INQUIRY',
    'OTHER'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-32">
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg')] 
          opacity-20 bg-cover bg-center"
        />
        <div 
          ref={ref}
          className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 font-display">
              {t('contacts.title')}
            </h1>
            <p className="text-xl text-[#f8f7da] max-w-2xl mx-auto">
              {t('contacts.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-[#0b1e3f] rounded-2xl p-8 text-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm">
                      {t('contacts.form.name')} <span className="text-[#e5fb52]">{t('contacts.form.required')}</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#1a2d4e] rounded-lg focus:ring-2 focus:ring-[#e5fb52] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">
                      {t('contacts.form.email')} <span className="text-[#e5fb52]">{t('contacts.form.required')}</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#1a2d4e] rounded-lg focus:ring-2 focus:ring-[#e5fb52] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm">{t('contacts.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a2d4e] rounded-lg focus:ring-2 focus:ring-[#e5fb52] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    {t('contacts.form.subject')} <span className="text-[#e5fb52]">{t('contacts.form.required')}</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {subjects.map((subject) => (
                      <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          onChange={handleChange}
                          className="form-radio text-[#e5fb52] focus:ring-[#e5fb52]"
                        />
                        <span className="text-sm">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    {t('contacts.form.message')} <span className="text-[#e5fb52]">{t('contacts.form.required')}</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-[#1a2d4e] rounded-lg focus:ring-2 focus:ring-[#e5fb52] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e5fb52] text-[#0b1e3f] py-3 rounded-lg font-semibold hover:bg-opacity-90 
                  transition-all flex items-center justify-center gap-2"
                >
                  {t('contacts.form.submit')}
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-[#3f8eff] mr-4" />
                  <h3 className="text-2xl font-semibold text-[#0b1e3f]">{t('contacts.info.email')}</h3>
                </div>
                <a 
                  href="mailto:suatasconsultation@gmail.com"
                  className="text-xl text-gray-600 hover:text-[#3f8eff] transition-colors"
                >
                  suatasconsultation@gmail.com
                </a>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-[#3f8eff] mr-4" />
                  <h3 className="text-2xl font-semibold text-[#0b1e3f]">{t('contacts.info.address')}</h3>
                </div>
                <p className="text-xl text-gray-600">
                  Kaišiadorys, Lithuania
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-[#0b1e3f] mb-8">
                  {t('contacts.info.connect')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 
                      text-gray-600 ${social.color} transition-all transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;