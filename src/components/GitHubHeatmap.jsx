const USERNAME = 'Bhuvilol';
// Source uses a muted green (not neon) — the CSS filter below inverts
// the light empty squares to blend with the dark background, keeping
// active squares as a clean green on black palette.
const HEATMAP_SRC = `https://ghchart.rshah.org/26a641/${USERNAME}`;

const GitHubHeatmap = () => (
  <div className="mt-12 border border-hacker-border rounded-lg bg-hacker-bg p-4 sm:p-5">
    <div className="flex items-center justify-between mb-4 font-mono text-xs gap-2">
      <span className="text-hacker-muted truncate">
        <span className="text-hacker-green">$</span> contributions --user {USERNAME} --period 1y
      </span>
      <a
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-hacker-muted hover:text-hacker-green transition-colors shrink-0"
      >
        @{USERNAME} ↗
      </a>
    </div>
    <div className="overflow-x-auto -mx-1 px-1">
      <div
        className="min-w-[640px]"
        style={{
          filter: 'invert(1) hue-rotate(180deg)',
        }}
      >
        <img
          src={HEATMAP_SRC}
          alt={`GitHub contribution heatmap for ${USERNAME}`}
          className="w-full block"
          loading="lazy"
        />
      </div>
    </div>
    <div className="mt-3 text-xs text-hacker-muted font-mono">
      one square at a time. consistency &gt; bursts.
    </div>
  </div>
);

export default GitHubHeatmap;
