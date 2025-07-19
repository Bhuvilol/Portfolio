import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLink } from 'react-icons/hi';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import AnimatedProjectCard from '../components/AnimatedProjectCard';

const projects = [
  {
    title: 'AURA',
    image: '/aura.png',
    category: 'Full-Stack',
    liveDemo: 'https://auralabs.vercel.app/',
    github: 'https://github.com/Bhuvilol/AURA',
    description: `Think Jarvis, but for students who procrastinate better than they plan.  \nAURA is your academic co-pilot, here to organize schedules, answer burning questions, and keep your chaos only slightly less chaotic.\n\nBuilt with React (for snazzy looks), Express (for backend wizardry), and Firebase (so your tasks survive your memory lapses).  \nAURA chats with you using OpenRouter AI—finally, answers without judgment.  \nDrag, drop, quiz, flashcard, and get motivational quotes shorter than your attention span.  \nStyled with styled-components, animated with framer-motion, and sprinkled with Spline 3D—because productivity should look cool.\n\nAURA: For students who want to get things done, but also want their apps to look like sci-fi.  \nBecause Google Calendar never told you to “keep calm and finish that assignment.” But AURA just might.`,
    techStack: 'React • Express • Node.js • Firebase • OpenRouter AI • framer-motion • Spline 3D • katex',
  },
  {
    title: 'Genz-Hunterz',
    image: '/genz.jpg',
    category: 'Game',
    liveDemo: 'https://github.com/Bhuvilol/GenZ-Hunterz/raw/refs/heads/main/GenzHunterz.jar',
    github: 'https://github.com/Bhuvilol/GenZ-Hunterz',
    description: `Ever wanted to be a pixelated hero in a world where your biggest enemy is your own inventory management skills? Welcome to GenZ-Hunterz — where Java meets nostalgia and your character can be a Fighter, Rogue, or Sorcerer (because apparently, being indecisive about your career path is a universal experience).\n\nThis retro-inspired 2D adventure game is like if Minecraft had a midlife crisis and decided to become a top-down RPG. You'll battle monsters, collect loot that you'll probably hoard but never use, and chat with NPCs who have more personality than your average dating app match.\n\nBuilt with pure Java (because sometimes the classics are classics for a reason), featuring pixel art that's so retro it might give you flashbacks to dial-up internet. Complete with an inventory system that's more organized than your actual life, customizable controls, and a debug mode for when you want to feel like a real developer.\n\nBecause sometimes you need to escape reality by diving into a world where your biggest problem is whether to use that health potion now or save it for later.`,
    techStack: 'Java • Swing • AWT • JAR Packaging • Pixel Art • 2D Graphics',
  },
  {
    title: 'Job Portal',
    image: 'https://placehold.co/400x250/dc2626/ffffff?text=Job+Portal',
    category: 'Web App',
    description: 'A job portal web application. (More details coming soon!)',
    techStack: 'React • Node.js',
  },
  {
    title: 'Bookstore App',
    image: 'https://placehold.co/400x250/7c3aed/ffffff?text=Bookstore+App',
    category: 'E-commerce',
    description: 'An e-commerce bookstore app. (More details coming soon!)',
    techStack: 'React • Redux',
  },
  {
    title: 'Pentagon Tokens',
    image: 'https://placehold.co/400x250/f59e0b/ffffff?text=Pentagon+Tokens',
    category: 'Web3',
    description: 'A Web3 token project. (More details coming soon!)',
    techStack: 'Solidity • Web3.js',
  },
  {
    title: 'TODO App',
    image: 'https://placehold.co/400x250/10b981/ffffff?text=TODO+App',
    category: 'Productivity',
    description: 'A productivity TODO app. (More details coming soon!)',
    techStack: 'React',
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

// Custom scrollbar styles for modal
const modalScrollbarStyles = `
  .modal-scrollbar::-webkit-scrollbar {
    width: 14px;
  }
  .modal-scrollbar::-webkit-scrollbar-thumb {
    background: #2563eb; /* blue-600 */
    border-radius: 8px;
    border: 3px solid #e0e7ef;
    min-height: 40px;
    transition: background 0.2s;
  }
  .modal-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1d4ed8; /* blue-700 */
  }
  .dark .modal-scrollbar::-webkit-scrollbar-thumb {
    background: #60a5fa; /* blue-400 */
    border: 3px solid #1e293b;
  }
  .dark .modal-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #3b82f6; /* blue-500 */
  }
  .modal-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
`;

// Modal component for project details
const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <>
      <style>{modalScrollbarStyles}</style>
      <AnimatePresence>
        {isOpen && project && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
            />
            {/* Modal Box */}
            <motion.div
              className="relative w-full max-w-md aspect-square mx-4 sm:mx-0 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-0 overflow-hidden flex flex-col"
              style={{ maxHeight: '80vh', minHeight: '350px' }}
              initial={{ y: 40, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-red-500 hover:text-white hover:scale-110 transition-all text-2xl"
                onClick={onClose}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="p-6 pt-8 sm:p-8 sm:pt-12 flex flex-col h-full">
                <div className="shrink-0">
                  <h3 className="text-2xl font-extrabold mb-3 text-black dark:text-white drop-shadow-xl text-center">{project.title}</h3>
                  <div className="relative w-full h-32 mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-800" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6 z-10">
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="mx-1 p-3 bg-blue-600/40 backdrop-blur-md border border-blue-200/40 dark:border-blue-900/40 text-white rounded-xl shadow-lg ring-2 ring-blue-400/80 ring-offset-2 ring-offset-blue-200/30 transition-all flex items-center justify-center group">
                          {project.title === 'Genz-Hunterz' ? (
                            <HiDownload className="w-7 h-7 group-hover:scale-110 group-active:scale-95 transition-transform" />
                          ) : (
                            <HiLink className="w-7 h-7 group-hover:scale-110 group-active:scale-95 transition-transform" />
                          )}
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mx-1 p-3 bg-gray-800/40 backdrop-blur-md border border-gray-200/40 dark:border-gray-900/40 text-white rounded-xl shadow-lg ring-2 ring-slate-200/80 ring-offset-2 ring-offset-gray-200/30 transition-all flex items-center justify-center group">
                          <FaGithub className="w-7 h-7 group-hover:scale-110 group-active:scale-95 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-0 overflow-y-auto modal-scrollbar">
                  <div className="mb-4">
                    <span className="font-semibold text-black dark:text-white block mb-1">Tech Stack:</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack && project.techStack.split('•').map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-700"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold text-black dark:text-white">Description:</span>
                  </div>
                  <div className="prose dark:prose-invert mb-4 whitespace-pre-line text-gray-800 dark:text-gray-200 max-w-none text-base leading-relaxed">
                    {project.description}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 px-6 max-w-7xl mx-auto">
      <ProjectHeader />
      <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={handleCloseModal} />
      {/* Bento grid for desktop/tablet */}
      <div className="hidden md:grid grid-cols-3 gap-1 auto-rows-[260px]">
        {/* Card 1: Featured, spans 2 columns */}
        <div className="col-span-2 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard
            project={projects[0]}
            size="large"
            minHeight="min-h-[220px]"
            index={0}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onClick={() => handleCardClick(projects[0])}
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
            onClick={() => handleCardClick(projects[1])}
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
            onClick={() => handleCardClick(projects[2])}
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
            onClick={() => handleCardClick(projects[3])}
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
            onClick={() => handleCardClick(projects[4])}
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
            onClick={() => handleCardClick(projects[5])}
          />
        </div>
      </div>
      {/* Fallback for mobile: simple vertical list */}
      <div className="grid md:hidden grid-cols-1 gap-1">
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={index}
            project={project}
            size="medium"
            minHeight="min-h-[220px]"
            index={index}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 

