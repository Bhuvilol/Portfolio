import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const AnimatedProjectCard = ({ project, className, size = 'medium', minHeight = 'min-h-[220px]', index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 lg:col-span-2';
      case 'medium':
        return 'md:col-span-1 lg:col-span-1';
      case 'small':
        return 'md:col-span-1 lg:col-span-1';
      default:
        return 'md:col-span-1 lg:col-span-1';
    }
  };

  const getContentClasses = () => {
    switch (size) {
      case 'large':
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
        };
      case 'medium':
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
        };
      case 'small':
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
        };
      default:
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
        };
    }
  };

  const contentClasses = getContentClasses();

  return (
    <div
      className={`relative block h-full w-full cursor-pointer p-4 group ${minHeight} ${getSizeClasses()} ${className || ''}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => project.liveDemo && window.open(project.liveDemo, '_blank')}
    >
      {/* Hover background overlay - covers entire card area including padding */}
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-gray-400 dark:bg-white/40 block rounded-3xl z-10 pb-4"
            style={{ 
              height: 'calc(100% + 1rem)', 
              bottom: '-1rem',
              borderRadius: '1.5rem'
            }}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      
      <div className="relative h-full w-full min-h-[220px] rounded-3xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out z-20">
        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <img 
            src={project.image} 
            alt={`${project.title} demo`} 
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
            <div className={`absolute bottom-0 left-0 right-0 ${contentClasses.container} transition-all duration-300 group-hover:-translate-y-10`}>
              <span className={`inline-block bg-white/25 backdrop-blur-md text-white font-semibold rounded-full mb-3 border border-white/20 ${contentClasses.badge}`}>
                {project.category}
              </span>
              <h3 className={`font-bold text-white leading-tight ${contentClasses.title}`}>
                {project.title}
              </h3>
            </div>
            
            {/* Icons positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button 
                  className={`p-2 backdrop-blur-md text-white rounded-lg border border-white/20 transition-all duration-200 ${project.liveDemo ? 'bg-white/25 hover:bg-white/35' : 'bg-white/10 opacity-50 cursor-not-allowed'}`}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (project.liveDemo) {
                      window.open(project.liveDemo, '_blank');
                    }
                  }}
                  title={project.liveDemo ? "Live Demo" : "No live demo available"}
                >
                  <HiLink className="w-4 h-4" />
                </button>
                <button 
                  className={`p-2 backdrop-blur-md text-white rounded-lg border border-white/20 transition-all duration-200 ${project.github ? 'bg-white/25 hover:bg-white/35' : 'bg-white/10 opacity-50 cursor-not-allowed'}`}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (project.github) {
                      window.open(project.github, '_blank');
                    }
                  }}
                  title={project.github ? "GitHub Repository" : "No GitHub repository available"}
                >
                  <FaGithub className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProjectCard; 