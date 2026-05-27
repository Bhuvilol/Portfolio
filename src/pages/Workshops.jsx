import React from 'react';
import SectionHeading from '../components/SectionHeading';

const WORKSHOPS = [
  {
    id: '01',
    title: 'Odisha AI Symposium',
    org: 'SOA Campus-2',
    role: 'Attendee',
    date: 'Dec 2025',
    desc: 'Two days of sessions from 40+ speakers on applied AI, ML pipeline systems, deployment challenges, and AI ethics. Real exposure to how research, industry, and policy intersect in AI innovation.',
  },
  {
    id: '02',
    title: 'Codequest',
    org: 'Developer Student Clubs',
    role: 'Lead Organizer',
    desc: 'Competitive coding event series — designed problem sets, ran live judging, kept 200+ participants from rage-quitting.',
  },
  {
    id: '03',
    title: 'Kodlama',
    org: 'DSC ITER',
    role: 'Workshop Lead',
    desc: 'Multi-day developer tooling workshop covering Git, Linux, and the unspoken rules of writing code other humans can read.',
  },
  {
    id: '04',
    title: 'AI Treasure Hunt — Techwiz',
    org: 'Cloud Community Bhubaneswar',
    role: 'Technical Lead',
    desc: 'AI-themed treasure hunt across campus. Designed clues, deployed the puzzles, ran the leaderboard. No clues were leaked.',
  },
  {
    id: '05',
    title: 'Tormenta',
    org: 'Inter-college Tech Fest',
    role: 'Event Coordinator',
    desc: 'Cross-campus technical fest coordination — speaker logistics, schedule wrangling, and putting out (mostly metaphorical) fires.',
  },
  {
    id: '06',
    title: 'Web3 & Agentic AI Workshops',
    org: 'ODISHA DAO',
    role: 'Speaker & Mentor',
    desc: 'Hands-on sessions on Solidity, MetaMask integration, and agentic LLM workflows for student builders across multiple campuses.',
  },
];

const Workshops = () => (
  <section id="workshops" className="py-12 px-6">
    <SectionHeading className="mb-4">workshops & talks</SectionHeading>
    <p className="text-base text-hacker-muted max-w-3xl mb-10 leading-relaxed">
      Events I've organized or spoken at — reaching 1500+ students across DSC, ODISHA DAO, and Cloud Community Bhubaneswar.
    </p>
    <ul className="space-y-4 text-hacker-text">
      {WORKSHOPS.map((w) => (
        <li
          key={w.id}
          className="flex items-start border-l-2 border-hacker-green/30 pl-4 py-1 hover:border-hacker-green transition-colors"
        >
          <span>
            <strong className="font-mono text-hacker-text block text-sm">
              [{w.id}] {w.title}{' '}
              <span className="text-hacker-muted font-normal">
                — {w.org} · {w.role}
                {w.date && <> · {w.date}</>}
              </span>
            </strong>
            <span className="text-sm text-hacker-muted">{w.desc}</span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default Workshops;
