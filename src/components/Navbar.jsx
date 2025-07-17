import React, { useState, useEffect } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="flex items-center justify-center px-12 py-4 bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow border-b border-gray-200 dark:border-gray-800 rounded-xl max-w-5xl mx-auto mt-6">
      <div className="flex items-center justify-between w-full gap-12">
        <img 
          src={isDark ? "/bb-logo-dark.png" : "/bb-logo-light.png"} 
          alt="BB brand logo" 
          className="h-10 w-auto" 
        />
        <ul className="hidden md:flex gap-12 font-semibold text-gray-800 dark:text-gray-100 text-lg">
          <li><a href="#home" onClick={(e) => handleClick(e, 'home')} className="hover:text-gray-500 transition cursor-pointer">Home</a></li>
          <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="hover:text-gray-500 transition cursor-pointer">Projects</a></li>
          <li><a href="#achievements" onClick={(e) => handleClick(e, 'achievements')} className="hover:text-gray-500 transition cursor-pointer">Achievements</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="hover:text-gray-500 transition cursor-pointer">Contact</a></li>
        </ul>
        <div className="flex items-center gap-6 ml-8">
          <ThemeToggleButton className="animate-in zoom-in-95 duration-300" />
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
            <img src="/logo.png" alt="profile logo" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 