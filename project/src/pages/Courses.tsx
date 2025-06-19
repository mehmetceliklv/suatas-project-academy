import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const CourseCard: React.FC<{
  course: {
    id: string;
    titleKey: string;
    descriptionKey: string;
    image: string;
    duration: string;
    location: string;
    startDate: string;
    seats: number;
    price: number;
  };
  onClick: (id: string) => void;
}> = ({ course, onClick }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <img
        src={course.image}
        alt={t(course.titleKey)}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-800 mb-2">{t(course.titleKey)}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{t(course.descriptionKey)}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Clock size={16} className="text-secondary-500 mr-2" />
            <span className="text-sm text-gray-600">{course.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="text-secondary-500 mr-2" />
            <span className="text-sm text-gray-600">{t(course.location)}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="text-secondary-500 mr-2" />
            <span className="text-sm text-gray-600">{course.startDate}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-secondary-500 mr-2" />
            <span className="text-sm text-gray-600">{course.seats} {t('courses.details.seats')}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-600">${course.price}</span>
          <button
            onClick={() => onClick(course.id)}
            className="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors"
          >
            {t('projects.infopack')}
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      id: 'digital-marketing',
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
      image: 'https://images.pexels.com/photos/4262414/pexels-photo-4262414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '12 weeks',
      location: 'projects.project1.location',
      startDate: '07.11.2024',
      seats: 25,
      price: 1499
    },
    {
      id: 'web-development',
      titleKey: 'projects.project2.title',
      descriptionKey: 'projects.project2.description',
      image: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '16 weeks',
      location: 'projects.project2.location',
      startDate: '24.10.2024',
      seats: 20,
      price: 2499
    },
    {
      id: 'data-science',
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
      image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '14 weeks',
      location: 'projects.project1.location',
      startDate: '15.09.2024',
      seats: 30,
      price: 1999
    }
  ];

  const handleCourseClick = (id: string) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="pt-20">
      <div className="bg-primary-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              {t('courses.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('courses.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CourseCard course={course} onClick={handleCourseClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;