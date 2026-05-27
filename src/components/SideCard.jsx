import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiTerminal, FiFileText } from 'react-icons/fi';

const MEDIUM_USER = 'bhuvism003';
const FEED_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://medium.com/feed/@${MEDIUM_USER}`)}`;

const EASTER_EGGS = [
  { cmd: 'hack nasa',       hint: 'initiate hack sequence' },
  { cmd: 'mine bitcoin',    hint: 'start the miner' },
  { cmd: 'rm -rf /',        hint: 'delete everything' },
  { cmd: 'vim',             hint: 'enter the trap' },
  { cmd: 'git blame',       hint: 'find the culprit' },
  { cmd: 'matrix',          hint: 'wake up Neo' },
  { cmd: 'coffee',          hint: 'brew something' },
  { cmd: '42',              hint: 'the answer' },
];

const SideCard = () => {
  const [copied, setCopied] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    fetch(FEED_URL)
      .then(r => r.json())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, 'text/xml');
        const items = Array.from(xml.querySelectorAll('item'));
        setPosts(items.slice(0, 5).map(item => ({
          title: item.querySelector('title')?.textContent || 'Untitled',
          href: item.querySelector('link')?.textContent || `https://medium.com/@${MEDIUM_USER}`,
          date: new Date(item.querySelector('pubDate')?.textContent).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        })));
      })
      .catch(() => {})
      .finally(() => setLoadingPosts(false));
  }, []);

  const copyCmd = (cmd) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(cmd);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <div className="h-full flex flex-col gap-3 font-mono text-xs overflow-hidden">

      {/* Easter egg hints */}
      <div className="bg-hacker-surface border border-hacker-border rounded-lg px-4 py-2.5 shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <FiTerminal className="w-3 h-3 text-hacker-green" />
          <span className="text-hacker-muted text-[10px]">// easter eggs — click to copy</span>
        </div>
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex gap-2 pb-1" style={{ width: 'max-content' }}>
            {EASTER_EGGS.map(({ cmd }) => (
              <button
                key={cmd}
                onClick={() => copyCmd(cmd)}
                className="shrink-0 px-2.5 py-1 rounded border border-hacker-border text-hacker-green text-[10px] hover:bg-hacker-green/10 hover:border-hacker-green/40 transition-colors whitespace-nowrap"
                title={copied === cmd ? 'copied!' : 'click to copy'}
              >
                {copied === cmd ? '✓' : '$'} {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog posts */}
      <div className="bg-hacker-surface border border-hacker-border rounded-lg px-4 py-4 flex flex-col overflow-hidden flex-1 min-h-0">
        <div className="flex items-center justify-between mb-3 shrink-0">
          <div className="flex items-center gap-2">
            <FiFileText className="w-3.5 h-3.5 text-hacker-green" />
            <span className="text-hacker-muted text-[11px]">// latest writeups</span>
          </div>
          <a
            href={`https://medium.com/@${MEDIUM_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-hacker-muted hover:text-hacker-green transition-colors"
          >
            view all →
          </a>
        </div>
        <div className="overflow-y-auto flex flex-col gap-3 flex-1 min-h-0">
          {loadingPosts && (
            <p className="text-hacker-muted text-[10px] px-1 animate-pulse">fetching posts...</p>
          )}
          {!loadingPosts && posts.length === 0 && (
            <p className="text-hacker-muted text-[10px] px-1">no posts found yet.</p>
          )}
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 p-3 rounded border border-transparent hover:border-hacker-green/20 hover:bg-hacker-green/5 transition-all"
            >
              <div className="flex-1 min-w-0">
                <p className="text-hacker-text text-[11px] leading-snug group-hover:text-hacker-green transition-colors line-clamp-2 mb-1">
                  {post.title}
                </p>
                <p className="text-hacker-muted text-[10px]">Medium · {post.date}</p>
              </div>
              <FiExternalLink className="w-3.5 h-3.5 text-hacker-muted group-hover:text-hacker-green shrink-0 mt-0.5 transition-colors" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SideCard;
