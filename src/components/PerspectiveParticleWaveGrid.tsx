import React, { useEffect, useRef } from 'react';

/**
 * PerspectiveParticleWaveGrid
 * 
 * A 3D undulating terrain grid made of interconnected glowing particles and mesh lines
 * that ripple dynamically like an audio visualizer.
 * 
 * Theme: Black / Charcoal / Slate / Silver Grey Gradient
 */
export const PerspectiveParticleWaveGrid: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    // 3D Grid Configuration
    const COLS = 44; // Horizontal resolution
    const ROWS = 32; // Depth resolution
    const FOV = 420; // Perspective focal length

    let startTime: number | null = null;

    const render = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const t = (currentTime - startTime) * 0.0012; // Time elapsed

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Black to Deep Charcoal / Grey Radial & Linear Gradient Backdrop
      const bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.45, 10,
        width * 0.5, height * 0.55, Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, '#1c1c20');       // Mid charcoal / dark graphite center
      bgGrad.addColorStop(0.35, '#121214');    // Dark slate grey
      bgGrad.addColorStop(0.7, '#0a0a0c');     // Deep obsidian grey
      bgGrad.addColorStop(1, '#050506');       // Pure black edge
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Charcoal & Silver Nebular Haze
      const auraCenter = ctx.createRadialGradient(
        width * 0.5, height * 0.6, 20,
        width * 0.5, height * 0.6, width * 0.6
      );
      auraCenter.addColorStop(0, 'rgba(255, 255, 255, 0.04)');
      auraCenter.addColorStop(0.5, 'rgba(200, 200, 210, 0.015)');
      auraCenter.addColorStop(1, 'transparent');
      ctx.fillStyle = auraCenter;
      ctx.fillRect(0, 0, width, height);

      // Camera / Perspective setup
      const gridWidth = width * 1.65;
      const gridDepth = 1400;
      const originX = width / 2;
      const originY = height * 0.52; // Horizon line position
      const camY = -340; // Camera height above the ground plane

      // Compute 3D Vertex coordinates and project to 2D screen
      const projectedGrid: Array<Array<{ x: number; y: number; z: number; elev: number; scale: number; alpha: number }>> = [];

      for (let r = 0; r < ROWS; r++) {
        projectedGrid[r] = [];
        const normZ = r / (ROWS - 1);
        const z = 80 + normZ * gridDepth; // Distance in depth

        for (let c = 0; c < COLS; c++) {
          const normX = (c / (COLS - 1)) - 0.5; // -0.5 to 0.5
          const x3d = normX * gridWidth;

          // Undulating Terrain Simulation (Audio Visualizer Waves)
          const freq1 = Math.sin(normX * 8.5 + t * 2.2 + normZ * 6.0) * 45;
          const freq2 = Math.cos(normX * 14.0 - t * 1.8 + normZ * 10.0) * 25;
          const freq3 = Math.sin(Math.sqrt(normX * normX * 16 + normZ * normZ * 9) * 7.0 - t * 2.8) * 35;
          
          // Outer edge audio visualizer peaks
          const edgeBoost = Math.pow(Math.abs(normX) * 2, 1.8) * 40;
          const y3d = camY + (freq1 + freq2 + freq3) * (0.6 + Math.abs(normX) * 1.2) - edgeBoost;

          // 3D Perspective Projection
          const scale = FOV / (FOV + z);
          const screenX = originX + x3d * scale;
          const screenY = originY + y3d * scale;

          // Depth fog / alpha calculation
          const depthAlpha = Math.max(0, 1 - normZ * 0.95);
          const edgeAlpha = Math.sin(normX * Math.PI + Math.PI / 2);
          const alpha = depthAlpha * (0.22 + Math.abs(normX) * 0.78) * edgeAlpha;

          projectedGrid[r][c] = {
            x: screenX,
            y: screenY,
            z,
            elev: freq1 + freq2 + freq3,
            scale,
            alpha: Math.max(0.04, Math.min(1, alpha))
          };
        }
      }

      // Draw Grid Mesh Lines in Sleek Monochrome (Silver / Graphite / White)
      ctx.lineWidth = 1;

      // 1. Longitudinal Lines (Connecting depth from front to back)
      for (let c = 0; c < COLS; c++) {
        for (let r = 0; r < ROWS - 1; r++) {
          const p1 = projectedGrid[r][c];
          const p2 = projectedGrid[r + 1][c];

          const avgAlpha = (p1.alpha + p2.alpha) * 0.5;
          if (avgAlpha <= 0.02) continue;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // Neutral silver grey monochrome stroke
          ctx.strokeStyle = `rgba(215, 220, 228, ${avgAlpha * 0.32})`;
          ctx.stroke();
        }
      }

      // 2. Latitudinal Lines (Connecting rows horizontally)
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS - 1; c++) {
          const p1 = projectedGrid[r][c];
          const p2 = projectedGrid[r + 1 ? r : r][c + 1];

          const avgAlpha = (p1.alpha + p2.alpha) * 0.5;
          if (avgAlpha <= 0.02) continue;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          ctx.strokeStyle = `rgba(235, 238, 245, ${avgAlpha * 0.42})`;
          ctx.stroke();
        }
      }

      // 3. Glowing Silver & Bright White Particles at Vertex Intersections
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const p = projectedGrid[r][c];
          if (p.alpha <= 0.04) continue;

          const particleRadius = Math.max(0.8, p.scale * 3.8);

          // Pure white / crisp platinum particle centers
          ctx.beginPath();
          ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.95})`;
          ctx.fill();

          // Soft white/silver halo on prominent crests
          if (p.elev > 22 && p.alpha > 0.28) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, particleRadius * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.22})`;
            ctx.fill();
          }
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default PerspectiveParticleWaveGrid;
