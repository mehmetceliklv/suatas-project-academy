import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Globe2, Users, Building2, Building } from 'lucide-react';
import backgroundImage from '../assets/images/1.0.jpg';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface ProjectCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  image: string;
  color: string;
  partners?: Partner[];
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories: ProjectCategory[] = [
    {
      id: 'international-projects',
      title: t('projects.categories.international'),
      icon: <Globe2 className="w-12 h-12 text-[#e5fb52]" />,
      description: t('projects.descriptions.international'),
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      color: 'from-blue-600/80 to-blue-800/80'
    },
    {
      id: 'local-projects',
      title: t('projects.categories.local'),
      icon: <Building2 className="w-12 h-12 text-[#e5fb52]" />,
      description: t('projects.descriptions.local'),
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      color: 'from-purple-600/80 to-purple-800/80'
    },
    {
      id: 'international-partners',
      title: t('projects.categories.intPartners'),
      icon: <Users className="w-12 h-12 text-[#e5fb52]" />,
      description: t('projects.descriptions.intPartners'),
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      color: 'from-emerald-600/80 to-emerald-800/80',
      partners: [
        {
          name: 'European Youth Foundation',
          logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
          description: 'Supporting youth initiatives across Europe',
          website: '#'
        },
        {
          name: 'Global Education Network',
          logo: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
          description: 'Connecting educators worldwide',
          website: '#'
        },
        {
          name: 'International Youth Exchange',
          logo: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg',
          description: 'Facilitating cultural exchange programs',
          website: '#'
        }
      ]
    },
    {
      id: 'local-partners',
      title: t('projects.categories.localPartners'),
      icon: <Building className="w-12 h-12 text-[#e5fb52]" />,
      description: t('projects.descriptions.localPartners'),
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      color: 'from-orange-600/80 to-orange-800/80',
      partners: [
        {
          name: 'Lithuanian Youth Council',
          logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
          description: 'Empowering Lithuanian youth',
          website: '#'
        },
        {
          name: 'Kaunas Innovation Center',
          logo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
          description: 'Fostering local innovation',
          website: '#'
        },
        {
          name: 'Vilnius Education Hub',
          logo: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
          description: 'Advancing educational initiatives',
          website: '#'
        }
      ]
    }
  ];

  const ProjectCard: React.FC<{
    category: ProjectCategory;
    index: number;
    onClick: () => void;
  }> = ({ category, index, onClick }) => {
    const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    return (
      <div 
        ref={ref}
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl transition-all duration-700 transform cursor-pointer 
        hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="absolute inset-0">
          <img 
            src={category.image} 
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
        </div>
        <div className="relative p-8 min-h-[300px] flex flex-col justify-between">
          <div>
            <div className="mb-6">{category.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-white font-display">
              {category.title}
            </h3>
            <p className="text-lg text-white/90">
              {category.description}
            </p>
          </div>
          
          <div className="mt-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white">
              {t('common.clickToExplore')}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PartnersModal: React.FC<{
    category: ProjectCategory;
    onClose: () => void;
  }> = ({ category, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">{category.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-[#0b1e3f]">
              {category.title}
            </h3>
            <p className="text-gray-600">
              {category.description}
            </p>
          </div>

          {category.partners ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-[#0b1e3f] mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {partner.description}
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">{t('common.comingSoon')}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-20 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/60 to-[#3f8eff]/30" />
        <div 
          ref={ref}
          className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-[#f8f7da]">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <ProjectCard 
              key={category.id} 
              category={category} 
              index={index}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <PartnersModal
          category={categories.find(c => c.id === selectedCategory)!}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
};

export default Projects;