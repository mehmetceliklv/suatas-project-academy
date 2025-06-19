import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { FileText, BookOpen, Target, Download } from 'lucide-react';

const Materials: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const materials = [
    {
      id: 'project-writing',
      title: 'Project Writing Tips',
      description: 'Essential guidelines and best practices for writing successful project proposals',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      icon: <FileText className="w-12 h-12 text-[#e5fb52]" />,
      gradient: 'from-[#0b1e3f] to-[#3f8eff]'
    },
    {
      id: 'project-management',
      title: 'Project Management Tips',
      description: 'Practical strategies and tools for effective project management and implementation',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      icon: <Target className="w-12 h-12 text-[#e5fb52]" />,
      gradient: 'from-[#3f8eff] to-[#0b1e3f]'
    },
    {
      id: 'research-results',
      title: 'Research Results',
      description: 'Findings and insights from our research on youth development and project impact',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      icon: <BookOpen className="w-12 h-12 text-[#e5fb52]" />,
      gradient: 'from-[#0b1e3f] to-[#3f8eff]'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#0b1e3f] py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] opacity-40 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/60 to-[#3f8eff]/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Free Materials
            </h1>
            <p className="text-xl text-[#f8f7da]">
              Access our collection of resources to enhance your project development skills
            </p>
          </div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div
                key={material.id}
                className={`transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48">
                    <img
                      src={material.image}
                      alt={material.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${material.gradient} opacity-90`} />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="transform transition-transform group-hover:scale-110">
                        {material.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {material.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      {material.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#0b1e3f]">Free</span>
                      <button className="flex items-center gap-2 bg-[#e5fb52] text-[#0b1e3f] px-6 py-3 rounded-full 
                        font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
                        Download
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;