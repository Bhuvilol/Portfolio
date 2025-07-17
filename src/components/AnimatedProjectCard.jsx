import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const AnimatedProjectCard = ({ project, className, size = 'medium', minHeight = 'min-h-[220px]', index, hoveredIndex, onHover, cursorPosition }) => {
  const [localCursor, setLocalCursor] = useState({ x: 0, y: 0 });
  
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
  const isHovered = hoveredIndex === index;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setLocalCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      className={`relative block h-full w-full cursor-pointer p-4 group ${minHeight} ${getSizeClasses()} ${className || ''}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={handleMouseMove}
      onClick={() => project.liveDemo && window.open(project.liveDemo, '_blank')}
    >
      {/* Full card background that follows cursor */}
      <motion.div
        className="absolute bg-gray-600 dark:bg-white/40 rounded-3xl z-10 pointer-events-none"
        style={{
          inset: 0,
          opacity: isHovered ? 0.9 : 0,
          background: isHovered ? `radial-gradient(circle at ${localCursor.x}px ${localCursor.y}px, rgba(75, 85, 99, 0.9) 0%, rgba(75, 85, 99, 0.5) 50%, transparent 100%)` : 'transparent',
        }}
        transition={{ 
          duration: 0.1
        }}
      />
      
      <div className="relative h-full w-full min-h-[220px] rounded-3xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out z-20">
        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <img 
            src={project.image} 
            alt={`${project.title} demo`} 
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
            <div className={`absolute bottom-0 left-0 right-0 ${contentClasses.container} transition-all duration-300 ${isHovered ? '-translate-y-10' : ''}`}>
              <span className={`inline-block bg-white/25 backdrop-blur-md text-white font-semibold rounded-full mb-3 border border-white/20 ${contentClasses.badge}`}>
                {project.category}
              </span>
              <h3 className={`font-bold text-white leading-tight ${contentClasses.title}`}>
                {project.title}
              </h3>
            </div>
            
            {/* Icons positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className={`flex gap-2 transition-all duration-300 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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