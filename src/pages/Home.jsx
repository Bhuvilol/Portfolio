import React from 'react';
import FlipWords from '../components/FlipWords';

const Home = () => (
  <section id="home" className="h-[90x flex flex-col justify-start items-center pt-12 pb-0">
    <img src="/profile.jpg" alt="Bhabesh Behera" className="w-48 h-48 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-8 shadow-xl object-cover" />
    <h1 className="text-4xl md:text-5 font-extrabold mb-4 text-center leading-tight">Hi, I'm Bhabesh Behera.<br />
      <span className="text-black dark:text-white">
        <FlipWords words={["Software Engineer", "Web3 Builder", "Full-Stack Developer", "Security Analyst"]} />
      </span>
    </h1>
    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl font-medium">Relentless self-taught developer, passionate about crafting minimalistic solutions, and driven to grow in tech.</p>
    <a href="#contact" className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition mb-6 text-lg border border-gray-300 dark:border-gray-700">Hire Me!</a>
    <div className="flex gap-4 items-center mb-2">
      <span className="text-base text-gray-500">Available for collaborations</span>
    </div>
  </section>
);

export default Home; 