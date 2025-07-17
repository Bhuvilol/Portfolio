import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import { HiLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const AnimatedProjectCard = ({ project, className, size = 'medium', index, hoveredIndex, onHover }) => {
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
          buttonContainer: 'flex gap-2 mt-3'
        };
      case 'medium':
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
          buttonContainer: 'flex gap-2 mt-3'
        };
      case 'small':
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
          buttonContainer: 'flex gap-2 mt-3'
        };
      default:
        return {
          container: 'p-6',
          badge: 'px-3 py-1.5 text-xs',
          title: 'text-xl mb-2',
          buttonContainer: 'flex gap-2 mt-3'
        };
    }
  };

  const contentClasses = getContentClasses();

  return (
    <div
      className={cn(
        "relative group block h-full w-full cursor-pointer p-4",
        getSizeClasses(),
        className
      )}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-black/20 dark:bg-white/20 block rounded-3xl shadow-xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.38, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.28, ease: 'easeIn' },
            }}
          />
        )}
      </AnimatePresence>
      
      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 group-hover:shadow-2xl transition-all duration-300 ease-in-out z-20">
        <div className="relative h-full">
          <motion.img 
            src={project.image} 
            alt={`${project.title} demo`} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
            <div className={cn("absolute bottom-0 left-0 right-0", contentClasses.container)}>
              <span className={cn(
                "inline-block bg-white/25 backdrop-blur-md text-white font-semibold rounded-full mb-3 border border-white/20",
                contentClasses.badge
              )}>
                {project.category}
              </span>
              <h3 className={cn("font-bold text-white leading-tight", contentClasses.title)}>
                {project.title}
              </h3>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    className={cn("flex gap-2", contentClasses.buttonContainer)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 20,
                      transition: { 
                        duration: 0.15,
                        ease: "easeIn"
                      }
                    }}
                  >
                    <motion.button 
                      className="p-2 bg-white/25 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/35 transition-all duration-200"
                      onClick={() => window.open('#', '_blank')}
                      title="Live Demo"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiLink className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      className="p-2 bg-white/25 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/35 transition-all duration-200"
                      onClick={() => window.open('#', '_blank')}
                      title="GitHub Repository"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProjectCard; 