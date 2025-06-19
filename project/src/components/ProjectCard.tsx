import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  dates: string;
  type: string;
  colorScheme: 'primary' | 'secondary' | 'accent';
}

const colorStyles = {
  primary: {
    bg: 'bg-primary-600',
    hover: 'hover:bg-primary-700',
    text: 'text-primary-700',
    button: 'bg-white text-primary-700 hover:bg-primary-50',
    outline: 'border-white text-white hover:bg-white hover:text-primary-700'
  },
  secondary: {
    bg: 'bg-secondary-500',
    hover: 'hover:bg-secondary-600',
    text: 'text-secondary-500',
    button: 'bg-white text-secondary-600 hover:bg-secondary-50',
    outline: 'border-white text-white hover:bg-white hover:text-secondary-600'
  },
  accent: {
    bg: 'bg-accent-500',
    hover: 'hover:bg-accent-600',
    text: 'text-accent-500',
    button: 'bg-white text-accent-600 hover:bg-accent-50',
    outline: 'border-white text-white hover:bg-white hover:text-accent-600'
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  imageUrl,
  title,
  location,
  dates,
  type,
  colorScheme
}) => {
  const { t } = useTranslation();
  const colors = colorStyles[colorScheme];

  return (
    <div className={`max-w-md w-full rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 ${colors.bg}`}>
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">
          {title}
        </h3>
        
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-white opacity-80 mr-2" />
          <p className="text-white opacity-80 text-sm">
            {location}
          </p>
        </div>
        
        <div className="flex items-center mb-4">
          <Calendar size={16} className="text-white opacity-80 mr-2" />
          <p className="text-white opacity-80 text-sm">
            {dates}
          </p>
        </div>
        
        <p className="text-white opacity-90 mb-6 text-sm">
          {type}
        </p>
        
        <div className="flex gap-3">
          <Link
            to={`/enroll/${id}`}
            className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${colors.button}`}
          >
            {t('projects.register')}
          </Link>
          
          <Link
            to={`/courses/${id}`}
            className={`py-2 px-4 rounded-full text-sm font-medium border transition-colors ${colors.outline}`}
          >
            {t('projects.infopack')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;