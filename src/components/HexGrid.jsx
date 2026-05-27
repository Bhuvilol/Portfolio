import { useEffect, useRef } from 'react';

const HEX_SIZE = 28;
const GAP = 3;
const BASE_ALPHA = 0.18;
const HOVER_ALPHA = 0.7;
const GLOW_RADIUS = 140;
const COLOR = '0, 255, 153'; // hacker-green rgb

function hexCorners(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    pts.push([cx + size * Math.cos(angle), cy + size * Math.sin(angle)]);
  }
  return pts;
}

function drawHex(ctx, cx, cy, size, alpha, glowAlpha) {
  const pts = hexCorners(cx, cy, size);
  const [firstPoint, ...remainingPoints] = pts;
  ctx.beginPath();
  ctx.moveTo(firstPoint.at(0), firstPoint.at(1));
  remainingPoints.forEach(([x, y]) => ctx.lineTo(x, y));
  ctx.closePath();

  if (glowAlpha > 0.01) {
    ctx.fillStyle = `rgba(${COLOR}, ${glowAlpha * 0.12})`;
    ctx.fill();
  }

  ctx.strokeStyle = `rgba(${COLOR}, ${alpha})`;
  ctx.lineWidth = 0.8;
  ctx.stroke();
}

const HexGrid = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    // re-measure when content causes layout shift
    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const S = HEX_SIZE + GAP;
    const W = S * Math.sqrt(3);
    const H = S * 2;

    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / W) + 2;
      const rows = Math.ceil(height / (H * 0.75)) + 2;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offset = row % 2 === 0 ? 0 : W / 2;
          const cx = col * W + offset;
          const cy = row * H * 0.75;

          const dx = cx - mx;
          const dy = cy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / GLOW_RADIUS);
          const alpha = BASE_ALPHA + (HOVER_ALPHA - BASE_ALPHA) * t;
          const glowAlpha = t;

          drawHex(ctx, cx, cy, HEX_SIZE, alpha, glowAlpha);
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 pointer-events-none z-0"
      style={{
        width: '100%',
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
      }}
    />
  );
};

export default HexGrid;
