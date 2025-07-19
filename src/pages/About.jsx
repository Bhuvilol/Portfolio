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
        I’m Bhabesh, a 22-year-old cyber-sleuth-in-training who builds secure apps, breaks stuff (ethically), and sometimes pretends I’m in <em>Mr. Robot</em>. I spend most days juggling terminal windows and caffeine, chasing bugs like they owe me money.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        When I’m not debugging at 2AM, I’m knee-deep in Web3 explorations with{' '}
        <LinkPreview
          url={ODISHA_DAO_PREVIEW.url}
          image={ODISHA_DAO_PREVIEW.image}
          className="font-extrabold text-lg md:text-xl text-gray-800 dark:text-gray-200 underline hover:no-underline transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-400"
        >
          <a
            href={ODISHA_DAO_PREVIEW.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @OdishaDAO
          </a>
        </LinkPreview>
        , solving technical treasure hunts for fun, and Googling “how to center a div” for the 47th time. I like my code like my coffee—strong, slightly unpredictable, and sometimes responsible for a segfault. I mess with packet sniffers, local blockchains, and buggy APIs just to see what breaks. Breaking stuff (safely) is half the fun.
      </p>
    </section>
  );
};

export default About; 