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
];

const Testimonials = () => (
  <section id="testimonials" className="py-12 px-6">
    <SectionHeading className="mb-10">testimonials</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
      {TESTIMONIALS.map((t, idx) => (
        <figure
          key={idx}
          className="h-full min-h-[260px] border border-hacker-border rounded-lg bg-hacker-surface/40 p-5 flex flex-col"
        >
          <span className="text-hacker-green text-2xl leading-none mb-2 font-mono">
            "
          </span>
          <blockquote className="text-sm text-hacker-muted leading-relaxed flex-1 font-sans">
            {t.quote}
          </blockquote>
          <figcaption className="mt-4 pt-4 border-t border-hacker-border text-xs font-mono">
            <div className="text-hacker-green truncate">— {t.author}</div>
            <div className="text-hacker-muted truncate">{t.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Testimonials;
