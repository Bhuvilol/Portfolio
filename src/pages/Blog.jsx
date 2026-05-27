import React from 'react';
import { FiExternalLink, FiFileText } from 'react-icons/fi';

const POSTS = [
  {
    title: 'Building a Decentralized Voting System with Solidity',
    platform: 'dev.to',
    date: 'Jan 2025',
    tags: ['web3', 'solidity', 'ethereum'],
    excerpt: 'A walkthrough of building Cast-n-Count — a tamper-proof on-chain voting dApp with MetaMask integration and real-time result tracking.',
    href: 'https://dev.to/bhuvilol',
  },
  {
    title: 'From Zero to Smart Contract: Hardhat Setup Guide',
    platform: 'Hashnode',
    date: 'Mar 2025',
    tags: ['web3', 'hardhat', 'tutorial'],
    excerpt: 'Setting up a full Hardhat development environment for Solidity — testing, deployment scripts, and local forking explained simply.',
    href: 'https://hashnode.com/@bhuvilol',
  },
  {
    title: 'Why I Switched My Portfolio to a Hacker Terminal Theme',
    platform: 'dev.to',
    date: 'Apr 2025',
    tags: ['frontend', 'react', 'design'],
    excerpt: 'How a boot sequence, command palette, and terminal-style sidebar turned a static portfolio into an interactive experience.',
    href: 'https://dev.to/bhuvilol',
  },
];

const TAG_COLORS = new Map([
  ['web3', 'text-hacker-cyan border-hacker-cyan/30'],
  ['solidity', 'text-hacker-green border-hacker-green/30'],
  ['ethereum', 'text-hacker-green border-hacker-green/30'],
  ['hardhat', 'text-hacker-muted border-hacker-border'],
  ['tutorial', 'text-hacker-muted border-hacker-border'],
  ['frontend', 'text-hacker-cyan border-hacker-cyan/30'],
  ['react', 'text-hacker-cyan border-hacker-cyan/30'],
  ['design', 'text-hacker-muted border-hacker-border'],
  ['ai/ml', 'text-hacker-green border-hacker-green/30'],
]);

const Blog = () => (
  <section id="blog" className="py-16 sm:py-24 px-6">
    {/* Section header */}
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-hacker-green font-mono text-sm">$</span>
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-hacker-text">cat blog/writeups.md</h2>
      </div>
      <p className="text-hacker-muted text-sm font-mono ml-5">
        // things i wrote about — web3, systems, tools, opinions
      </p>
    </div>

    {/* Post list */}
    <div className="flex flex-col gap-4 mb-8">
      {POSTS.map((post, i) => (
        <a
          key={i}
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-hacker-surface border border-hacker-border rounded-lg px-5 py-4 hover:border-hacker-green/40 transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <FiFileText className="w-3.5 h-3.5 text-hacker-green shrink-0" />
                <span className="font-mono text-[10px] text-hacker-muted">{post.platform} · {post.date}</span>
              </div>
              <h3 className="font-mono text-sm text-hacker-text group-hover:text-hacker-green transition-colors leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-hacker-muted text-xs leading-relaxed font-sans line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] border rounded px-1.5 py-0.5 ${TAG_COLORS.get(tag) || 'text-hacker-muted border-hacker-border'}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <FiExternalLink className="w-4 h-4 text-hacker-muted group-hover:text-hacker-green transition-colors shrink-0 mt-1" />
          </div>
        </a>
      ))}
    </div>

  </section>
);

export default Blog;
