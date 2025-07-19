import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHardHat, FaFigma, FaDocker } from 'react-icons/fa';
import { SiSolidity, SiFirebase, SiPostman, SiMongodb, SiTailwindcss, SiExpress, SiApachekafka } from 'react-icons/si';

const TechStackTrain = () => {
  const techStack = [
    { name: 'ReactJS', icon: <FaReact className="text-sky-500" /> },
    { name: 'ExpressJS', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    { name: 'Solidity', icon: <SiSolidity className="text-gray-700 dark:text-gray-300" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500 dark:text-yellow-400" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'HardHat', icon: <FaHardHat className="text-yellow-600" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'Kafka', icon: <SiApachekafka className="text-orange-500" /> },
  ];

  // Calculate the total width of one train
  const trainWidth = techStack.length * 88; // 80px min-width + 8px gap
  const gapBetweenTrains = 350; // Increased gap to prevent overlap between Docker and ReactJS

  return (
    <section className="pt-8 pb-8 overflow-hidden mt-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white text-left drop-shadow-xl">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-left">
            Technologies I work with
          </p>
        </div>
        
        <div className="relative h-24">
          {/* First train */}
          <motion.div
            className="flex gap-8 items-center absolute top-0"
            animate={{
              x: [0, -trainWidth - gapBetweenTrains],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {techStack.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center gap-2 min-w-[80px]"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-2xl border border-gray-200 dark:border-gray-700">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second train (duplicate for seamless loop) */}
          <motion.div
            className="flex gap-8 items-center absolute top-0"
            animate={{
              x: [trainWidth + gapBetweenTrains, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center gap-2 min-w-[80px]"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-2xl border border-gray-200 dark:border-gray-700">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackTrain; 