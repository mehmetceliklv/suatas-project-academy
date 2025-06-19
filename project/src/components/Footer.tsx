import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/suatas.project.academy',
      label: 'Facebook',
      color: 'hover:bg-[#1877F2]'
    },
    {
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/suatas.project.academy/',
      label: 'Instagram',
      color: 'hover:bg-[#E4405F]'
    },
    {
      icon: <Youtube size={20} />,
      url: 'https://www.youtube.com/@suatastalks',
      label: 'Youtube',
      color: 'hover:bg-[#FF0000]'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/company/suatas-project-academy',
      label: 'LinkedIn',
      color: 'hover:bg-[#0A66C2]'
    }
  ];

  return (
    <footer className="bg-[#0b1e3f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div>
            <Logo isScrolled={true} />
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                  transition-all duration-300 ${link.color} hover:text-white hover:scale-110`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="mr-3" />
                <a 
                  href="mailto:suatasconsultation@gmail.com"
                  className="hover:text-[#e5fb52] transition-colors"
                >
                  suatasconsultation@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-3" />
                <span>Kaišiadorys, Lithuania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Suatas Project Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;