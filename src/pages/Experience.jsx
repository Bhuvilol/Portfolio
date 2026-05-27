import React from 'react';
import SectionHeading from '../components/SectionHeading';
import GitHubHeatmap from '../components/GitHubHeatmap';

const achievements = [
  {
    id: '01',
    title: 'Winner — UIDAI Data Hackathon',
    year: '2025',
    desc: 'Out-engineered 200+ teams with a multi-lens AI framework for security-aware governance. Pitched to non-technical stakeholders without losing them in the buzzwords.',
  },
  {
    id: '02',
    title: 'Honorary Mention — ETHIndia 2025',
    year: '2025',
    desc: 'Shipped Crypto Arcade Runner among 500+ teams in a 24-hour sprint. Polygon wallet flows, deterministic gameplay, zero sleep.',
  },
  {
    id: '03',
    title: 'Runners-Up — SOA Ideathon 2025',
    year: '2025',
    desc: 'Architected and pitched a Web3-enabled supply chain platform under tight time constraints. Owned the algorithm selection, system design, and the slides.',
  },
  {
    id: '04',
    title: 'TrustSeal Showcase — PROXIMA 2026',
    year: '2026',
    desc: 'Presented a tamper-evident IoT + Polygon supply chain tracker to 1000+ industry attendees. Defended the architecture live. Nobody asked for a refund.',
  },
  {
    id: '05',
    title: 'Community Builder — 1500+ Students',
    year: 'ongoing',
    desc: 'Organized AI/ML, Web3, and developer tooling workshops across Developer Student Clubs, ODISHA DAO, and Cloud Community Bhubaneswar.',
  },
  {
    id: '06',
    title: 'Open Source — 25+ Merged PRs',
    year: 'ongoing',
    desc: 'Active contributor across public repos. Code reviews, async written comms, and the occasional "fix typo" PR — no shame.',
  },
];

const Experience = () => (
  <section id="achievements" className="py-12 px-6">
    <SectionHeading className="mb-10">achievements</SectionHeading>
    <ul className="space-y-4 text-hacker-text">
      {achievements.map((a) => (
        <li
          key={a.id}
          className="flex items-start border-l-2 border-hacker-green/30 pl-4 py-1 hover:border-hacker-green transition-colors"
        >
          <span>
            <strong className="font-mono text-hacker-text block text-sm">
              [{a.id}] {a.title}{' '}
              <span className="text-hacker-muted font-normal">— {a.year}</span>
            </strong>
            <span className="text-sm text-hacker-muted">{a.desc}</span>
          </span>
        </li>
      ))}
    </ul>
    <GitHubHeatmap />
  </section>
);

export default Experience;
