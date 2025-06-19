import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      quote: "Working with Suatas Project Academy transformed our approach to project management and opened new doors for international collaboration."
    },
    {
      name: "Jane Smith",
      role: "Youth Worker",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "The training programs provided invaluable insights for our youth initiatives. The practical approach and expert guidance made all the difference."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#0b1e3f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f] to-[#3f8eff]/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-12">
            <Quote size={48} className="text-[#e5fb52]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-display">
            {t('testimonials.title')}
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 z-10 p-2 text-white hover:text-[#e5fb52] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={40} />
              </button>
              
              <div className="w-full px-16">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-500 ${
                      currentIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 hidden'
                    }`}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#e5fb52] ring-offset-4 ring-offset-[#0b1e3f]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-xl text-[#f8f7da] mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="text-white font-bold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#e5fb52]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 z-10 p-2 text-white hover:text-[#e5fb52] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={40} />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? 'w-8 bg-[#e5fb52]' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;