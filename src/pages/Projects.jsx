import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedProjectCard from '../components/AnimatedProjectCard';

const projects = [
  {
    title: 'AURA',
    image: '/aura.png',
    category: 'Full-Stack',
    liveDemo: 'https://auralabs.vercel.app/',
    github: 'https://github.com/Bhuvilol/AURA'
  },
  {
    title: 'Genz-Hunterz',
    image: '/genz.png',
    category: 'Game',
    liveDemo: 'https://github.com/Bhuvilol/GenZ-Hunterz/raw/refs/heads/main/GenzHunterz.jar',
    github: 'https://github.com/Bhuvilol/GenZ-Hunterz'
  },
  {
    title: 'Job Portal',
    image: 'https://placehold.co/400x250/dc2626/ffffff?text=Job+Portal',
    category: 'Web App'
  },
  {
    title: 'Bookstore App',
    image: 'https://placehold.co/400x250/7c3aed/ffffff?text=Bookstore+App',
    category: 'E-commerce'
  },
  {
    title: 'Pentagon Tokens',
    image: 'https://placehold.co/400x250/f59e0b/ffffff?text=Pentagon+Tokens',
    category: 'Web3'
  },
  {
    title: 'TODO App',
    image: 'https://placehold.co/400x250/10b981/ffffff?text=TODO+App',
    category: 'Productivity'
  },
];

const ProjectHeader = () => (
  <div className="col-span-full mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white drop-shadow-xl">My Projects</h2>
    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
      A collection of projects showcasing my journey in software development, from full-stack applications to AI-powered solutions.
    </p>
  </div>
);

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-12 px-6 max-w-7xl mx-auto">
      <ProjectHeader />
      {/* Bento grid for desktop/tablet */}
      <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[260px]">
        {/* Card 1: Featured, spans 2 columns */}
        <div className="col-span-2 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard
            project={projects[0]}
            size="large"
            minHeight="min-h-[220px]"
            index={0}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
        {/* Card 2: Tall, spans 2 rows */}
        <div className="col-span-1 row-span-2 h-full w-full min-h-[480px]">
          <AnimatedProjectCard
            project={projects[1]}
            size="large"
            minHeight="min-h-[480px]"
            index={1}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
        {/* Card 3: Normal */}
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard
            project={projects[2]}
            size="medium"
            minHeight="min-h-[220px]"
            index={2}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
        {/* Card 4: Normal */}
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard
            project={projects[3]}
            size="medium"
            minHeight="min-h-[220px]"
            index={3}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
        {/* Card 5: Normal */}
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard
            project={projects[4]}
            size="medium"
            minHeight="min-h-[220px]"
            index={4}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
        {/* Card 6: Large, spans 2 columns in third row */}
        <div className="col-span-2 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard
            project={projects[5]}
            size="large"
            minHeight="min-h-[220px]"
            index={5}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
      </div>
      {/* Fallback for mobile: simple vertical list */}
      <div className="grid md:hidden grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={index}
            project={project}
            size="medium"
            minHeight="min-h-[220px]"
            index={index}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 

