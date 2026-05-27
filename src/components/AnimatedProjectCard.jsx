import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLink } from 'react-icons/hi';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const AnimatedProjectCard = ({ project, className, size = 'medium', minHeight = 'min-h-[220px]', index, hoveredIndex, onHover, onClick }) => {
  const [localCursor, setLocalCursor] = useState({ x: 0, y: 0 });
  
  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 lg:col-span-2';
      default:
        return 'md:col-span-1 lg:col-span-1';
    }
  };

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
      onClick={onClick ? () => onClick(project) : () => project.liveDemo && window.open(project.liveDemo, '_blank')}
    >
      {/* Cursor-following green glow */}
      <motion.div
        className="absolute rounded-2xl z-10 pointer-events-none"
        style={{
          inset: 0,
          opacity: isHovered ? 0.9 : 0,
          background: isHovered ? `radial-gradient(circle at ${localCursor.x}px ${localCursor.y}px, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.05) 40%, transparent 70%)` : 'transparent',
        }}
        transition={{ 
          duration: 0.1
        }}
      />
      
      <div className={`relative h-full w-full rounded-2xl bg-hacker-surface border transition-all duration-300 ease-in-out z-20 ${isHovered ? 'border-hacker-green/50' : 'border-hacker-border'}`}>
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img 
            src={project.image} 
            alt={`${project.title} demo`} 
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${isHovered ? '-translate-y-10' : ''}`}>
              <span className="inline-block bg-hacker-green/20 backdrop-blur-md text-hacker-green font-mono text-xs px-2.5 py-1 rounded border border-hacker-green/30 mb-3">
                {project.category}
              </span>
              <h3 className="font-mono font-bold text-hacker-text leading-tight text-xl mb-2">
                {project.title}
              </h3>
            </div>
            
            {/* Icons positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className={`flex gap-2 transition-all duration-300 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <button 
                  className={`p-2 backdrop-blur-md rounded border transition-all duration-200 ${project.liveDemo ? 'bg-hacker-green/10 border-hacker-green/30 text-hacker-green hover:bg-hacker-green/20' : 'bg-hacker-surface/50 border-hacker-border text-hacker-muted opacity-50 cursor-not-allowed'}`}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (project.liveDemo) {
                      window.open(project.liveDemo, '_blank');
                    }
                  }}
                  title={project.liveDemo ? "Live Demo" : "No live demo available"}
                >
                  {project.title === 'Genz-Hunterz' ? (
                    <HiDownload className="w-4 h-4" />
                  ) : (
                    <HiLink className="w-4 h-4" />
                  )}
                </button>
                <button 
                  className={`p-2 backdrop-blur-md rounded border transition-all duration-200 ${project.github ? 'bg-hacker-surface/50 border-hacker-border text-hacker-text hover:border-hacker-green hover:text-hacker-green' : 'bg-hacker-surface/50 border-hacker-border text-hacker-muted opacity-50 cursor-not-allowed'}`}
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