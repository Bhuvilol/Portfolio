import React from 'react';
import LinkPreview from '../components/LinkPreview';

const ODISHA_DAO_PREVIEW = {
  url: 'https://x.com/OdishaDAO',
  image: '/odishadao.png',
};

const About = () => {

  return (
    <section id="about" className="py-12 px-6 relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white drop-shadow-xl">About</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I'm Bhabesh Behera, a 22-year-old Computer Science & Engineering student specializing in Cybersecurity. My interests lie at the intersection of secure systems, real-world problem solving, and thoughtful product-building. I enjoy exploring how technology can be applied meaningfully, whether through independent experiments or collaborative initiatives.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        As part of the core team at{' '}
        <LinkPreview
          url={ODISHA_DAO_PREVIEW.url}
          image={ODISHA_DAO_PREVIEW.image}
          className="font-extrabold text-xl md:text-2xl text-gray-800 dark:text-gray-200 underline hover:no-underline transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-400"
        >
          <a
            href={ODISHA_DAO_PREVIEW.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @OdishaDAO
          </a>
        </LinkPreview>
        , I actively contribute to promoting the web3 ecosystem in Odisha by driving awareness, education, and real-world adoption of decentralized technologies.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        Currently, I'm focused on deepening my understanding of system-level security, expanding my creative scope, and contributing to projects that create real value.
      </p>
    </section>
  );
};

export default About; 