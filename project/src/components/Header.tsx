import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Camera } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';

  const languages = [
    { 
      code: 'en', 
      name: 'English',
      flag: 'https://flagcdn.com/w40/gb.png'
    },
    { 
      code: 'es', 
      name: 'Español',
      flag: 'https://flagcdn.com/w40/es.png'
    },
    { 
      code: 'pt', 
      name: 'Português',
      flag: 'https://flagcdn.com/w40/pt.png'
    },
    { 
      code: 'tr', 
      name: 'Türkçe',
      flag: 'https://flagcdn.com/w40/tr.png'
    },
    { 
      code: 'lt', 
      name: 'Lietuvių',
      flag: 'https://flagcdn.com/w40/lt.png'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current && 
        !langMenuRef.current.contains(event.target as Node) &&
        !langButtonRef.current?.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled ? 'bg-white shadow-md' : 'bg-transparent';
    }
    return 'bg-[#0b1e3f]';
  };

  const getLinkStyle = () => {
    if (isHomePage) {
      return isScrolled 
        ? 'text-[#0b1e3f] hover:text-[#3f8eff]' 
        : 'text-white hover:text-[#e5fb52]';
    }
    return 'text-white hover:text-[#e5fb52]';
  };

  const menuItems = [
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/resources', label: t('nav.resources') },
    { path: '/news', label: t('nav.news') },
    { path: '/gallery', label: t('nav.gallery'), icon: <Camera size={18} className="mr-2" /> },
    { path: '/contacts', label: t('nav.contacts') }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-1 md:py-2' : 'py-2 md:py-4'
      } ${getHeaderStyle()}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-24 md:w-auto">
          <Logo isScrolled={isScrolled && isHomePage} />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-base font-medium">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`transition-colors ${getLinkStyle()} flex items-center`}
                >
                  {item.icon && item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Desktop Language Selector */}
          <div className="relative" ref={langMenuRef}>
            <button 
              ref={langButtonRef}
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
              className={`flex items-center space-x-2 transition-colors ${getLinkStyle()}`}
            >
              <Globe size={18} />
              <img 
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                className="w-6 h-4 object-cover rounded"
              />
              <span className="uppercase text-xs">{currentLanguage.code}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center w-full px-4 py-2 text-sm transition-colors
                      ${i18n.language === lang.code 
                        ? 'bg-[#f8f7da] text-[#0b1e3f]' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <img 
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      className="w-6 h-4 object-cover rounded mr-3"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 focus:outline-none transition-colors ${getLinkStyle()}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-300 md:hidden
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#0b1e3f] hover:text-[#3f8eff] transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="container mx-auto px-4 pt-24 pb-8 h-full overflow-y-auto">
          {/* Language Selector in Mobile Menu */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">Select Language</h3>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all
                    ${i18n.language === lang.code 
                      ? 'bg-[#f8f7da] text-[#0b1e3f]' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <img 
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    className="w-6 h-4 object-cover rounded"
                  />
                  <span className="font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-semibold text-[#0b1e3f] hover:text-[#3f8eff] transition-colors
                flex items-center"
              >
                {item.icon && item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;