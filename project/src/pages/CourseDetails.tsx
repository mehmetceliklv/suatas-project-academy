import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Clock, Users, BookOpen, Trophy, CheckCircle } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCourseData = () => {
    switch (id) {
      case 'digital-marketing':
        return {
          title: t('projects.project1.title'),
          description: t('projects.project1.description'),
          image: 'https://images.pexels.com/photos/4262414/pexels-photo-4262414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          duration: '12 weeks',
          location: t('projects.project1.location'),
          startDate: t('projects.project1.dates').split(': ')[1],
          seats: 25,
          certificate: 'Professional Certificate',
          price: 1499,
          curriculum: t('projects.project1.curriculum', { returnObjects: true }),
          outcomes: t('projects.project1.outcomes', { returnObjects: true })
        };
      case 'web-development':
        return {
          title: t('projects.project2.title'),
          description: t('projects.project2.description'),
          image: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          duration: '16 weeks',
          location: t('projects.project2.location'),
          startDate: t('projects.project2.dates').split(': ')[1],
          seats: 20,
          certificate: 'Professional Certificate',
          price: 2499,
          curriculum: t('projects.project2.curriculum', { returnObjects: true }),
          outcomes: t('projects.project2.outcomes', { returnObjects: true })
        };
      default:
        return null;
    }
  };

  const course = getCourseData();

  if (!course) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{t('courses.details.notFound')}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="bg-primary-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              {course.title}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {course.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{t('courses.details.duration')}: {course.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{t('courses.details.location')}: {course.location}</span>
              </div>
              <div className="flex items-center">
                <Users size={20} className="mr-2" />
                <span>{course.seats} {t('courses.details.seats')}</span>
              </div>
              <div className="flex items-center">
                <Trophy size={20} className="mr-2" />
                <span>{t('courses.details.certificate')}: {course.certificate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">{t('courses.details.curriculum')}</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <ul className="space-y-4">
                    {course.curriculum.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <BookOpen size={20} className="text-secondary-500 mr-3 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary-800 mb-6">{t('courses.details.outcomes')}</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <ul className="space-y-4">
                    {course.outcomes.map((outcome: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-secondary-500 mr-3 mt-1" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-800 mb-2">
                    ${course.price}
                  </div>
                  <div className="text-gray-600">
                    {t('courses.details.nextIntake')}: {course.startDate}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/enroll/${id}`)}
                  className="w-full py-3 px-6 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors mb-4"
                >
                  {t('courses.details.enrollNow')}
                </button>
                <div className="text-sm text-gray-600 text-center">
                  {t('courses.details.limitedSeats')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails