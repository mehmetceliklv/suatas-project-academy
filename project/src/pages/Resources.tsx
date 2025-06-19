import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { FileText, BookOpen, Target, Download, Clock, MapPin, Calendar, Users } from 'lucide-react';

const ResourceCard: React.FC<{
  resource: {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    format: string;
    releaseDate: string;
    pages: number;
    fileSize: string;
  };
  onClick: (id: string) => void;
}> = ({ resource, onClick }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <img
        src={resource.image}
        alt={resource.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0b1e3f] mb-2">{resource.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Clock size={16} className="text-[#3f8eff] mr-2" />
            <span className="text-sm text-gray-600">{resource.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="text-[#3f8eff] mr-2" />
            <span className="text-sm text-gray-600">{resource.format}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="text-[#3f8eff] mr-2" />
            <span className="text-sm text-gray-600">{resource.releaseDate}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-[#3f8eff] mr-2" />
            <span className="text-sm text-gray-600">{resource.pages} pages</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-[#0b1e3f]">{t('resources.free')}</span>
          <button
            onClick={() => onClick(resource.id)}
            className="flex items-center gap-2 px-4 py-2 bg-[#e5fb52] text-[#0b1e3f] rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {t('resources.download')}
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const resources = [
    {
      id: 'project-writing',
      title: t('resources.categories.guides'),
      description: 'A comprehensive guide to writing successful project proposals, including templates, examples, and best practices.',
      image: 'https://images.pexels.com/photos/4262414/pexels-photo-4262414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '2-3 hours read',
      format: 'PDF + Templates',
      releaseDate: 'June 2024',
      pages: 45,
      fileSize: '15MB'
    },
    {
      id: 'erasmus-guide',
      title: t('resources.categories.templates'),
      description: 'Everything you need to know about Erasmus+ programs, funding opportunities, and application processes.',
      image: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4-5 hours read',
      format: 'PDF + Worksheets',
      releaseDate: 'May 2024',
      pages: 60,
      fileSize: '20MB'
    },
    {
      id: 'youth-mobility',
      title: t('resources.categories.tools'),
      description: 'A practical guide to international youth mobility programs, exchanges, and volunteering opportunities.',
      image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3-4 hours read',
      format: 'PDF + Resources',
      releaseDate: 'April 2024',
      pages: 35,
      fileSize: '12MB'
    }
  ];

  const handleResourceClick = (id: string) => {
    // Handle resource download
    console.log('Downloading resource:', id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/60 to-[#3f8eff]/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              {t('resources.title')}
            </h1>
            <p className="text-xl text-[#f8f7da]">
              {t('resources.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <ResourceCard resource={resource} onClick={handleResourceClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;