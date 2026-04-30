import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHardHat, FaFigma, FaDocker } from 'react-icons/fa';
import { SiSolidity, SiFirebase, SiPostman, SiMongodb, SiTailwindcss, SiExpress, SiApachekafka } from 'react-icons/si';
import SectionHeading from './SectionHeading';

const TechStackTrain = () => {
  const techStack = [
    { name: 'ReactJS', icon: <FaReact className="text-sky-500" /> },
    { name: 'ExpressJS', icon: <SiExpress className="text-hacker-text" /> },
    { name: 'Solidity', icon: <SiSolidity className="text-hacker-muted" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
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

  const trainWidth = techStack.length * 88;
  const gapBetweenTrains = 350;

  return (
    <section className="pt-8 pb-8 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <SectionHeading>tech_stack</SectionHeading>
          <p className="text-sm text-hacker-muted mb-4 text-left font-mono">
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
                className="flex flex-col items-center gap-2 min-w-[80px] group"
              >
                <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center text-2xl border border-hacker-border group-hover:border-hacker-green/50 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-xs font-mono text-hacker-muted text-center group-hover:text-hacker-green transition-colors">
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
                className="flex flex-col items-center gap-2 min-w-[80px] group"
              >
                <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center text-2xl border border-hacker-border group-hover:border-hacker-green/50 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-xs font-mono text-hacker-muted text-center group-hover:text-hacker-green transition-colors">
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