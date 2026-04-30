import React from 'react';

const Navbar = () => {
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
    <nav className="w-full border-b border-hacker-border bg-hacker-bg/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="font-mono text-lg font-bold text-hacker-green hover:text-glow-green transition">
          ~/bhuvi
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex gap-8 font-mono text-sm text-hacker-muted">
          <li><a href="#home" onClick={(e) => handleClick(e, 'home')} className="hover:text-hacker-green transition">~/home</a></li>
          <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="hover:text-hacker-green transition">~/projects</a></li>
          <li><a href="#achievements" onClick={(e) => handleClick(e, 'achievements')} className="hover:text-hacker-green transition">~/achievements</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="hover:text-hacker-green transition">~/contact</a></li>
        </ul>

        {/* Status indicator */}
        <div className="flex items-center gap-2 font-mono text-xs text-hacker-muted">
          <span className="w-2 h-2 rounded-full bg-hacker-green animate-pulse-green"></span>
          <span className="hidden sm:inline">online</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;