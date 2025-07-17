import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import TechStackTrain from './components/TechStackTrain';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  const [showFloatingToggle, setShowFloatingToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      if (shouldShow !== showFloatingToggle) {
        setShowFloatingToggle(shouldShow);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showFloatingToggle]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-2">
        <Home />
        <TechStackTrain />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
            <div className={`fixed top-8 right-1/2 z-50 translate-x-1/2 transition-all duration-500 ease-in-out ${
        showFloatingToggle 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform -translate-y-4 pointer-events-none'
      }`}>
        <div className="relative">
          {/* Pulse ring effect */}
          <div 
            className="absolute inset-0 rounded-full bg-gray-700/40 dark:bg-white/40" 
            style={{ 
              animationDelay: '1s',
              animation: 'pulse-slow 2s ease-in-out infinite'
            }}
          ></div>
          <ThemeToggleButton className="shadow-xl w-12 h-12 text-xl relative z-10" />
        </div>
      </div>
    </div>
  );
}

export default App;
