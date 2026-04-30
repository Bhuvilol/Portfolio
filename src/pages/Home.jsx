import React from 'react';
import FlipWords from '../components/FlipWords';

const Home = () => (
  <section id="home" className="pt-24 pb-0 mb-32 hacker-grid relative">
    <div className="flex flex-col items-start">
      <img 
        src="/profile.jpg" 
        alt="Bhabesh Behera" 
        className="w-40 h-40 rounded-full border border-hacker-green/30 mb-8 object-cover glow-green-sm" 
      />
      <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-left leading-tight text-hacker-text">
        Hi, I'm Bhabesh Behera.<br />
        <span className="text-hacker-green">
          <FlipWords words={["Software Engineer", "Web3 Builder", "Full-Stack Developer", "Security Analyst"]} />
        </span>
      </h1>
      <p className="text-base md:text-lg text-hacker-muted mb-6 text-left max-w-2xl font-sans">
        AI might take my job, but it'll choke on my spaghetti code first.
      </p>
      <a 
        href="#contact" 
        className="inline-block px-6 py-2.5 border border-hacker-green text-hacker-green rounded font-mono text-sm hover:bg-hacker-green/10 transition-all duration-300"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
      >
        ./hire_me.sh
      </a>
      <div className="flex gap-3 items-center mt-4">
        <span className="w-2 h-2 rounded-full bg-hacker-green animate-pulse-green"></span>
        <span className="text-sm text-hacker-muted font-mono">[STATUS: AVAILABLE]</span>
      </div>
    </div>
  </section>
);

export default Home;