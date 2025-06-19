import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Lightbulb, Mic } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const activities = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#e5fb52]" />,
      title: "Training & Workshops",
      description: "Organizing trainings and workshops by using non-formal learning",
      gradient: "from-[#0b1e3f] to-[#3f8eff]"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-[#e5fb52]" />,
      title: "Project Guidance",
      description: "Guiding individuals on how to turn passions into EU-funded projects",
      gradient: "from-[#3f8eff] to-[#0b1e3f]"
    },
    {
      icon: <Mic className="w-12 h-12 text-[#e5fb52]" />,
      title: "Knowledge Sharing",
      description: "Running the Suatas Talks Podcast, sharing knowledge from changemakers",
      gradient: "from-[#0b1e3f] to-[#3f8eff]"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#f8f7da]">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1e3f] text-center mb-16 font-display">
            What happens at SUATAS?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${activity.gradient} 
                p-8 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-lg
                hover:shadow-2xl group`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-6 transform transition-transform group-hover:scale-110">
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-white/90">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;