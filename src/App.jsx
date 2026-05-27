import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Workshops from './pages/Workshops';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import TechStackTrain from './components/TechStackTrain';
import Terminal from './components/Terminal';
import SideCard from './components/SideCard';
import BootSequence from './components/BootSequence';
import NowBlock from './components/NowBlock';
import CommandPalette from './components/CommandPalette';
import HexGrid from './components/HexGrid';

function App() {
  const [booting, setBooting] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('bhuvi_booted');
  });

  useEffect(() => {
    if (!booting) return;
    sessionStorage.setItem('bhuvi_booted', '1');
  }, [booting]);

  return (
    <>
      {booting && <BootSequence onComplete={() => setBooting(false)} />}

      <div className="relative min-h-screen flex flex-col text-hacker-text font-sans scanlines">
        <HexGrid />
        <div className="relative z-10 flex flex-col flex-1">
        <Navbar />

        {/* Two-column layout: content left, terminal right */}
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">

            {/* ── Left column: all content ── */}
            <main className="flex-1 min-w-0">
              <Home />
              <TechStackTrain />
              <About />
              <NowBlock />
              <Projects />
              <Experience />
              <Workshops />
              <Testimonials />
              <Contact />
            </main>

            {/* ── Right column: sticky terminal + side card ── */}
            <aside className="hidden lg:block lg:w-[36%] xl:w-[35%] shrink-0">
              <div
                className="sticky top-14 flex flex-col gap-4"
                style={{ height: 'calc(100vh - 4.5rem)' }}
              >
                <div style={{ height: '48vh' }}>
                  <Terminal />
                </div>
                <div style={{ height: 'calc(100vh - 4.5rem - 48vh - 1rem)' }}>
                  <SideCard />
                </div>
              </div>
            </aside>

          </div>
        </div>

        <Footer />
        <FloatingDock />
        <CommandPalette />
        </div>
      </div>
    </>
  );
}

export default App;
