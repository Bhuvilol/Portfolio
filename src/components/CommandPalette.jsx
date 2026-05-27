import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMMANDS = [
  { id: 'home',         label: '~/home',          hint: 'go to home',          action: 'scroll', target: 'home' },
  { id: 'about',        label: '~/about',         hint: 'about bhuvi',         action: 'scroll', target: 'about' },
  { id: 'projects',     label: '~/projects',      hint: 'view projects',       action: 'scroll', target: 'projects' },
  { id: 'achievements', label: '~/achievements',  hint: 'hackathon wins',      action: 'scroll', target: 'achievements' },
  { id: 'workshops',    label: '~/workshops',     hint: 'talks & events',      action: 'scroll', target: 'workshops' },
  { id: 'testimonials', label: '~/testimonials',  hint: 'what people say',     action: 'scroll', target: 'testimonials' },
  { id: 'contact',      label: '~/contact',       hint: 'get in touch',        action: 'scroll', target: 'contact' },
  { id: 'resume',       label: 'open resume',     hint: 'PDF • new tab',       action: 'open',   target: '/resume_ai_ml.pdf' },
  { id: 'github',       label: 'open github',     hint: 'github.com/Bhuvilol', action: 'open',   target: 'https://github.com/Bhuvilol' },
  { id: 'trustseal',    label: 'goto trustseal',  hint: 'live demo',           action: 'open',   target: 'https://0xtrustseal.vercel.app' },
  { id: 'vortex',       label: 'goto vortex',     hint: 'live demo',           action: 'open',   target: 'https://vortex.bhuvism.in' },
  { id: 'aura',         label: 'goto aura',       hint: 'live demo',           action: 'open',   target: 'https://auralabs.vercel.app/' },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      if (isCmdK) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('bhuvi:open-command-palette', onOpenEvent);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('bhuvi:open-command-palette', onOpenEvent);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q)
    );
  }, [query]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.action === 'scroll') {
      const el = document.getElementById(cmd.target);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (cmd.action === 'open') {
      window.open(cmd.target, '_blank', 'noopener,noreferrer');
    }
    setOpen(false);
  };

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(filtered.at(activeIdx));
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="relative w-full max-w-xl bg-hacker-surface border border-hacker-border rounded-lg overflow-hidden shadow-2xl"
            initial={{ y: -10, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-hacker-border font-mono text-sm">
              <span className="text-hacker-green">{'>'}</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIdx(0);
                }}
                onKeyDown={onInputKey}
                placeholder="type a command..."
                className="flex-1 min-w-0 bg-transparent outline-none text-hacker-text placeholder-hacker-muted/50"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-hacker-muted hover:text-hacker-green transition-colors border border-hacker-border rounded px-2 py-0.5 font-mono"
                aria-label="Close command palette"
              >
                esc
              </button>
            </div>
            <ul className="max-h-[60vh] sm:max-h-80 overflow-y-auto font-mono text-sm">
              {filtered.length === 0 && (
                <li className="px-4 py-3 text-hacker-muted">
                  no matches. try: projects, resume, github
                </li>
              )}
              {filtered.map((cmd, idx) => (
                <li
                  key={cmd.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => runCommand(cmd)}
                  className={`px-3 sm:px-4 py-3 sm:py-2.5 flex items-center justify-between gap-3 cursor-pointer border-l-2 ${
                    idx === activeIdx
                      ? 'border-hacker-green bg-hacker-green/10 text-hacker-green'
                      : 'border-transparent text-hacker-text hover:bg-hacker-bg/40'
                  }`}
                >
                  <span className="truncate">{cmd.label}</span>
                  <span className="text-xs text-hacker-muted truncate text-right">
                    {cmd.hint}
                  </span>
                </li>
              ))}
            </ul>
            <div className="hidden sm:flex border-t border-hacker-border px-4 py-2 items-center justify-between text-xs text-hacker-muted font-mono">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span>
                <kbd className="text-hacker-green">⌘K</kbd> toggle
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
