import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Experience = () => (
  <section id="achievements" className="py-12 px-6">
    <SectionHeading className="mb-10">achievements</SectionHeading>
    <ul className="space-y-4 text-hacker-text">
      <li className="flex items-start border-l-2 border-hacker-green/30 pl-4 py-1 hover:border-hacker-green transition-colors">
        <span>
          <strong className="font-mono text-hacker-text block text-sm">[01] Cloud Community Contributor</strong>
          <span className="text-sm text-hacker-muted">Chillin' in the cloud scene — I join, I learn, I occasionally speak up just to hear myself sound smart.</span>
        </span>
      </li>
      <li className="flex items-start border-l-2 border-hacker-green/30 pl-4 py-1 hover:border-hacker-green transition-colors">
        <span>
          <strong className="font-mono text-hacker-text block text-sm">[02] Web3 Whisperer</strong>
          <span className="text-sm text-hacker-muted">Odisha DAO crew — dabbling in decentralization, breaking smart contracts, and occasionally pretending gas fees aren't ruining my day.</span>
        </span>
      </li>
      <li className="flex items-start border-l-2 border-hacker-green/30 pl-4 py-1 hover:border-hacker-green transition-colors">
        <span>
          <strong className="font-mono text-hacker-text block text-sm">[03] Event Task Force Commander</strong>
          <span className="text-sm text-hacker-muted">Spearheaded Codequest, Kodlama & AI Treasure Hunt. Think less clipboard, more chaos control — ensuring tech ran smooth, speakers showed up, and no one rage quit (including me).</span>
        </span>
      </li>
      <li className="flex items-start border-l-2 border-hacker-green/30 pl-4 py-1 hover:border-hacker-green transition-colors">
        <span>
          <strong className="font-mono text-hacker-text block text-sm">[04] GitHub Operative</strong>
          <span className="text-sm text-hacker-muted">Commits like clockwork, bugs like plot twists. I code, I debug, I leave witty comments so future-me doesn't cry (as much).</span>
        </span>
      </li>
    </ul>
  </section>
);

export default Experience; 