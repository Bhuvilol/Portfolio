import React, { useState } from 'react';
import AnimatedProjectCard from '../components/AnimatedProjectCard';

const projects = [
  {
    title: 'Notion App Clone',
    description: 'A collaborative document editing app similar to Notion, featuring real-time user presence, typing indicators, and AI-powered chat functionality using cloudflare language and OpenAI integration.',
    image: 'https://placehold.co/400x250/2563eb/ffffff?text=Notion+Clone',
    category: 'Full-Stack'
  },
  {
    title: 'StartupFounder',
    description: 'A beautifully designed startup platform for developers to showcase their startups and for users to discover innovative tech projects. Built using modern frameworks for performance and scalability.',
    image: 'https://placehold.co/400x250/059669/ffffff?text=StartupFounder',
    category: 'Platform'
  },
  {
    title: 'Job Portal',
    description: 'A fully responsive job platform with authentication, dashboards for job seekers and recruiters, and smooth UI/UX built with modern best practices.',
    image: 'https://placehold.co/400x250/dc2626/ffffff?text=Job+Portal',
    category: 'Web App'
  },
  {
    title: 'Bookstore App',
    description: 'A full-stack bookstore application with user authentication, book management, and cart system. Built to reinforce backend understanding and deployment flow.',
    image: 'https://placehold.co/400x250/7c3aed/ffffff?text=Bookstore+App',
    category: 'E-commerce'
  },
  {
    title: 'Pentagon Tokens',
    description: 'Diving into Web3. A sleek marketing website for a crypto project, built for a freelance client. Optimized for performance and responsiveness.',
    image: 'https://placehold.co/400x250/f59e0b/ffffff?text=Pentagon+Tokens',
    category: 'Web3'
  },
  {
    title: 'TODO App',
    description: 'A minimalistic todo app with streamlined tool designed for efficient task management, featuring a clean interface to add, edit, and complete tasks. Built with a focus on usability.',
    image: 'https://placehold.co/400x250/10b981/ffffff?text=TODO+App',
    category: 'Productivity'
  },
  {
    title: 'Silent Alarm App',
    description: 'A silent panic button app for emergency situations. Designed for quick, discreet alerts to a trusted contact, ideal for personal safety or high-risk environments.',
    image: 'https://placehold.co/400x250/ef4444/ffffff?text=Silent+Alarm',
    category: 'Mobile'
  },
  {
    title: 'HydraMind (Hackathon Project)',
    description: 'AI-powered hydration assistant that gives personalized water intake recommendations, sends smart reminders, and adapts over time to user needs.',
    image: 'https://placehold.co/400x250/06b6d4/ffffff?text=HydraMind',
    category: 'AI/ML'
  },
];

const ProjectHeader = () => (
  <div className="col-span-full mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white">My Projects</h2>
    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
      A collection of projects showcasing my journey in software development, from full-stack applications to AI-powered solutions.
    </p>
  </div>
);

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const getProjectSize = (index) => {
    // Define which projects should be large, medium, or small
    const largeProjects = [0, 5]; // Notion Clone and TODO App
    const mediumProjects = [1, 3, 7]; // StartupFounder, Bookstore, HydraMind
    const smallProjects = [2, 4, 6]; // Job Portal, Pentagon Tokens, Silent Alarm

    if (largeProjects.includes(index)) return 'large';
    if (mediumProjects.includes(index)) return 'medium';
    if (smallProjects.includes(index)) return 'small';
    return 'medium';
  };

  return (
    <section id="projects" className="py-12 px-6 max-w-7xl mx-auto">
      <ProjectHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[240px]">
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={index}
            project={project}
            size={getProjectSize(index)}
            index={index}
            hoveredIndex={hoveredIndex}
            onHover={handleHover}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 