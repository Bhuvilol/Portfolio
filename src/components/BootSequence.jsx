import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  { delay: 0,    text: 'BIOS v4.2.0 (c) bhuvi.systems' },
  { delay: 180,  text: 'Initializing memory.............[ OK ]' },
  { delay: 320,  text: 'Loading kernel /boot/portfolio..[ OK ]' },
  { delay: 470,  text: 'Mounting /projects..............[ OK ]' },
  { delay: 620,  text: 'Starting tech-stack daemon......[ OK ]' },
  { delay: 760,  text: 'Connecting to github.com/Bhuvilol.[ OK ]' },
  { delay: 920,  text: 'Spawning shell..................[ OK ]' },
  { delay: 1080, text: 'Welcome, visitor. bhuvi is online.' },
];

const TOTAL_DURATION = 1500;

const BootSequence = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    const hideTimer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => onComplete?.(), 350);
    }, TOTAL_DURATION);

    const skip = () => {
      setHidden(true);
      setTimeout(() => onComplete?.(), 200);
    };
    const skipOnKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') skip();
    };
    window.addEventListener('keydown', skipOnKey);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(hideTimer);
      window.removeEventListener('keydown', skipOnKey);
    };
  }, [onComplete]);

  const handleSkipClick = () => {
    setHidden(true);
    setTimeout(() => onComplete?.(), 200);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-[100] bg-hacker-bg flex items-center justify-center px-4 sm:px-6 cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={handleSkipClick}
        >
          <div className="max-w-2xl w-full font-mono text-[11px] sm:text-sm overflow-hidden">
            {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
              <div
                key={idx}
                className={`whitespace-nowrap overflow-hidden text-ellipsis ${
                  idx === BOOT_LINES.length - 1
                    ? 'text-hacker-green'
                    : 'text-hacker-text'
                }`}
              >
                <span className="text-hacker-muted mr-2">$</span>
                {line.text}
              </div>
            ))}
            {visibleLines < BOOT_LINES.length && (
              <span className="inline-block w-2 h-4 bg-hacker-green animate-pulse" />
            )}
            <div className="mt-6 sm:mt-8 text-xs text-hacker-muted">
              press <span className="text-hacker-green">[esc]</span> or{' '}
              <span className="text-hacker-green">tap</span> to skip
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
