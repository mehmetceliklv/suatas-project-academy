import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import lightLogo from '../assets/images/3-removebg-preview.png';
import darkLogo from '../assets/images/2-removebg-preview.png';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a href="/" onClick={handleLogoClick} className="flex items-center">
      <img 
        src={isScrolled ? darkLogo : lightLogo} 
        alt="Suatas Project Academy" 
        className="h-16 md:h-32 w-auto transition-all duration-300"
      />
    </a>
  );
};

export default Logo;