import React, { useState, useRef, useEffect, useCallback } from 'react';

// ── Kali Linux style prompt ──────────────────────────────────────
const PROMPT_USER = 'root';
const PROMPT_HOST = 'kali';
const PROMPT_PATH = '~/portfolio';

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

const NEOFETCH_ART = [
  '       ,.....,        ',
  '     ,o8888888o.      ',
  '    ,o8888888888o.    ',
  '   .88888888888888.   ',
  '  o8888  8888  8888o  ',
  '  08888  8888  8888o  ',
  '   `Y88  8888  88Y`   ',
  '    `Y8888O88888Y`    ',
  '     `Y88UUU888Y`     ',
  '       `Y8M8y`       ',
  '         `YY`         ',
  '`--------------------`',
];

const NEOFETCH_INFO = [
  { label: 'root@kali', value: '' },
  { label: '─────────', value: '' },
  { label: 'OS', value: 'Kali Linux' },
  { label: 'Host', value: 'Cloudflare' },
  { label: 'Kernel', value: 'React 19' },
  { label: 'Shell', value: 'kali-sh' },
  { label: 'DE', value: 'Portfolio' },
  { label: 'CPU', value: 'Caffeine' },
  { label: 'Memory', value: '99% (Chrome)' },
  { label: 'Packages', value: '470 (npm)' },
  { label: 'Uptime', value: '∞' },
];

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
        { type: 'info', text: '' },
        { type: 'green', text: '  ┌─ Available Commands ─────────────────┐' },
        { type: 'info', text: '  │                                      │' },
        { type: 'cmd', text: '  │  whoami         Who am I?            │' },
        { type: 'cmd', text: '  │  about          About me             │' },
        { type: 'cmd', text: '  │  skills         Tech stack           │' },
        { type: 'cmd', text: '  │  projects       List all projects    │' },
        { type: 'cmd', text: '  │  project 1-6    Project details      │' },
        { type: 'cmd', text: '  │  achievements   My achievements      │' },
        { type: 'cmd', text: '  │  contact        Contact info         │' },
        { type: 'cmd', text: '  │  socials        Social links         │' },
        { type: 'cmd', text: '  │  neofetch       System info          │' },
        { type: 'cmd', text: '  │  nmap           Scan portfolio       │' },
        { type: 'cmd', text: '  │  echo <text>    Echo text            │' },
        { type: 'cmd', text: '  │  date           Current date         │' },
        { type: 'cmd', text: '  │  history        Command history      │' },
        { type: 'cmd', text: '  │  clear          Clear terminal       │' },
        { type: 'info', text: '  │                                      │' },
        { type: 'green', text: '  └────────────────────────────────────┘' },
        { type: 'info', text: '' },
      ];

    case 'whoami':
      return [
        { type: 'root', text: '  root' },
        { type: 'info', text: '' },
        { type: 'green', text: `  ┌── ${PORTFOLIO.name}` },
        { type: 'info', text: `  │   ${PORTFOLIO.roles.join(' │ ')}` },
        { type: 'muted', text: `  │   "${PORTFOLIO.tagline}"` },
        { type: 'green', text: '  └──' },
      ];

    case 'about':
      return [
        { type: 'info', text: '' },
        { type: 'info', text: "  I'm Bhabesh, a 22-year-old cyber-sleuth" },
        { type: 'info', text: '  who builds secure apps, breaks stuff' },
        { type: 'info', text: "  (ethically), and pretends I'm in Mr. Robot." },
        { type: 'info', text: '' },
        { type: 'info', text: "  When not debugging at 2AM, I'm knee-deep" },
        { type: 'info', text: '  in Web3 explorations with @OdishaDAO.' },
        { type: 'info', text: '' },
      ];

    case 'skills':
    case 'tech': {
      const lines = [{ type: 'info', text: '' }, { type: 'green', text: '  [+] Tech Stack' }, { type: 'info', text: '' }];
      const cols = 3;
      for (let i = 0; i < PORTFOLIO.skills.length; i += cols) {
        const row = PORTFOLIO.skills.slice(i, i + cols)
          .map(s => `  ► ${s}`.padEnd(20))
          .join('');
        lines.push({ type: 'info', text: row });
      }
      lines.push({ type: 'info', text: '' });
      return lines;
    }

    case 'projects':
    case 'ls': {
      const lines = [
        { type: 'info', text: '' },
        { type: 'green', text: '  [+] Projects' },
        { type: 'info', text: '' },
      ];
      PORTFOLIO.projects.forEach((p, i) => {
        const statusColor = p.url ? 'green' : 'root';
        lines.push({ type: statusColor, text: `  [${i + 1}] ${p.url ? '●' : '○'} ${p.title.padEnd(18)} ${p.category}` });
      });
      lines.push({ type: 'info', text: '' });
      lines.push({ type: 'muted', text: '  Usage: project <number or name>' });
      lines.push({ type: 'info', text: '' });
      return lines;
    }

    case 'project':
    case 'cat': {
      if (args.length === 0) {
        return [
          { type: 'root', text: '  Usage: project <number or name>' },
          { type: 'muted', text: '  Type "projects" to see the list.' },
        ];
      }

      const raw = args.join(' ');
      let project = null;

      const num = parseInt(raw, 10);
      if (!isNaN(num) && num >= 1 && num <= PORTFOLIO.projects.length) {
        project = PORTFOLIO.projects[num - 1];
      }

      if (!project) {
        const query = raw.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim();
        if (query.length > 0) {
          project = PORTFOLIO.projects.find(p =>
            p.name === query || p.title.toLowerCase() === query
          );
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
          { type: 'root', text: `  Project not found: "${raw}"` },
          { type: 'muted', text: `  Available: ${names}` },
        ];
      }
      const lines = [
        { type: 'info', text: '' },
        { type: 'green', text: `  ┌── ${project.title}` },
        { type: 'info', text: `  │  Category:  ${project.category}` },
        { type: 'info', text: `  │  Tech:      ${project.tech}` },
      ];
      if (project.url) {
        lines.push({ type: 'cyan', text: `  │  URL:       ${project.url}` });
      } else {
        lines.push({ type: 'muted', text: '  │  URL:       Coming soon...' });
      }
      lines.push({ type: 'green', text: '  └──' });
      lines.push({ type: 'info', text: '' });
      return lines;
    }

    case 'achievements':
      return [
        { type: 'info', text: '' },
        { type: 'green', text: '  [+] Achievements' },
        { type: 'info', text: '' },
        ...PORTFOLIO.achievements.map((a, i) => ({ type: 'info', text: `  [0${i + 1}] ${a}` })),
        { type: 'info', text: '' },
      ];

    case 'contact':
      return [
        { type: 'info', text: '' },
        { type: 'green', text: '  [+] Contact' },
        { type: 'info', text: `  ✉  ${PORTFOLIO.email}` },
        { type: 'muted', text: '  Or scroll down to the contact form ↓' },
        { type: 'info', text: '' },
      ];

    case 'socials':
      return [
        { type: 'info', text: '' },
        { type: 'green', text: '  [+] Social Links' },
        { type: 'info', text: '' },
        ...Object.entries(PORTFOLIO.socials).map(([name, url]) =>
          ({ type: 'cyan', text: `  → ${name.padEnd(12)} ${url}` })
        ),
        { type: 'info', text: '' },
      ];

    case 'neofetch': {
      const lines = [{ type: 'info', text: '' }];
      const maxRows = Math.max(NEOFETCH_ART.length, NEOFETCH_INFO.length);
      for (let i = 0; i < maxRows; i++) {
        const art = (NEOFETCH_ART[i] || '').padEnd(16);
        const info = NEOFETCH_INFO[i];
        let infoStr = '';
        if (info) {
          infoStr = info.value ? `${info.label}: ${info.value}` : info.label;
        }
        lines.push({ type: i < NEOFETCH_ART.length ? 'neo' : 'info', text: `  ${art} ${infoStr}` });
      }
      lines.push({ type: 'info', text: '' });
      return lines;
    }

    case 'nmap':
      return [
        { type: 'info', text: '' },
        { type: 'muted', text: '  Starting Nmap 7.94 ( https://nmap.org )' },
        { type: 'muted', text: '  Nmap scan report for portfolio.bhuvism.in' },
        { type: 'green', text: '  Host is up (0.001s latency).' },
        { type: 'info', text: '' },
        { type: 'info', text: '  PORT      STATE    SERVICE' },
        { type: 'green', text: '  22/tcp    open     ssh' },
        { type: 'green', text: '  80/tcp    open     http' },
        { type: 'green', text: '  443/tcp   open     https' },
        { type: 'green', text: '  3000/tcp  open     react-dev' },
        { type: 'green', text: '  8545/tcp  open     hardhat' },
        { type: 'root', text: '  666/tcp   filtered darkweb (nice try)' },
        { type: 'info', text: '' },
        { type: 'muted', text: '  Nmap done: 1 host up scanned in 0.42s' },
        { type: 'info', text: '' },
      ];

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
          { type: 'root', text: '  [!] Permission denied. Nice try.' },
          { type: 'root', text: '  [!] Self-destructing in 3... 2... 1...' },
          { type: 'green', text: '  [✓] Just kidding. All good.' },
          { type: 'muted', text: "  (You're already root, champ.)" },
        ];
      }
      return [{ type: 'green', text: '  [✓] You already have root access.' }];

    case 'pwd':
      return [{ type: 'info', text: '  /root/portfolio' }];

    case 'cd':
      return [{ type: 'muted', text: "  Nowhere to go. You're already home." }];

    case 'id':
      return [{ type: 'info', text: '  uid=0(root) gid=0(root) groups=0(root)' }];

    case 'uname':
      return [{ type: 'info', text: '  Linux kali 6.1.0-kali9 #1 SMP x86_64 GNU/Linux' }];

    case 'ifconfig':
    case 'ip':
      return [
        { type: 'info', text: '  eth0: flags=4163<UP,BROADCAST,RUNNING>' },
        { type: 'info', text: '        inet 192.168.1.337' },
        { type: 'info', text: '        ether de:ad:be:ef:ca:fe' },
        { type: 'muted', text: '  (nice try getting my IP)' },
      ];

    case 'exit':
    case 'quit':
      return [{ type: 'muted', text: '  You can check out any time you like, but you can never leave. ' }];

    case 'clear':
      return 'CLEAR';

    // ── Easter eggs ──────────────────────────────────────────────
    case 'hack':
    case 'hack_nasa':
    case 'hackNasa': {
      const target = args[0] || 'nasa';
      return [
        { type: 'info', text: '' },
        { type: 'root', text: `  [*] Initiating hack sequence on ${target}.gov...` },
        { type: 'muted', text: '  [*] Scanning for open ports...' },
        { type: 'muted', text: '  [*] Found CVE-2024-4ever... exploiting...' },
        { type: 'muted', text: '  [*] Bypassing firewall... ████████░░ 80%' },
        { type: 'root', text: '  [!] FBI has entered the chat.' },
        { type: 'root', text: '  [!] Three black SUVs spotted outside.' },
        { type: 'green', text: '  [✓] Just kidding. Please do not actually do this.' },
        { type: 'info', text: '' },
      ];
    }

    case 'mine':
    case 'mine_bitcoin':
    case 'bitcoin':
      return [
        { type: 'info', text: '' },
        { type: 'green', text: '  [*] Starting Bitcoin miner...' },
        { type: 'muted', text: '  [*] CPU usage: 100% ████████████ done' },
        { type: 'muted', text: '  [*] Mining rate: 0.000000001 BTC/year' },
        { type: 'muted', text: '  [*] Estimated time to 1 BTC: 1,000,000,000 years' },
        { type: 'root', text: '  [!] Your laptop fan has filed for divorce.' },
        { type: 'muted', text: '  Tip: try Web3 dev instead, pays better.' },
        { type: 'info', text: '' },
      ];

    case 'sudo_rm_rf':
    case 'rm': {
      const isRf = args.includes('-rf') || args.includes('-r') || args.includes('-f');
      if (isRf) {
        return [
          { type: 'info', text: '' },
          { type: 'root', text: '  [!] Deleting everything...' },
          { type: 'muted', text: '  Removing /projects... done' },
          { type: 'muted', text: '  Removing /memories... done' },
          { type: 'muted', text: '  Removing /social_life... done (was already empty)' },
          { type: 'muted', text: '  Removing /sleep... done' },
          { type: 'green', text: '  [✓] Just kidding. Nothing was harmed.' },
          { type: 'info', text: '' },
        ];
      }
      return [{ type: 'root', text: `  rm: missing operand` }];
    }

    case 'git':
      if (args[0] === 'push' && args.includes('--force')) {
        return [
          { type: 'root', text: '  [!] Force pushing to main...' },
          { type: 'root', text: '  [!] Overwriting teammates work...' },
          { type: 'root', text: '  [!] Senior dev is typing...' },
          { type: 'muted', text: '  Please do not do this in real life.' },
        ];
      }
      if (args[0] === 'blame') {
        return [
          { type: 'muted', text: '  Running git blame...' },
          { type: 'root', text: '  Every line: bhuvi <bhabeshcse@gmail.com>' },
          { type: 'green', text: '  At least you know who to call.' },
        ];
      }
      return [{ type: 'root', text: `  git: '${args.join(' ')}' is not a git command` }];

    case 'ls_la':
    case 'sl': // classic typo easter egg
      return [
        { type: 'info', text: '' },
        { type: 'green', text: '  🚂 choo choo! (you meant ls, not sl)' },
        { type: 'info', text: '' },
      ];

    case 'hello':
    case 'hi':
      return [
        { type: 'green', text: '  Hello, fellow human (or bot).' },
        { type: 'muted', text: '  Try "whoami" or "help" to get started.' },
      ];

    case 'coffee':
    case 'brew':
      return [
        { type: 'info', text: '' },
        { type: 'green', text: '  ☕  Brewing...' },
        { type: 'muted', text: '  All good code is written on coffee.' },
        { type: 'muted', text: '  Current intake today: ∞ cups.' },
        { type: 'info', text: '' },
      ];

    case 'matrix':
      return [
        { type: 'green', text: '  Wake up, Neo...' },
        { type: 'muted', text: '  The Matrix has you.' },
        { type: 'green', text: '  Follow the white rabbit.' },
        { type: 'muted', text: '  (No actual matrix rain, sorry. Try Konami code.)' },
      ];

    case 'vim':
      return [
        { type: 'muted', text: '  Opening vim...' },
        { type: 'root', text: '  [!] You are now trapped.' },
        { type: 'muted', text: '  Hint: :q! to escape (good luck).' },
      ];

    case '42':
      return [{ type: 'green', text: '  The answer to life, the universe, and everything.' }];

    default:
      return [
        { type: 'root', text: `  bash: ${cmd}: command not found` },
        { type: 'muted', text: '  Type "help" for available commands.' },
      ];
  }
}

// ── Line renderer ────────────────────────────────────────────────
const colorMap = {
  info: 'text-[#f0f0f5]',
  green: 'text-[#00ff99]',
  root: 'text-[#ff4444]',
  cyan: 'text-[#00d4ff]',
  muted: 'text-[#6b7a8d]',
  cmd: 'text-[#c0c0cc]',
  header: 'text-[#4a4a6a]',
  neo: 'text-[#00d4ff]',
};

const OutputLine = ({ line }) => (
  <div className={`whitespace-pre font-mono text-xs leading-[1.8] ${colorMap[line.type] || 'text-[#f0f0f5]'}`}>
    {line.text}
  </div>
);

// ── Kali-style prompt components ─────────────────────────────────
const PromptLine = ({ command }) => (
  <div className="font-mono text-xs leading-[1.8] mt-1">
    <div className="flex items-center">
      <span className="text-[#4a4a6a]">┌──(</span>
      <span className="text-[#ff4444] font-bold">{PROMPT_USER}㉿{PROMPT_HOST}</span>
      <span className="text-[#4a4a6a]">)-[</span>
      <span className="text-[#f0f0f5] font-bold">{PROMPT_PATH}</span>
      <span className="text-[#4a4a6a]">]</span>
    </div>
    <div className="flex items-center">
      <span className="text-[#4a4a6a]">└─</span>
      <span className="text-[#ff4444] font-bold"># </span>
      <span className="text-[#f0f0f5]">{command}</span>
    </div>
  </div>
);

// ── Welcome message ──────────────────────────────────────────────
const WELCOME = [
  { type: 'info', text: '' },
  { type: 'green', text: '  ┌─────────────────────────────────────┐' },
  { type: 'green', text: '  │   Bhuvi\'s Portfolio Terminal      │' },
  { type: 'green', text: '  └─────────────────────────────────────┘' },
  { type: 'info', text: '' },
  { type: 'green', text: '  [+] Root access granted.' },
  { type: 'muted', text: '  [*] Type "help" to see available commands.' },
  { type: 'muted', text: '  [*] Use ↑/↓ arrows to navigate history.' },
  { type: 'info', text: '' },
];

// ── Terminal component ───────────────────────────────────────────
const Terminal = () => {
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const cmd = input.trim();
    const promptEntry = { type: 'kali-prompt', command: cmd };

    if (!cmd) {
      setLines(prev => [...prev, promptEntry]);
      setInput('');
      return;
    }

    const result = processCommand(cmd, history);

    if (result === 'CLEAR') {
      setLines([]);
    } else {
      setLines(prev => [...prev, promptEntry, ...result]);
    }

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
    <div className="h-full rounded-xl overflow-hidden flex flex-col border border-[#1a1a2e] bg-[#0c0c14] shadow-[0_0_0_1px_rgba(0,255,153,0.05),0_8px_32px_-4px_rgba(0,0,0,0.8)]">

      {/* ── Title bar ── */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111119] border-b border-[#1a1a2e] select-none shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-[6px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57] shadow-[0_0_4px_rgba(255,95,87,0.3)]"></span>
            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e] shadow-[0_0_4px_rgba(254,188,46,0.3)]"></span>
            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840] shadow-[0_0_4px_rgba(40,200,64,0.3)]"></span>
          </div>
        </div>
        <span className="text-[11px] text-[#6b7a8d] font-mono tracking-wide">{PROMPT_USER}@{PROMPT_HOST}: {PROMPT_PATH}</span>
        <div className="w-[60px]"></div>
      </div>

      {/* ── Output area ── */}
      <div
        ref={outputRef}
        className="terminal-output flex-1 overflow-y-auto px-4 py-3 min-h-0"
        onClick={focusInput}
      >
        {lines.map((line, i) => {
          if (line.type === 'kali-prompt') {
            return <PromptLine key={i} command={line.command} />;
          }
          return <OutputLine key={i} line={line} />;
        })}
      </div>

      {/* ── Input area ── */}
      <form onSubmit={handleSubmit} className="shrink-0 px-4 py-2.5 border-t border-[#1a1a2e] bg-[#0e0e16]">
        <div className="font-mono text-xs leading-[1.8] flex items-center">
          <span className="text-[#4a4a6a]">┌──(</span>
          <span className="text-[#ff4444] font-bold">{PROMPT_USER}㉿{PROMPT_HOST}</span>
          <span className="text-[#4a4a6a]">)-[</span>
          <span className="text-[#f0f0f5] font-bold">{PROMPT_PATH}</span>
          <span className="text-[#4a4a6a]">]</span>
        </div>
        <div className="flex items-center font-mono text-xs">
          <span className="text-[#4a4a6a]">└─</span>
          <span className="text-[#ff4444] font-bold mr-1">#</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[#f0f0f5] font-mono text-xs outline-none caret-[#00ff99] placeholder-[#2a2a3e]"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;
