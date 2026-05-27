import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { openCommandPalette } from './commandPaletteEvents';

const NAV_LINKS = [
  { id: 'home', label: '~/home' },
  { id: 'projects', label: '~/projects' },
  { id: 'achievements', label: '~/achievements' },
  { id: 'workshops', label: '~/workshops' },
  { id: 'contact', label: '~/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="w-full border-b border-hacker-border bg-hacker-bg/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between h-14 gap-2">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="font-mono text-base sm:text-lg font-bold text-hacker-green hover:text-glow-green transition shrink-0"
        >
          ~/bhuvi
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 font-mono text-sm text-hacker-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="hover:text-hacker-green transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/resume_ai_ml.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-2.5 py-1.5 sm:px-3 border border-hacker-green text-hacker-green rounded hover:bg-hacker-green/10 transition-all duration-300 whitespace-nowrap"
          >
            ./resume.sh
          </a>
          <button
            onClick={openCommandPalette}
            className="hidden lg:inline-flex items-center gap-1.5 font-mono text-xs text-hacker-muted border border-hacker-border rounded px-2 py-1 hover:border-hacker-green/50 hover:text-hacker-text transition-colors"
            aria-label="Open command palette"
          >
            <kbd className="text-hacker-green">⌘K</kbd>
            <span>menu</span>
          </button>
          <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-hacker-muted">
            <span className="w-2 h-2 rounded-full bg-hacker-green animate-pulse-green"></span>
            <span>online</span>
          </div>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 border border-hacker-border rounded text-hacker-green hover:border-hacker-green transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-hacker-border bg-hacker-bg/95 backdrop-blur-sm">
          <ul className="flex flex-col font-mono text-sm text-hacker-muted px-4 sm:px-6 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className="block py-3 px-2 rounded hover:bg-hacker-surface/60 hover:text-hacker-green transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-t border-hacker-border mt-2 pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => openCommandPalette(), 50);
                }}
                className="w-full text-left py-3 px-2 rounded text-hacker-green hover:bg-hacker-green/10 transition"
              >
                {'>'} open command palette
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
