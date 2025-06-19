import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Megaphone, ScrollText, Gavel, Users } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: <Megaphone size={48} className="text-white" />,
      title: t('services.youth.title'),
      bg: 'bg-secondary-500',
    },
    {
      icon: <ScrollText size={48} className="text-white" />,
      title: t('services.project.title'),
      bg: 'bg-primary-600',
    },
    {
      icon: <Gavel size={48} className="text-white" />,
      title: t('services.legal.title'),
      bg: 'bg-primary-600',
    },
    {
      icon: <Users size={48} className="text-white" />,
      title: t('services.events.title'),
      bg: 'bg-secondary-500',
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6 font-display">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`${service.bg} rounded-xl p-8 flex flex-col items-center text-center h-full min-h-[200px] justify-center transform transition-transform hover:scale-105`}>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;