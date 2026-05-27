import React from 'react';
import SectionHeading from '../components/SectionHeading';

const WORKSHOPS = [
  {
    id: '01',
    title: 'Odisha AI Symposium',
    org: 'SOA Campus-2',
    role: 'Delegate',
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
    org: 'CNxITER',
    role: 'Workshop member',
    desc: '12 hour hackathon using latest AI tools — from Copilot to LangSmith. Mentored teams on debugging LLM outputs, and integrating AI into their projects.',
  },
  {
    id: '04',
    title: 'Techwiz 2.0',
    org: 'CNxITER',
    role: 'Backend Lead',
    desc: 'A technical quiz competition — handled the backend system for real-time scoring, question management, and live leaderboards.',
  },
  {
    id: '05',
    title: 'Tormenta',
    org: 'Developer Student Clubs',
    role: 'Rules Committee',
    desc: 'A Ideathon focused on business implementation and revenue models — managed the event logistics and evaluated 50+ submissions.',
  },
  {
    id: '06',
    title: 'Web3 & Agentic AI Workshops',
    org: 'ODISHA DAO',
    role: 'Speaker',
    desc: 'Hands-on sessions on Solidity, MetaMask integration, and agentic LLM workflows for student builders across multiple campuses.',
  },
];

const Workshops = () => (
  <section id="workshops" className="py-12 px-6">
    <SectionHeading className="mb-4">workshops & talks</SectionHeading>
    <p className="text-base text-hacker-muted max-w-3xl mb-10 leading-relaxed">
      Events I've organized or spoken at — reaching 1500+ students across DSC, ODISHA DAO, and Cloud Community Bhubaneswar.
    </p>
    {/* Mobile: horizontal scroll */}
    <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-none">
      <div className="flex gap-3 pb-3" style={{ width: 'max-content' }}>
        {WORKSHOPS.map((w) => (
          <div
            key={w.id}
            className="w-[270px] h-[200px] shrink-0 snap-start border border-hacker-border rounded-lg bg-hacker-surface/40 p-4 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-hacker-green text-xs">[{w.id}]</span>
              {w.date && <span className="font-mono text-hacker-muted text-[10px]">{w.date}</span>}
            </div>
            <strong className="font-mono text-hacker-text text-sm block mb-1">{w.title}</strong>
            <span className="font-mono text-hacker-muted text-[10px] mb-2">{w.org} · {w.role}</span>
            <p className="text-xs text-hacker-muted leading-relaxed flex-1 overflow-hidden line-clamp-4">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Desktop: vertical list */}
    <ul className="hidden md:block space-y-4 text-hacker-text">
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
