import React, { useState, useRef, useEffect, useCallback } from 'react';

const PROMPT = 'bhuvi@portfolio:~$';

// ── Portfolio data used by commands ──────────────────────────────
const PORTFOLIO = {
  name: 'Bhabesh Behera',
  roles: ['Software Engineer', 'Web3 Builder', 'Full-Stack Developer', 'Security Analyst'],
  tagline: "AI might take my job, but it'll choke on my spaghetti code first.",
  email: 'bhabeshcse@gmail.com',
  socials: {
    GitHub: 'https://github.com/Bhuvilol',
    X: 'https://x.com/0xbhuvi',
    Instagram: 'https://instagram.com/_machomoron/',
    Resume: 'https://drive.google.com/file/d/1Gwxy5HHKSwrNUv2az55iD0L3JAKV29WE/view',
  },
  skills: [
    'ReactJS', 'ExpressJS', 'Node.js', 'Solidity', 'Python', 'Java',
    'Git', 'HardHat', 'Figma', 'Firebase', 'Postman', 'MongoDB',
    'TailwindCSS', 'Docker', 'Kafka',
  ],
  projects: [
    { name: 'aura', title: 'AURA', category: 'Full-Stack', tech: 'React • Express • Node.js • Firebase • OpenRouter AI', url: 'https://auralabs.vercel.app/' },
    { name: 'genz-hunterz', title: 'Genz-Hunterz', category: 'Game', tech: 'Java • Swing • AWT • Pixel Art • 2D Graphics', url: 'https://github.com/Bhuvilol/GenZ-Hunterz' },
    { name: 'cast-n-count', title: 'Cast-n-Count', category: 'Web3', tech: 'React • Tailwind • Solidity • Web3.js • MetaMask', url: 'https://cast-n-count.vercel.app/' },
    { name: 'chainledger', title: 'Chainledger', category: 'Web3', tech: 'React • Tailwind • Blockchain', url: 'https://chainledger-j1u0xadyt-bhuvilols-projects.vercel.app/' },
    { name: 'pentagon-tokens', title: 'Pentagon Tokens', category: 'Web3', tech: 'Solidity • Web3.js', url: null },
    { name: 'todo-app', title: 'TODO App', category: 'Productivity', tech: 'React', url: null },
  ],
  achievements: [
    'Cloud Community Contributor',
    'Web3 Whisperer — Odisha DAO',
    'Event Task Force Commander — Codequest, Kodlama & AI Treasure Hunt',
    'GitHub Operative — Commits like clockwork',
  ],
};

const NEOFETCH = `
\x1b[36m        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄        \x1b[0m   \x1b[1mbhuvi\x1b[0m@\x1b[1mportfolio\x1b[0m
\x1b[36m     ▄█████████████████████▄     \x1b[0m   ──────────────────
\x1b[36m   ▄███████████████████████████▄  \x1b[0m   \x1b[1mOS:\x1b[0m      Portfolio v2.0
\x1b[36m  ████████████████████████████████ \x1b[0m   \x1b[1mHost:\x1b[0m    Cloudflare Workers
\x1b[36m ██████████████████████████████████\x1b[0m   \x1b[1mKernel:\x1b[0m  React 19.1 + Vite 7
\x1b[36m ██████████  ████████  ████████████\x1b[0m   \x1b[1mShell:\x1b[0m   bhuvi-sh 1.0
\x1b[36m ████████████████████████████████ \x1b[0m   \x1b[1mTheme:\x1b[0m   Dark [GTK3]
\x1b[36m  ████████████████████████████████ \x1b[0m   \x1b[1mIcons:\x1b[0m   react-icons
\x1b[36m   ▀███████████████████████████▀  \x1b[0m   \x1b[1mTerminal:\x1b[0m portfolio-term
\x1b[36m     ▀█████████████████████▀     \x1b[0m   \x1b[1mCPU:\x1b[0m     Caffeine-Powered
\x1b[36m        ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀        \x1b[0m   \x1b[1mMemory:\x1b[0m  99% (used by Chrome)
`;

// ── Command processor ────────────────────────────────────────────
function processCommand(input, commandHistory) {
  const trimmed = input.trim();
  if (!trimmed) return [];

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
      return [
        { type: 'info', text: '╭──────────────────────────────────────╮' },
        { type: 'info', text: '│        Available Commands            │' },
        { type: 'info', text: '├──────────────────────────────────────┤' },
        { type: 'cmd',  text: '│  help         Show this menu         │' },
        { type: 'cmd',  text: '│  whoami       Who am I?              │' },
        { type: 'cmd',  text: '│  about        About me               │' },
        { type: 'cmd',  text: '│  skills       Tech stack              │' },
        { type: 'cmd',  text: '│  projects     List projects           │' },
        { type: 'cmd',  text: '│  project 1-6  Project details         │' },
        { type: 'cmd',  text: '│  achievements My achievements         │' },
        { type: 'cmd',  text: '│  contact      Contact info            │' },
        { type: 'cmd',  text: '│  socials      Social links            │' },
        { type: 'cmd',  text: '│  neofetch     System info             │' },
        { type: 'cmd',  text: '│  echo <text>  Echo text               │' },
        { type: 'cmd',  text: '│  date         Current date            │' },
        { type: 'cmd',  text: '│  history      Command history         │' },
        { type: 'cmd',  text: '│  clear        Clear terminal          │' },
        { type: 'info', text: '╰──────────────────────────────────────╯' },
      ];

    case 'whoami':
      return [
        { type: 'success', text: `  ${PORTFOLIO.name}` },
        { type: 'info', text: `  ${PORTFOLIO.roles.join(' | ')}` },
        { type: 'muted', text: `  "${PORTFOLIO.tagline}"` },
      ];

    case 'about':
      return [
        { type: 'info', text: "  I'm Bhabesh, a 22-year-old cyber-sleuth-in-training" },
        { type: 'info', text: '  who builds secure apps, breaks stuff (ethically),' },
        { type: 'info', text: '  and sometimes pretends I\'m in Mr. Robot.' },
        { type: 'info', text: '' },
        { type: 'info', text: '  When not debugging at 2AM, I\'m knee-deep in Web3' },
        { type: 'info', text: '  explorations with @OdishaDAO, solving technical' },
        { type: 'info', text: '  treasure hunts, and Googling "how to center a div"' },
        { type: 'info', text: '  for the 47th time.' },
      ];

    case 'skills':
    case 'tech': {
      const lines = [{ type: 'success', text: '  Tech Stack:' }, { type: 'info', text: '' }];
      const cols = 3;
      for (let i = 0; i < PORTFOLIO.skills.length; i += cols) {
        const row = PORTFOLIO.skills.slice(i, i + cols)
          .map(s => `  ● ${s}`.padEnd(20))
          .join('');
        lines.push({ type: 'info', text: row });
      }
      return lines;
    }

    case 'projects':
    case 'ls': {
      const lines = [
        { type: 'success', text: '  Projects:' },
        { type: 'info', text: '' },
      ];
      PORTFOLIO.projects.forEach((p, i) => {
        const status = p.url ? '🟢' : '🔴';
        lines.push({ type: 'info', text: `  [${i + 1}] ${status} ${p.title.padEnd(18)} [${p.category}]` });
      });
      lines.push({ type: 'muted', text: '' });
      lines.push({ type: 'muted', text: '  Type "project <number or name>" for details' });
      lines.push({ type: 'muted', text: '  e.g.  project 1  |  project aura' });
      return lines;
    }

    case 'project':
    case 'cat': {
      if (args.length === 0) {
        return [
          { type: 'error', text: '  Usage: project <number or name>' },
          { type: 'muted', text: '  e.g.  project 1  |  project aura' },
          { type: 'muted', text: '  Type "projects" to see the full list.' },
        ];
      }

      const raw = args.join(' ');
      let project = null;

      // Try numeric index first (1-based)
      const num = parseInt(raw, 10);
      if (!isNaN(num) && num >= 1 && num <= PORTFOLIO.projects.length) {
        project = PORTFOLIO.projects[num - 1];
      }

      // Try exact name / title match
      if (!project) {
        const query = raw.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim();
        if (query.length > 0) {
          project = PORTFOLIO.projects.find(p =>
            p.name === query || p.title.toLowerCase() === query
          );
          // Fallback: partial match only if query is 3+ chars
          if (!project && query.length >= 3) {
            project = PORTFOLIO.projects.find(p =>
              p.name.includes(query) || p.title.toLowerCase().includes(query)
            );
          }
        }
      }

      if (!project) {
        const names = PORTFOLIO.projects.map((p, i) => `${i + 1}=${p.name}`).join(', ');
        return [
          { type: 'error', text: `  Project not found: "${raw}"` },
          { type: 'muted', text: `  Available: ${names}` },
        ];
      }
      const lines = [
        { type: 'success', text: `  ╭── ${project.title} ──` },
        { type: 'info',    text: `  │  Category: ${project.category}` },
        { type: 'info',    text: `  │  Tech:     ${project.tech}` },
      ];
      if (project.url) {
        lines.push({ type: 'link', text: `  │  URL:      ${project.url}` });
      } else {
        lines.push({ type: 'muted', text: '  │  URL:      Coming soon...' });
      }
      lines.push({ type: 'success', text: '  ╰──────────────' });
      return lines;
    }

    case 'achievements':
      return [
        { type: 'success', text: '  Achievements:' },
        { type: 'info', text: '' },
        ...PORTFOLIO.achievements.map(a => ({ type: 'info', text: `  ★ ${a}` })),
      ];

    case 'contact':
      return [
        { type: 'success', text: '  Contact:' },
        { type: 'info', text: `  ✉  ${PORTFOLIO.email}` },
        { type: 'muted', text: '  Or scroll down to the contact form →' },
      ];

    case 'socials':
      return [
        { type: 'success', text: '  Social Links:' },
        { type: 'info', text: '' },
        ...Object.entries(PORTFOLIO.socials).map(([name, url]) =>
          ({ type: 'link', text: `  → ${name.padEnd(12)} ${url}` })
        ),
      ];

    case 'neofetch':
      return NEOFETCH.split('\n')
        .filter((_, i, arr) => i > 0 || i < arr.length - 1)
        .map(line => ({ type: 'neo', text: line }));

    case 'echo':
      return [{ type: 'info', text: `  ${args.join(' ')}` }];

    case 'date':
      return [{ type: 'info', text: `  ${new Date().toString()}` }];

    case 'history':
      if (commandHistory.length === 0) {
        return [{ type: 'muted', text: '  No commands in history yet.' }];
      }
      return commandHistory.map((c, i) =>
        ({ type: 'info', text: `  ${String(i + 1).padStart(4)}  ${c}` })
      );

    case 'sudo':
      if (trimmed.includes('rm -rf')) {
        return [
          { type: 'error', text: '  🔥 Permission denied. Nice try though.' },
          { type: 'error', text: '  💀 System self-destructing in 3... 2... 1...' },
          { type: 'success', text: '  ✅ Just kidding. Everything is fine.' },
          { type: 'muted', text: "  (You really thought that would work?)" },
        ];
      }
      return [{ type: 'error', text: '  sudo: permission denied. This is a portfolio, not a server.' }];

    case 'pwd':
      return [{ type: 'info', text: '  /home/bhuvi/portfolio' }];

    case 'cd':
      return [{ type: 'muted', text: '  There\'s nowhere to go. You\'re already home.' }];

    case 'exit':
    case 'quit':
      return [{ type: 'muted', text: '  You can check out any time you like, but you can never leave. 🎸' }];

    case 'clear':
      return 'CLEAR';

    default:
      return [
        { type: 'error', text: `  command not found: ${cmd}` },
        { type: 'muted', text: '  Type "help" for available commands.' },
      ];
  }
}

// ── Line renderer ────────────────────────────────────────────────
const colorMap = {
  info: 'text-gray-300',
  success: 'text-emerald-400',
  error: 'text-red-400',
  muted: 'text-gray-500',
  cmd: 'text-cyan-400',
  link: 'text-blue-400',
  neo: 'text-cyan-300',
  prompt: 'text-gray-400',
};

const OutputLine = ({ line }) => (
  <div className={`whitespace-pre font-mono text-sm leading-relaxed ${colorMap[line.type] || 'text-gray-300'}`}>
    {line.text}
  </div>
);

// ── Welcome message ──────────────────────────────────────────────
const WELCOME = [
  { type: 'success', text: '  Welcome to Bhabesh\'s Portfolio Terminal!' },
  { type: 'info',    text: '' },
  { type: 'muted',   text: '  Type "help" to see available commands.' },
  { type: 'muted',   text: '  Use ↑/↓ arrows to navigate command history.' },
  { type: 'info',    text: '' },
];

// ── Terminal component ───────────────────────────────────────────
const Terminal = () => {
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input on mount and when clicking terminal body
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const cmd = input.trim();

    // Add prompt line
    const promptLine = { type: 'prompt', text: `${PROMPT} ${cmd}` };
    
    if (!cmd) {
      setLines(prev => [...prev, promptLine]);
      setInput('');
      return;
    }

    // Process command
    const result = processCommand(cmd, history);

    if (result === 'CLEAR') {
      setLines([]);
    } else {
      setLines(prev => [...prev, promptLine, ...result]);
    }

    // Update history
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  }, [input, history]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    }
  }, [history, historyIndex]);

  return (
    <div className="terminal-window rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl flex flex-col bg-[#0d1117] max-h-[calc(100vh-6rem)]">
      {/* Title bar */}
      <div className="terminal-titlebar flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-700/50 select-none shrink-0">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.4)]"></span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.4)]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.4)]"></span>
        </div>
        <span className="ml-3 text-xs text-gray-400 font-mono tracking-wider">bhuvi@portfolio — bash</span>
      </div>

      {/* Output area */}
      <div
        ref={outputRef}
        className="terminal-output flex-1 overflow-y-auto px-4 py-3 min-h-0"
        onClick={focusInput}
      >
        {lines.map((line, i) => (
          <OutputLine key={i} line={line} />
        ))}
      </div>

      {/* Input line */}
      <form onSubmit={handleSubmit} className="shrink-0 flex items-center px-4 py-3 border-t border-gray-800/50 bg-[#0d1117]">
        <span className="text-emerald-400 font-mono text-sm mr-2 whitespace-nowrap select-none">{PROMPT}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-gray-200 font-mono text-sm outline-none caret-emerald-400 placeholder-gray-600"
          placeholder="type a command..."
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
};

export default Terminal;
