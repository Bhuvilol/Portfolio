import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import TechStackTrain from './components/TechStackTrain';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Navbar />

      {/* Two-column layout: content left, terminal right */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">
          
          {/* ── Left column: all content ── */}
          <main className="flex-1 min-w-0">
            <Home />
            <TechStackTrain />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* ── Right column: sticky terminal ── */}
          <aside className="hidden lg:block lg:w-[36%] xl:w-[35%] shrink-0 pt-8">
            <div className="sticky top-8" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
              <Terminal />
            </div>
          </aside>

        </div>
      </div>

      <Footer />
      <FloatingDock />
    </div>
  );
}

export default App;
