import React from 'react';
import LinkPreview from '../components/LinkPreview';

import SectionHeading from '../components/SectionHeading';

const ODISHA_DAO_PREVIEW = {
  url: 'https://x.com/OdishaDAO',
  image: '/odishadao.png',
};

const About = () => {

  return (
    <section id="about" className="py-12 px-6 relative">
      <SectionHeading>about</SectionHeading>
      <p className="text-base text-hacker-text mb-4 leading-relaxed">
        I'm Bhabesh, a 22-year-old cyber-sleuth-in-training who builds secure apps, breaks stuff (ethically), and sometimes pretends I'm in <em className="text-hacker-green">Mr. Robot</em>. I spend most days juggling terminal windows and caffeine, chasing bugs like they owe me money.
      </p>
      <p className="text-base text-hacker-text mb-4 leading-relaxed">
        When I'm not debugging at 2AM, I'm knee-deep in Web3 explorations with{' '}
        <LinkPreview
          url={ODISHA_DAO_PREVIEW.url}
          image={ODISHA_DAO_PREVIEW.image}
          className="font-mono text-hacker-cyan hover:text-hacker-green transition-all duration-300 underline underline-offset-4 decoration-hacker-border hover:decoration-hacker-green"
        >
          <a
            href={ODISHA_DAO_PREVIEW.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @OdishaDAO
          </a>
        </LinkPreview>
        , solving technical treasure hunts for fun, and Googling "how to center a div" for the 47th time. I like my code like my coffee—strong, slightly unpredictable, and sometimes responsible for a segfault. I mess with packet sniffers, local blockchains, and buggy APIs just to see what breaks. Breaking stuff (safely) is half the fun.
      </p>
    </section>
  );
};

export default About; 