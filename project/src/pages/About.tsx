import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Linkedin, ArrowRight, Globe2, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import suatImage from '../assets/images/Genel Ana Sayfa Foto0.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Suat Aksu",
      position: "Founder & CEO",
      image: suatImage,
      linkedin: "https://www.linkedin.com/in/suat-aksu-07b8b91b7/"
    },
    {
      name: "Agnė Grendaitė",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      linkedin: "#"
    },
    {
      name: "Mehmet Çelik",
      position: "Training Coordinator",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      linkedin: "#"
    },
    {
      name: "Emma Thompson",
      position: "International Relations",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      linkedin: "#"
    },
    {
      name: "David Chen",
      position: "Digital Strategy",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      linkedin: "#"
    },
    {
      name: "Sofia Rodriguez",
      position: "Youth Programs",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      linkedin: "#"
    },
    {
      name: "Marcus Anderson",
      position: "Community Manager",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      linkedin: "#"
    },
    {
      name: "Laura Kim",
      position: "Content Creator",
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
      linkedin: "#"
    }
  ];

  const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: happeningsRef, inView: happeningsInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e3f] to-[#3f8eff]/30" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-display">
            {t('about.title')}
          </h1>
        </div>
      </div>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <h2 className="text-4xl font-bold mb-12 text-[#0b1e3f] font-display">
                {t('about.story.title')}
              </h2>
              <div className="prose max-w-none text-lg space-y-6">
                <p className="text-xl font-semibold text-[#3f8eff]">
                  {t('about.story.intro')}
                </p>
                <p>
                  {t('about.story.description')}
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={suatImage}
                alt="Suat Aksu"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 bg-[#f8f7da]">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-8 text-[#0b1e3f] font-display">
              {t('about.mission.title')}
            </h2>
            <p className="text-xl leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section ref={happeningsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            happeningsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-12 text-center text-[#0b1e3f] font-display">
              {t('about.whatWeDo.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/trainings" className="bg-[#f8f7da] p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-[#3f8eff] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#0b1e3f]">
                  {t('about.whatWeDo.training.title')}
                </h3>
                <p>{t('about.whatWeDo.training.description')}</p>
              </Link>
              <Link to="/podcasts" className="bg-[#f8f7da] p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                <Globe2 className="w-12 h-12 text-[#3f8eff] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#0b1e3f]">
                  {t('about.whatWeDo.podcast.title')}
                </h3>
                <p>{t('about.whatWeDo.podcast.description')}</p>
              </Link>
              <Link to="/projects" className="bg-[#f8f7da] p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
                <Users className="w-12 h-12 text-[#3f8eff] mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#0b1e3f]">
                  {t('about.whatWeDo.guidance.title')}
                </h3>
                <p>{t('about.whatWeDo.guidance.description')}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 bg-[#f8f7da]">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${
            teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-16 text-center text-[#0b1e3f] font-display">
              {t('about.team.title')}
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6 transform group-hover:scale-105 transition-all duration-300">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-[#0b1e3f]/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Linkedin className="w-8 h-8 text-white" />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0b1e3f]">{member.name}</h3>
                  <p className="text-[#3f8eff]">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#0b1e3f] font-display">
            {t('about.team.joinUs.title')}
          </h2>
          <p className="text-xl mb-12 text-[#0b1e3f]/80">
            {t('about.team.joinUs.subtitle')}
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-[#e5fb52] text-[#0b1e3f] px-8 py-4 rounded-full 
            text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {t('about.team.joinUs.cta')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;