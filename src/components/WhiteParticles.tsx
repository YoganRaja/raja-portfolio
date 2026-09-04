import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  twinkleSpeed: number;
  twinklePhase: number;
  glow: boolean;
  angle: number;
  angleSpeed: number;
  wanderRadius: number;
}

export const WhiteParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 11000); // responsive count

      for (let i = 0; i < particleCount; i++) {
        // Distribute 50% left side (~0-32%), 50% right side (~68-100%) so center content remains readable
        const isLeftSide = Math.random() < 0.5;
        let x: number;

        if (isLeftSide) {
          x = Math.random() * (width * 0.32);
        } else {
          x = width * 0.68 + Math.random() * (width * 0.32);
        }

        const size = Math.random() * 2.4 + 0.8;
        const baseAlpha = Math.random() * 0.6 + 0.2;
        // Random 360-degree direction vector with gentle drifting velocity
        const randomAngle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.45 + 0.15;

        particles.push({
          x,
          y: Math.random() * height,
          size,
          baseAlpha,
          alpha: baseAlpha,
          vx: Math.cos(randomAngle) * speed,
          vy: Math.sin(randomAngle) * speed,
          twinkleSpeed: Math.random() * 0.025 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          glow: Math.random() > 0.35,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
          wanderRadius: Math.random() * 0.3 + 0.1,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Update phase for gentle organic twinkling
        p.twinklePhase += p.twinkleSpeed;
        p.alpha = Math.max(0.12, Math.min(0.95, p.baseAlpha + Math.sin(p.twinklePhase) * 0.3));

        // Random organic wander / Brownian micro-drifting
        p.angle += p.angleSpeed;
        const wanderX = Math.cos(p.angle) * p.wanderRadius;
        const wanderY = Math.sin(p.angle) * p.wanderRadius;

        p.x += p.vx + wanderX;
        p.y += p.vy + wanderY;

        // Smooth boundary wrapping in all 4 random directions (top, bottom, left, right)
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Draw soft glowing ambient particle
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;

        if (p.glow) {
          ctx.shadowBlur = p.size * 3.5;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 opacity-90"
      style={{ background: 'transparent' }}
    />
  );
};
