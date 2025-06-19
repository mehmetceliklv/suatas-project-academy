import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Target, CheckCircle, Rocket, Globe, Users, BookOpen } from 'lucide-react';

const Mission: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref} 
      className="py-20 bg-secondary-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-4">
            <Target size={48} className="text-secondary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6 font-display">
            {t('mission.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('mission.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">
                  <Rocket size={24} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    {t('mission.vision.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('mission.vision.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">
                  <Globe size={24} className="text-secondary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    {t('mission.global.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('mission.global.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center font-display">
            {t('mission.objectives.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              className={`transition-all duration-700 delay-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <Users size={24} className="text-secondary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">
                    {t('mission.objectives.community.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('mission.objectives.community.description')}
                  </p>
                </div>
              </div>
            </div>

            <div 
              className={`transition-all duration-700 delay-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <BookOpen size={24} className="text-secondary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">
                    {t('mission.objectives.education.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('mission.objectives.education.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;