'use client';
import { useEffect, useRef } from 'react';

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  wigglePhase: number;
  wiggleSpeed: number;
  wiggleAmp: number;
}

const COLORS = ['#4a7c59', '#6a9e78', '#2d5a3d', '#86b353', '#b8860b', '#8b6914', '#5c8a45'];

function makeLeaf(canvasWidth: number): Leaf {
  return {
    x: Math.random() * canvasWidth,
    y: -20 - Math.random() * 60,
    size: 7 + Math.random() * 14,
    speedY: 0.45 + Math.random() * 1.1,
    speedX: (Math.random() - 0.5) * 0.4,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.025,
    opacity: 0.25 + Math.random() * 0.35,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    wigglePhase: Math.random() * Math.PI * 2,
    wiggleSpeed: 0.015 + Math.random() * 0.02,
    wiggleAmp: 0.4 + Math.random() * 0.6,
  };
}

function drawLeaf(ctx: CanvasRenderingContext2D, leaf: Leaf) {
  ctx.save();
  ctx.translate(leaf.x, leaf.y);
  ctx.rotate(leaf.rotation);
  ctx.globalAlpha = leaf.opacity;

  const s = leaf.size;
  ctx.fillStyle = leaf.color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.55, -s * 0.55, s * 0.55, s * 0.55, 0, s);
  ctx.bezierCurveTo(-s * 0.55, s * 0.55, -s * 0.55, -s * 0.55, 0, -s);
  ctx.fill();

  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.85);
  ctx.lineTo(0, s * 0.85);
  ctx.stroke();

  ctx.restore();
}

export default function LeafCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let leaves: Leaf[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (leaves.length < 42 && Math.random() < 0.045) {
        leaves.push(makeLeaf(canvas.width));
      }

      leaves = leaves.filter((l) => l.y < canvas.height + 30);

      for (const leaf of leaves) {
        leaf.wigglePhase += leaf.wiggleSpeed;
        leaf.x += leaf.speedX + Math.sin(leaf.wigglePhase) * leaf.wiggleAmp;
        leaf.y += leaf.speedY;
        leaf.rotation += leaf.rotationSpeed;
        drawLeaf(ctx, leaf);
      }

      rafId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
}
