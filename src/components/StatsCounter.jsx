import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 25, suffix: '+', label: 'projects shipped' },
  { value: 3, label: 'hackathon wins' },
  { value: 25, suffix: '+', label: 'PRs merged' },
  { value: 1500, suffix: '+', label: 'students reached' },
];

const useCountUp = (target, durationMs, start) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startedAt = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - startedAt) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return value;
};

const StatItem = ({ value, suffix = '', label, start }) => {
  const current = useCountUp(value, 1400, start);
  return (
    <div className="flex flex-col font-mono">
      <span className="text-2xl md:text-3xl font-bold text-hacker-green leading-none">
        {current}
        {suffix}
      </span>
      <span className="text-xs text-hacker-muted mt-1.5 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl border-t border-hacker-border pt-8"
    >
      {STATS.map((s) => (
        <StatItem
          key={s.label}
          value={s.value}
          suffix={s.suffix}
          label={s.label}
          start={inView}
        />
      ))}
    </div>
  );
};

export default StatsCounter;
