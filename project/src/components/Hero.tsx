import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/1.Trainings.jpg';
import image2 from '../assets/images/2.Career.jpg';
import image3 from '../assets/images/4.Living Abroad.jpg';
import image4 from '../assets/images/Genel Ana Sayfa Foto4.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/90 to-[#3f8eff]/90 mix-blend-multiply" />
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10 mt-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl text-[#f8f7da] max-w-3xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>

        <Link 
          to="/about"
          className="inline-flex items-center gap-2 bg-[#e5fb52] text-[#0b1e3f] px-8 py-4 rounded-full 
          text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          {t('nav.about')}
        </Link>
      </div>
    </section>
  );
};

export default Hero;