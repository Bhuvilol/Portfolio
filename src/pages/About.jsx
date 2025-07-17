import React, { useState } from 'react';

const ODISHA_DAO_PREVIEW = {
  url: 'https://x.com/OdishaDAO',
  image: '/odishadao.png',
};

const About = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="about" className="py-12 px-6 relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white drop-shadow-xl">About</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I'm Bhabesh Behera, a 22-year-old Computer Science & Engineering student specializing in Cybersecurity. My interests lie at the intersection of secure systems, real-world problem solving, and thoughtful product-building. I enjoy exploring how technology can be applied meaningfully, whether through independent experiments or collaborative initiatives.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        As part of the core team at{' '}
        <span className="relative inline-block">
          <a
            href={ODISHA_DAO_PREVIEW.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-xl md:text-2xl text-gray-800 dark:text-gray-200 underline hover:no-underline transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-400"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            onMouseMove={handleMouseMove}
            onFocus={() => setShowPreview(true)}
            onBlur={() => setShowPreview(false)}
          >
            @OdishaDAO
          </a>
        </span>
        , I actively contribute to promoting the web3 ecosystem in Odisha by driving awareness, education, and real-world adoption of decentralized technologies.
      </p>

      {/* Preview div with improved smoothness */}
      <div
        className={`fixed z-50 pointer-events-none p-2 bg-gray-900 dark:bg-white border border-gray-200 dark:border-gray-600 rounded-xl shadow-2xl flex items-center justify-center transition-all duration-500 ease-out ${
          showPreview ? 'opacity-100 scale-95' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          left: `${mousePosition.x + 24}px`,
          top: `${mousePosition.y + 24}px`,
          maxWidth: '320px',
          maxHeight: '200px',
          backgroundColor: 'rgb(17, 24, 39)',
          pointerEvents: 'none',
          position: 'fixed',
        }}
      >
        <img
          src={ODISHA_DAO_PREVIEW.image}
          alt="OdishaDAO logo"
          style={{
            maxWidth: '300px',
            maxHeight: '180px',
            width: 'auto',
            height: 'auto',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        Currently, I'm focused on deepening my understanding of system-level security, expanding my creative scope, and contributing to projects that create real value.
      </p>
    </section>
  );
};

export default About; 