import React from 'react';
import SectionHeading from '../components/SectionHeading';

// NOTE: Replace these placeholder quotes with real ones from judges,
// mentors, collaborators, or LinkedIn recommendations.
const TESTIMONIALS = [
  {
    quote:
      'Bhabesh shipped a working IoT + blockchain prototype faster than most teams ship slides. The architecture decisions held up under live questioning.',
    author: 'PROXIMA 2026 Mentor',
    role: 'Industry Showcase',
  },
  {
    quote:
      'Clear communicator, calm under pressure, and the only participant who could explain causal inference without putting the panel to sleep.',
    author: 'UIDAI Hackathon Judge',
    role: 'Data Hackathon 2025',
  },
  {
    quote:
      'Reliable async collaborator. Code reviews are sharp without being mean, PR descriptions actually explain the why — rare for an undergrad.',
    author: 'Open-Source Collaborator',
    role: 'GitHub',
  },
  {
    quote:
      "One of the sharpest student builders I've mentored on Web3 tooling. Bhabesh asks the right questions and ships before others finish planning.",
    author: 'ODISHA DAO Mentor',
    role: 'Web3 Workshop Series',
  },
  {
    quote:
      'Ran the entire backend scoring system for Techwiz without a single outage during live rounds. That kind of reliability is hard to find.',
    author: 'CNxITER Organizer',
    role: 'Techwiz 2.0',
  },
  {
    quote:
      'Designed problem sets that actually challenged participants without being unfair. The difficulty curve for Codequest was spot on.',
    author: 'DSC Chapter Lead',
    role: 'Developer Student Clubs',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-12 px-6">
    <SectionHeading className="mb-10">testimonials</SectionHeading>
    <div className="-mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-none">
      <div className="flex gap-4 pb-3" style={{ width: 'max-content' }}>
        {TESTIMONIALS.map((t, idx) => (
          <figure
            key={idx}
            className="w-[300px] h-[260px] shrink-0 snap-start border border-hacker-border rounded-lg bg-hacker-surface/40 p-5 flex flex-col"
          >
            <span className="text-hacker-green text-2xl leading-none mb-2 font-mono">"</span>
            <blockquote className="text-sm text-hacker-muted leading-relaxed flex-1 font-sans overflow-hidden line-clamp-5">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 pt-4 border-t border-hacker-border text-xs font-mono">
              <div className="text-hacker-green truncate">— {t.author}</div>
              <div className="text-hacker-muted truncate">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
