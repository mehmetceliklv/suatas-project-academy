import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Camera, Users, GraduationCap } from 'lucide-react';

// Import all gallery images
import training1 from '../assets/images/1.Trainings.jpg';
import training2 from '../assets/images/2.Career.jpg';
import training3 from '../assets/images/4.Living Abroad.jpg';
import workshop1 from '../assets/images/10.jpg';
import workshop2 from '../assets/images/4.JPG';
import workshop3 from '../assets/images/13.jpg';
import activity1 from '../assets/images/6.jpg';
import activity2 from '../assets/images/Genel Ana Sayfa Foto4.jpg';

type Category = 'all' | 'trainings' | 'workshops' | 'activities';

interface GalleryImage {
  src: string;
  category: Category;
  alt: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const images: GalleryImage[] = [
    { src: training1, category: 'trainings', alt: 'Training Session 1' },
    { src: training2, category: 'trainings', alt: 'Training Session 2' },
    { src: training3, category: 'trainings', alt: 'Training Session 3' },
    { src: workshop1, category: 'workshops', alt: 'Workshop 1' },
    { src: workshop2, category: 'workshops', alt: 'Workshop 2' },
    { src: workshop3, category: 'workshops', alt: 'Workshop 3' },
    { src: activity1, category: 'activities', alt: 'Activity 1' },
    { src: activity2, category: 'activities', alt: 'Activity 2' },
  ];

  const categories = [
    { id: 'all', label: t('gallery.categories.all'), icon: Camera },
    { id: 'trainings', label: t('gallery.categories.trainings'), icon: GraduationCap },
    { id: 'workshops', label: t('gallery.categories.workshops'), icon: Users },
    { id: 'activities', label: t('gallery.categories.activities'), icon: Camera },
  ];

  const filteredImages = images.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/60 to-[#3f8eff]/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              {t('gallery.title')}
            </h1>
            <p className="text-xl text-[#f8f7da]">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id as Category)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeCategory === id
                  ? 'bg-[#0b1e3f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon size={20} className="mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;