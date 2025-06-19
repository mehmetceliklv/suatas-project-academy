import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FileText, GraduationCap, BookOpen, Video } from 'lucide-react';
import image1 from '../assets/images/10.jpg';
import image2 from '../assets/images/13.jpg';
import image3 from '../assets/images/6.jpg';

const Activities: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const activities = [
    {
      icon: <FileText className="w-12 h-12 text-[#e5fb52]" />,
      title: t('activities.projects.title'),
      link: "/projects",
      description: t('activities.projects.description'),
      gradient: "from-[#0b1e3f] to-[#3f8eff]"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#e5fb52]" />,
      title: t('activities.trainings.title'),
      link: "/trainings",
      description: t('activities.trainings.description'),
      gradient: "from-[#3f8eff] to-[#0b1e3f]"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#e5fb52]" />,
      title: t('activities.resources.title'),
      link: "/resources",
      description: t('activities.resources.description'),
      gradient: "from-[#0b1e3f] to-[#3f8eff]"
    },
    {
      icon: <Video className="w-12 h-12 text-[#e5fb52]" />,
      title: t('activities.podcasts.title'),
      link: "/podcasts",
      description: t('activities.podcasts.description'),
      gradient: "from-[#3f8eff] to-[#0b1e3f]"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#f8f7da]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0b1e3f] text-center mb-16 font-display">
          {t('activities.title')}
        </h2>

        {/* Featured Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <div className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src={image1} 
                alt="Training Activities" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3f] via-transparent to-transparent opacity-70" />
            </div>
          </div>
          <div className={`transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src={image2} 
                alt="Career Development" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3f] via-transparent to-transparent opacity-70" />
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src={image3} 
                alt="International Experience" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3f] via-transparent to-transparent opacity-70" />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link 
                to={activity.link}
                className="block relative overflow-hidden rounded-2xl bg-gradient-to-br hover:-translate-y-2 
                transition-all duration-300 group h-[400px]"
              >
                <div className={`bg-gradient-to-br ${activity.gradient} h-full`}>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 
                  transition-transform group-hover:scale-150" />
                  
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                      {activity.icon}
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-3xl font-bold mb-4 text-white min-h-[72px] flex items-center">
                        {activity.title}
                      </h3>
                      <p className="text-white/90 text-lg mb-8 min-h-[56px]">
                        {activity.description}
                      </p>
                      
                      <div className="flex items-center text-[#e5fb52] group-hover:translate-x-2 transition-transform">
                        {t('common.learnMore')}
                        <svg 
                          className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Upcoming Activities Button */}
        <div className="text-center mt-16">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-[#e5fb52] text-[#0b1e3f] px-8 py-4 rounded-full 
            text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {t('activities.cta')}
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activities;