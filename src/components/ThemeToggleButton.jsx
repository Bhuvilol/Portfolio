import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const toggleDarkMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
};

const ThemeToggleButton = ({ className = '' }) => {
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

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className={`flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg text-gray-800 dark:text-gray-100 hover:bg-white/20 dark:hover:bg-gray-800/20 transition ${className}`}
    >
      {isDark ? (
        // Sun icon for dark theme
        <FaSun className="w-6 h-6 transition-all duration-300 ease-in-out transform rotate-0" />
      ) : (
        // Moon icon for light theme
        <FaMoon className="w-6 h-6 transition-all duration-300 ease-in-out transform rotate-0" />
      )}
    </button>
  );
};

export default ThemeToggleButton; 