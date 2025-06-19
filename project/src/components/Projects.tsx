import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

// This would typically come from an API or CMS
const projects = [
  {
    id: 'digital-marketing',
    imageUrl: 'https://images.pexels.com/photos/4262414/pexels-photo-4262414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    titleKey: 'projects.project1.title',
    locationKey: 'projects.project1.location',
    datesKey: 'projects.project1.dates',
    typeKey: 'projects.project1.type',
    color: 'primary',
  },
  {
    id: 'web-development',
    imageUrl: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    titleKey: 'projects.project2.title',
    locationKey: 'projects.project2.location',
    datesKey: 'projects.project2.dates',
    typeKey: 'projects.project2.type',
    color: 'secondary',
  },
  {
    id: 'data-science',
    imageUrl: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    titleKey: 'projects.project1.title',
    locationKey: 'projects.project1.location',
    datesKey: 'projects.project1.dates',
    typeKey: 'projects.project1.type',
    color: 'accent',
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 2 ? 0 : prevIndex + 1));
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 2);
  
  if (visibleProjects.length < 2) {
    visibleProjects.push(...projects.slice(0, 2 - visibleProjects.length));
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display tracking-wide">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
        </div>
        
        <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap mb-10">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`transition-all duration-700 delay-${index * 300} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <ProjectCard
                id={project.id}
                imageUrl={project.imageUrl}
                title={t(project.titleKey)}
                location={t(project.locationKey)}
                dates={t(project.datesKey)}
                type={t(project.typeKey)}
                colorScheme={project.color as 'primary' | 'secondary' | 'accent'}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all"
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all"
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-block py-3 px-6 bg-secondary-500 hover:bg-secondary-600 text-white rounded-full font-medium transition-all shadow-lg transform hover:scale-105"
          >
            {t('projects.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;