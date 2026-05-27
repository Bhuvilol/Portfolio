import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLink } from 'react-icons/hi';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import AnimatedProjectCard from '../components/AnimatedProjectCard';
import SectionHeading from '../components/SectionHeading';

const projects = [
  {
    title: 'TrustSeal',
    image: 'https://placehold.co/400x250/00ff88/0a0a0a?text=TrustSeal',
    category: 'IoT • Web3',
    liveDemo: 'https://0xtrustseal.vercel.app',
    github: 'https://github.com/Bhuvilol/TrustSeal',
    description: `What if your supply chain could snitch on itself?\n\nTrustSeal is a tamper-evident IoT supply chain tracker that combines real-world sensor telemetry with Polygon smart contracts — so when someone messes with your shipment, the blockchain knows before your manager does.\n\nPresented at PROXIMA 2026 in front of 1000+ industry attendees. Built with IoT telemetry pipelines, IPFS-based immutable logging, and Polygon for on-chain custody verification. Cryptographic hashing ensures 100% data integrity across the entire chain.\n\nBecause “trust me bro” is not a valid audit trail.`,
    techStack: 'Polygon • Solidity • IPFS • IoT • Hardhat • C++ • Node.js',
  },
  {
    title: 'Vortex',
    image: 'https://placehold.co/400x250/00ff88/0a0a0a?text=Vortex',
    category: 'Full-Stack',
    liveDemo: 'https://vortex.bhuvism.in',
    github: 'https://github.com/Bhuvilol/TechExpress',
    description: `A full-stack event platform that doesn't fall over when the leaderboard updates.\n\nVortex is a multi-role event & scoring platform with distinct Admin, Jury, and Participant portals — each with their own dashboards, permissions, and chaos. Live leaderboard sync via Socket.IO, JWT auth, and Prisma-backed PostgreSQL schemas designed for high-throughput concurrent scoring.\n\nRESTful APIs hit sub-100ms response times under load. The entire infrastructure runs on Docker Compose for one-command reproducible deploys — cutting setup time by 70%.\n\nSole architect and developer. Scoped, built, and shipped end-to-end under a live event deadline.`,
    techStack: 'React • Express • Node.js • PostgreSQL • Prisma • Socket.IO • JWT • Docker Compose',
  },
  {
    title: 'AURA',
    image: '/aura.png',
    category: 'Full-Stack • AI',
    liveDemo: 'https://auralabs.vercel.app/',
    github: 'https://github.com/Bhuvilol/AURA',
    description: `Think Jarvis, but for students who procrastinate better than they plan.\n\nAURA is your academic co-pilot, here to organize schedules, answer burning questions, and keep your chaos only slightly less chaotic.\n\nBuilt with React (for snazzy looks), Express (for backend wizardry), and Firebase (so your tasks survive your memory lapses). AURA chats with you using OpenRouter AI—finally, answers without judgment. Drag, drop, quiz, flashcard, and get motivational quotes shorter than your attention span.\n\nFor students who want to get things done, but also want their apps to look like sci-fi.`,
    techStack: 'React • Express • Node.js • Firebase • OpenRouter AI • framer-motion • Spline 3D • katex',
  },
  {
    title: 'LicenZ',
    image: 'https://placehold.co/400x250/00ff88/0a0a0a?text=LicenZ',
    category: 'AI • Web3',
    github: 'https://github.com/Bhuvilol/LicenZ',
    description: `AI training data has a provenance problem. LicenZ fixes it.\n\nA decentralized AI licensing platform built on Ethereum — minting and managing 100+ AI assets with immutable on-chain ownership records. Every content hash is verified automatically, cutting manual validation effort by 60%.\n\nIPFS + MetaMask integration reduced asset retrieval latency by 40%. A Dockerized KPI dashboard provides real-time monitoring across content verification pipelines.\n\nBuilt at HackOdisha 2025. Because “I found this dataset online” is not a license.`,
    techStack: 'Ethereum • Solidity • IPFS • MetaMask • Hardhat • Ethers.js • Python • PostgreSQL • Docker',
  },
  {
    title: 'Genz-Hunterz',
    image: '/genz.jpg',
    category: 'Game',
    liveDemo: 'https://github.com/Bhuvilol/GenZ-Hunterz/raw/refs/heads/main/GenzHunterz.jar',
    github: 'https://github.com/Bhuvilol/GenZ-Hunterz',
    description: `Ever wanted to be a pixelated hero in a world where your biggest enemy is your own inventory management skills? Welcome to GenZ-Hunterz — where Java meets nostalgia and your character can be a Fighter, Rogue, or Sorcerer (because apparently, being indecisive about your career path is a universal experience).\n\nThis retro-inspired 2D adventure game is like if Minecraft had a midlife crisis and decided to become a top-down RPG. You'll battle monsters, collect loot that you'll probably hoard but never use, and chat with NPCs who have more personality than your average dating app match.\n\nBuilt with pure Java (because sometimes the classics are classics for a reason), featuring pixel art that's so retro it might give you flashbacks to dial-up internet. Complete with an inventory system that's more organized than your actual life, customizable controls, and a debug mode for when you want to feel like a real developer.`,
    techStack: 'Java • Swing • AWT • JAR Packaging • Pixel Art • 2D Graphics',
  },
  {
    title: 'CAIR-CD',
    image: 'https://placehold.co/400x250/6366f1/ffffff?text=CAIR-CD',
    category: 'AI/ML',
    github: 'https://github.com/Bhuvilol/CAIR-CD',
    description: `Causal Analysis & Interactive Reasoning over Conversational Data.\n\nAn end-to-end ML pipeline built on 10K+ transcripts with 85%+ prediction accuracy. Engineered 15+ behavioral signal features with lift-based causal scoring — goes beyond correlation to ask “why did this happen?”\n\nA Streamlit-based counterfactual reasoning interface lets you explore “what if” scenarios, reducing negative outcomes by 25% and improving analysis efficiency by 40%.\n\nBecause your data deserves better than a bar chart.`,
    techStack: 'Python • ML • Streamlit • Pandas • Causal Inference • LangChain • Jupyter',
  },
  {
    title: 'Crypto Arcade Runner',
    image: 'https://placehold.co/400x250/f59e0b/0a0a0a?text=Crypto+Arcade+Runner',
    category: 'Web3 • Game',
    github: 'https://github.com/Bhuvilol/Crypto-Arcade-Runner',
    description: `What if your skill at a game determined how much crypto you win?\n\nCrypto Arcade Runner is a skill-based betting DApp built at ETHIndia 2025 — delivered within 24 hours among 500+ teams and earned an honorary mention. Deterministic player-vs-platform logic ensures provably fair outcomes (no house tricks).\n\nPolygon wallet transactions via MetaMask with sub-3s confirmation. Because losing to an RNG is lame, but losing to your own skill is a life lesson.`,
    techStack: 'Unity • Polygon • Ethers.js • Solidity • JavaScript • MetaMask',
  },
  {
    title: 'Cast-n-Count',
    image: '/cast.png',
    category: 'Web3',
    liveDemo: 'https://cast-n-count.vercel.app/',
    github: 'https://github.com/Bhuvilol/cast-n-count',
    description: `Ever wondered what happens when democracy meets the blockchain? Cast-n-Count is like if your local election board had a love child with a crypto exchange, but actually made it work.\n\nThink of it as a voting system where your MetaMask wallet becomes your digital ID card, and instead of standing in line for hours to vote for the next person who'll disappoint you, you can do it from your couch while wearing pajamas. Revolutionary, right?\n\nFeatures admin and voter portals that are so secure, even your nosy neighbor can't peek at your voting choices. Real-time voting with instant feedback - because waiting for election results is so 2020.\n\nBecause democracy should be accessible, transparent, and most importantly, not require you to wear pants.`,
    techStack: 'React • Tailwind CSS • shadcn/ui • Vite • MetaMask • Solidity • Web3.js',
  },
  {
    title: 'Chainledger',
    image: '/chainledger.png',
    category: 'Web3',
    liveDemo: 'https://chainledger-j1u0xadyt-bhuvilols-projects.vercel.app/',
    github: 'https://github.com/Bhuvilol/Chainledger',
    description: `Imagine if Big Brother worked for your inventory department instead of the government. Chainledger is like having a nosy neighbor who's also a blockchain expert - they know everything, remember everything, and absolutely cannot be bribed.\n\nIt's a supply chain tracking system so secure, even the most creative employee couldn't pull a “the warehouse ate my inventory” excuse. Real-time tracking with the paranoia level of a conspiracy theorist.\n\nBuilt with React and immutable audit trails that make it impossible to claim “the dog ate my inventory” - though honestly, if your dog is eating inventory, you have bigger problems.`,
    techStack: 'React • JavaScript • Tailwind CSS • Vite • Backend • Blockchain',
  },
  {
    title: 'ChakravyuhGenesis',
    image: 'https://placehold.co/400x250/13131d/00ff99?text=Chakravyuh',
    category: 'Full-Stack',
    liveDemo: 'https://chakravyuhgenesis.in/',
    github: 'https://github.com/Bhuvilol/ChakravyuhGenesis',
    description: `A live event microsite shipped under a real deadline.\n\nDesigned and deployed the official site for Chakravyuh Genesis — handling event details, registration flow, and brand identity in one cohesive interface. Custom CSS, responsive layouts, and a live domain that didn't crash on launch day.\n\nProof that “I'll just build a landing page” usually means three sleepless nights and a coffee dependency.`,
    techStack: 'HTML • CSS • JavaScript • Custom Domain',
  },
  {
    title: 'Safemix',
    image: 'https://placehold.co/400x250/13131d/00ff99?text=Safemix',
    category: 'Full-Stack',
    liveDemo: 'https://safemix-delta.vercel.app/',
    github: 'https://github.com/Bhuvilol/Safemix',
    description: `A TypeScript-powered web app focused on safety and verification flows.\n\nBuilt with modern React + TypeScript tooling for type-safe development. Deployed on Vercel with a clean responsive interface.\n\nBecause writing JavaScript without types is just optimism with extra steps.`,
    techStack: 'TypeScript • React • Vercel • Tailwind CSS',
  },
  {
    title: 'Praman',
    image: 'https://placehold.co/400x250/13131d/00ff99?text=Praman',
    category: 'Web3',
    liveDemo: 'https://praman-theta.vercel.app/',
    github: 'https://github.com/Bhuvilol/Praman',
    description: `A verification-focused web platform — because “trust me” is not a proof system.\n\nBuilt with React and modern web tooling. Designed for credential and document verification workflows with a clean, accessible UI.\n\nDeployed live and iterating.`,
    techStack: 'React • JavaScript • Vercel • Web3',
  },
];

const ProjectHeader = ({ filters, activeFilter, onFilterChange }) => (
  <div className="col-span-full mb-8">
    <SectionHeading>projects</SectionHeading>
    <p className="text-base text-hacker-muted max-w-3xl leading-relaxed mb-6">
      A collection of projects showcasing my journey in software development, from full-stack applications to AI-powered solutions.
    </p>
    <div className="flex flex-wrap gap-2 font-mono text-xs">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          className={`px-3 py-1.5 rounded border transition-all ${
            activeFilter === f
              ? 'border-hacker-green text-hacker-green bg-hacker-green/10'
              : 'border-hacker-border text-hacker-muted hover:border-hacker-green/50 hover:text-hacker-text'
          }`}
        >
          [{f}]
        </button>
      ))}
    </div>
  </div>
);

const matchesFilter = (project, filter) => {
  if (filter === 'all') return true;
  return project.category.toLowerCase().includes(filter.toLowerCase());
};

const FILTERS = ['all', 'web3', 'ai/ml', 'full-stack', 'game'];

// Custom scrollbar styles for modal
const modalScrollbarStyles = `
  .modal-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .modal-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 136, 0.2);
    border-radius: 3px;
  }
  .modal-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 255, 136, 0.4);
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
            />
            {/* Modal Box */}
            <motion.div
              className="relative w-full max-w-md sm:aspect-square rounded-lg border border-hacker-border bg-hacker-surface p-0 overflow-hidden flex flex-col"
              style={{ maxHeight: '85vh', minHeight: '320px' }}
              initial={{ y: 40, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <button
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded border border-hacker-border text-hacker-muted hover:border-hacker-red hover:text-hacker-red transition-all text-lg font-mono bg-hacker-surface/80 backdrop-blur"
                onClick={onClose}
                aria-label="Close"
              >
                ×
              </button>
              <div className="p-5 pt-8 sm:p-8 sm:pt-12 flex flex-col h-full">
                <div className="shrink-0">
                  <h3 className="font-mono text-xl font-bold mb-3 text-hacker-green text-center">{project.title}</h3>
                    <div className="relative w-full h-32 mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg border border-hacker-border" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="mx-1 p-2.5 bg-hacker-surface/80 backdrop-blur-md border border-hacker-green/40 text-hacker-green rounded-lg transition-all flex items-center justify-center group hover:bg-hacker-green/10">
                          {project.title === 'Genz-Hunterz' ? (
                            <HiDownload className="w-7 h-7 group-hover:scale-110 group-active:scale-95 transition-transform" />
                          ) : (
                            <HiLink className="w-7 h-7 group-hover:scale-110 group-active:scale-95 transition-transform" />
                          )}
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mx-1 p-2.5 bg-hacker-surface/80 backdrop-blur-md border border-hacker-border text-hacker-text rounded-lg transition-all flex items-center justify-center group hover:border-hacker-green hover:text-hacker-green">
                          <FaGithub className="w-7 h-7 group-hover:scale-110 group-active:scale-95 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-0 overflow-y-auto modal-scrollbar">
                  <div className="mb-4">
                    <span className="font-mono text-sm text-hacker-green block mb-2">[+] Tech Stack:</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack && project.techStack.split('•').map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2.5 py-1 bg-hacker-bg border border-hacker-border text-hacker-text rounded text-xs font-mono"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-1">
                    <span className="font-mono text-sm text-hacker-green">[+] Description:</span>
                  </div>
                  <div className="mb-4 whitespace-pre-line text-hacker-text max-w-none text-sm leading-relaxed">
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
  const [activeFilter, setActiveFilter] = useState('all');

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter((p) => matchesFilter(p, activeFilter));
  const showBento = activeFilter === 'all';

  return (
    <section id="projects" className="py-12 px-6 max-w-7xl mx-auto">
      <ProjectHeader
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={handleCloseModal} />
      {/* Bento grid for desktop/tablet — 12 cards, 5 rows. Only shown when filter === 'all'. */}
      <div className={`${showBento ? 'hidden md:grid' : 'hidden'} grid-cols-3 gap-1 auto-rows-[260px]`}>
        {/* Row 1: TrustSeal (hero, 2col) + Vortex (tall, spans rows 1-2) */}
        <div className="col-span-2 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[0]} size="large" minHeight="min-h-[220px]" index={0} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[0])} />
        </div>
        <div className="col-span-1 row-span-2 h-full w-full min-h-[480px]">
          <AnimatedProjectCard project={projects[1]} size="large" minHeight="min-h-[480px]" index={1} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[1])} />
        </div>
        {/* Row 2: AURA + LicenZ (Vortex continues at col 3) */}
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[2]} size="medium" minHeight="min-h-[220px]" index={2} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[2])} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[3]} size="medium" minHeight="min-h-[220px]" index={3} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[3])} />
        </div>
        {/* Row 3: Genz (tall, spans rows 3-4) + CAIR-CD + Crypto Arcade */}
        <div className="col-span-1 row-span-2 h-full w-full min-h-[480px]">
          <AnimatedProjectCard project={projects[4]} size="large" minHeight="min-h-[480px]" index={4} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[4])} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[5]} size="medium" minHeight="min-h-[220px]" index={5} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[5])} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[6]} size="medium" minHeight="min-h-[220px]" index={6} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[6])} />
        </div>
        {/* Row 4: (Genz continues at col 1) + Cast-n-Count + Chainledger */}
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[7]} size="medium" minHeight="min-h-[220px]" index={7} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[7])} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[8]} size="medium" minHeight="min-h-[220px]" index={8} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[8])} />
        </div>
        {/* Row 5: ChakravyuhGenesis + Safemix + Praman (extras, uniform row) */}
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[9]} size="medium" minHeight="min-h-[220px]" index={9} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[9])} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[10]} size="medium" minHeight="min-h-[220px]" index={10} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[10])} />
        </div>
        <div className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
          <AnimatedProjectCard project={projects[11]} size="medium" minHeight="min-h-[220px]" index={11} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} onClick={() => handleCardClick(projects[11])} />
        </div>
      </div>
      {/* Uniform grid for filtered view (desktop) — replaces bento when a filter is active */}
      {!showBento && (
        <div className="hidden md:grid grid-cols-3 gap-1 auto-rows-[260px]">
          {filteredProjects.map((project) => {
            const originalIndex = projects.indexOf(project);
            return (
              <div key={project.title} className="col-span-1 row-span-1 h-full w-full min-h-[220px]">
                <AnimatedProjectCard
                  project={project}
                  size="medium"
                  minHeight="min-h-[220px]"
                  index={originalIndex}
                  hoveredIndex={hoveredIndex}
                  onHover={setHoveredIndex}
                  onClick={() => handleCardClick(project)}
                />
              </div>
            );
          })}
          {filteredProjects.length === 0 && (
            <div className="col-span-3 py-12 text-center font-mono text-sm text-hacker-muted">
              [ no projects match filter ]
            </div>
          )}
        </div>
      )}

      {/* Fallback for mobile: simple vertical list, respects active filter */}
      <div className="grid md:hidden grid-cols-1 gap-1">
        {filteredProjects.map((project) => {
          const originalIndex = projects.indexOf(project);
          return (
            <AnimatedProjectCard
              key={project.title}
              project={project}
              size="medium"
              minHeight="min-h-[220px]"
              index={originalIndex}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onClick={() => handleCardClick(project)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects; 

