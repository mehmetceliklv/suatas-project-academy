import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const courses = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    price: 1499
  },
  {
    id: 'web-development',
    title: 'Web Development Bootcamp',
    price: 2499
  },
  {
    id: 'data-science',
    title: 'Data Science Fundamentals',
    price: 1999
  }
];

const Enrollment: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      <div className="bg-primary-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              {t('enrollment.title')} {course.title}
            </h1>
            <p className="text-xl text-primary-100">
              {t('enrollment.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('enrollment.form.firstName')}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('enrollment.form.lastName')}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('enrollment.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('enrollment.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('enrollment.form.education.label')}
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">{t('enrollment.form.education.placeholder')}</option>
                <option value="high-school">{t('enrollment.form.education.options.highSchool')}</option>
                <option value="bachelors">{t('enrollment.form.education.options.bachelors')}</option>
                <option value="masters">{t('enrollment.form.education.options.masters')}</option>
                <option value="phd">{t('enrollment.form.education.options.phd')}</option>
                <option value="other">{t('enrollment.form.education.options.other')}</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('enrollment.form.experience.label')}
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={4}
                placeholder={t('enrollment.form.experience.placeholder')}
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('enrollment.form.motivation.label')}
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={4}
                placeholder={t('enrollment.form.motivation.placeholder')}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors"
              >
                {t('enrollment.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;