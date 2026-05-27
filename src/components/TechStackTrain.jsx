import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHardHat, FaDocker } from 'react-icons/fa';
import { SiSolidity, SiFirebase, SiMongodb, SiTailwindcss, SiExpress, SiPostgresql, SiRedis, SiOpencv, SiTensorflow, SiTypescript, SiGo, SiFastapi } from 'react-icons/si';
import SectionHeading from './SectionHeading';

const TechStackTrain = () => {
  const techStack = [
    { name: 'React',       icon: <FaReact      className="text-sky-500" /> },
    { name: 'TypeScript',  icon: <SiTypescript className="text-blue-400" /> },
    { name: 'Node.js',     icon: <FaNodeJs     className="text-green-500" /> },
    { name: 'Express',     icon: <SiExpress    className="text-hacker-text" /> },
    { name: 'Python',      icon: <FaPython     className="text-yellow-500" /> },
    { name: 'FastAPI',     icon: <SiFastapi    className="text-teal-400" /> },
    { name: 'Go',          icon: <SiGo         className="text-sky-400" /> },
    { name: 'Java',        icon: <FaJava       className="text-red-500" /> },
    { name: 'Solidity',    icon: <SiSolidity   className="text-hacker-muted" /> },
    { name: 'Hardhat',     icon: <FaHardHat    className="text-yellow-600" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Firebase',    icon: <SiFirebase   className="text-yellow-500" /> },
    { name: 'PostgreSQL',  icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'MongoDB',     icon: <SiMongodb    className="text-green-600" /> },
    { name: 'Redis',       icon: <SiRedis      className="text-red-500" /> },
    { name: 'Docker',      icon: <FaDocker     className="text-blue-500" /> },
    { name: 'TensorFlow',  icon: <SiTensorflow className="text-orange-500" /> },
    { name: 'OpenCV',      icon: <SiOpencv     className="text-green-500" /> },
    { name: 'Git',         icon: <FaGitAlt     className="text-orange-500" /> },
  ];

  // duplicate for seamless infinite loop
  const doubled = [...techStack, ...techStack];
  const itemWidth = 80 + 32; // min-w-[80px] + gap-8
  const loopWidth = techStack.length * itemWidth;

  return (
    <section className="pt-8 pb-8 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <SectionHeading>tech_stack</SectionHeading>
          <p className="text-sm text-hacker-muted mb-4 text-left font-mono">
            Technologies I work with
          </p>
        </div>

        <div className="relative h-24 overflow-hidden">
          <motion.div
            className="flex gap-8 items-center absolute top-0 left-0"
            style={{ width: loopWidth * 2 }}
            animate={{ x: [0, -loopWidth] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {doubled.map((tech, index) => (
              <div
                key={index}
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
