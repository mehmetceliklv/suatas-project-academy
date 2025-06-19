import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const News: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const newsItems = [
    {
      id: 1,
      title: "2025 #DEOR Meeting Completed",
      date: "16.05.2025",
      icon: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      id: 2,
      title: "Stars League Erasmus+ Center Projects Information Meeting",
      date: "07.05.2025",
      icon: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 3,
      title: "2025 Higher Education Mobility Consortium Results",
      date: "30.04.2025",
      icon: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      id: 4,
      title: "Erasmus+ Vocational Excellence Centers (CoVE) application deadline is approaching!",
      date: "19.03.2025",
      icon: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    }
  ];

  const events = [
    {
      title: "Erasmus+ Small-Scale Partnerships (KA2): Inclusion & Diversity Partner",
      date: "4",
      month: "June",
      day: "Wednesday",
      category: "Youth Education and Cooperation Activities (TCA-Youth)"
    },
    {
      title: "Introduction Training for Newcomers to Youth Exchanges BiTriMulti",
      date: "4",
      month: "June",
      day: "Wednesday",
      category: "Youth Education and Cooperation Activities (TCA-Youth)"
    },
    {
      title: "Training for ESC mentors (in French language) / Formatio de tuteurs",
      date: "3",
      month: "June",
      day: "Tuesday",
      category: "European Solidarity Corps Network Activities (ESCNET)"
    },
    {
      title: "Online Partner Finding Fair for Teachers",
      date: "2",
      month: "June",
      day: "Monday",
      category: "Erasmus+ School Education field (TCA-SCH)"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/60 to-[#3f8eff]/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              {t('news.title')}
            </h1>
            <p className="text-xl text-[#f8f7da]">
              {t('news.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* News Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0b1e3f] mb-6">{t('news.latestNews')}</h2>
            <div className="bg-white rounded-lg shadow-sm p-4">
              {newsItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 transition-colors
                    ${index !== newsItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <img 
                    src={item.icon}
                    alt=""
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                    <h3 className="text-[#0b1e3f]">{item.title}</h3>
                    <button className="text-[#3f8eff] text-sm mt-2 hover:underline">
                      {t('news.readMore')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0b1e3f] mb-6">{t('news.upcomingEvents')}</h2>
            <div className="bg-white rounded-lg shadow-sm p-4">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className={`flex gap-4 p-4 cursor-pointer hover:bg-gray-50 transition-colors
                    ${index !== events.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="text-center">
                    <div className="bg-[#e5fb52] rounded p-2 min-w-[48px]">
                      <div className="text-xl font-bold text-[#0b1e3f]">{event.date}</div>
                      <div className="text-xs text-[#0b1e3f]">{event.month}</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#3f8eff] mb-1">{event.day}</p>
                    <h3 className="text-[#0b1e3f] mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.category}</p>
                    <button className="text-[#3f8eff] text-sm mt-2 hover:underline">
                      {t('news.registerNow')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;