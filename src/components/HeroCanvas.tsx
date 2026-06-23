import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Pulse {
  from: number;
  to: number;
  t: number;
  speed: number;
}

const ACCENT = "35, 72, 255"; // --color-accent
const CYAN = "22, 194, 213"; // --color-cyan
const LINK_DISTANCE = 150;
const NODE_DENSITY = 14000; // one node per this many pixels of area

/**
 * The page's single orchestrated motion moment: a faint network of nodes that
 * drift, link up when close, and occasionally fire a "signal" pulse along an
 * active edge — a quiet nod to the distributed systems behind the work.
 *
 * Drawn on canvas (not hand-authored SVG), DPI-aware, and fully static for
 * visitors who prefer reduced motion.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let frame = 0;
    let sinceSpawn = 0;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const seed = () => {
      const count = Math.min(64, Math.max(18, Math.round((width * height) / NODE_DENSITY)));
      nodes = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.18, 0.18),
        vy: rand(-0.18, 0.18),
      }));
      pulses = [];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Edges between nearby nodes, fading with distance.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= LINK_DISTANCE) continue;
          const alpha = (1 - dist / LINK_DISTANCE) * 0.22;
          ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes.
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Signal pulses travelling along edges.
      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 6);
        glow.addColorStop(0, `rgba(${CYAN}, 0.9)`);
        glow.addColorStop(1, `rgba(${CYAN}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const spawnPulse = () => {
      // Pick a random node and fire toward a currently-linked neighbour.
      const fromIndex = Math.floor(Math.random() * nodes.length);
      const from = nodes[fromIndex];
      if (!from) return;
      const neighbours: number[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === fromIndex) continue;
        if (Math.hypot(from.x - nodes[j].x, from.y - nodes[j].y) < LINK_DISTANCE) {
          neighbours.push(j);
        }
      }
      if (neighbours.length === 0) return;
      const to = neighbours[Math.floor(Math.random() * neighbours.length)];
      pulses.push({ from: fromIndex, to, t: 0, speed: rand(0.012, 0.024) });
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      sinceSpawn += 1;
      if (sinceSpawn > 36 && pulses.length < 7) {
        spawnPulse();
        sinceSpawn = 0;
      }
      pulses = pulses.filter((p) => (p.t += p.speed) < 1);

      draw();
      frame = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw(); // single static frame, no animation loop
    } else {
      frame = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{
        maskImage:
          "radial-gradient(120% 90% at 70% 25%, #000 35%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(120% 90% at 70% 25%, #000 35%, transparent 78%)",
      }}
    />
  );
}
