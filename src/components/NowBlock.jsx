const NOW_ITEMS = [
  { label: 'shipping', value: 'TrustSeal v2 — IoT supply chain tracker' },
  { label: 'learning', value: 'Rust + distributed systems internals' },
  { label: 'reading',  value: '"Designing Data-Intensive Applications" — Kleppmann' },
  { label: 'open to',  value: 'SWE internships, Web3 collabs, AI/ML research' },
];

const NowBlock = () => (
  <section id="now" className="py-8 px-6">
    <div className="border border-hacker-border rounded-lg bg-hacker-surface/40 backdrop-blur-sm p-5 max-w-3xl font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 text-hacker-muted">
        <span className="w-2 h-2 rounded-full bg-hacker-green animate-pulse-green" />
        <span className="text-xs uppercase tracking-wider">~/now</span>
        <span className="text-hacker-border">|</span>
        <span className="text-xs">what bhuvi is up to right now</span>
      </div>
      <ul className="space-y-1.5">
        {NOW_ITEMS.map((item) => (
          <li key={item.label} className="flex flex-col sm:flex-row sm:gap-3">
            <span className="text-hacker-green w-20 shrink-0">
              [{item.label}]
            </span>
            <span className="text-hacker-text">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NowBlock;
