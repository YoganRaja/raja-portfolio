import React, { useEffect, useRef } from 'react';

/**
 * WorkHeroPatternBackground
 * 
 * 3D Topographic Contour Field:
 * - High-precision, undulating elevation contour lines that gently ripple across the canvas
 * - Multi-harmonic mathematical terrain simulation with natural organic crests and valleys
 * - Subtle depth gradients with glowing neon teal/cyan accents on the left and luminous violet/magenta on the right
 * - Sleek, modern architectural elevation curves with subtle atmospheric depth lighting
 */
export const WorkHeroPatternBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
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
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);
    window.addEventListener('resize', resize);
    resize();

    // Noise/terrain elevation generator using multi-harmonic sine waves
    const getElevation = (x: number, y: number, time: number): number => {
      const nx = x / Math.max(width, 1);
      const ny = y / Math.max(height, 1);

      // Primary rolling wave terrain
      const w1 = Math.sin(nx * 3.2 + time * 0.45 + ny * 1.8) * 0.45;
      const w2 = Math.cos(nx * 5.4 - time * 0.35 + ny * 2.6) * 0.28;
      
      // Secondary topological ripples
      const w3 = Math.sin((nx + ny) * 4.8 + time * 0.6) * 0.18;
      const w4 = Math.sin(Math.sqrt((nx - 0.65) ** 2 + (ny - 0.35) ** 2) * 8.5 - time * 0.5) * 0.22;
      const w5 = Math.cos(Math.sqrt((nx - 0.2) ** 2 + (ny - 0.7) ** 2) * 6.2 + time * 0.4) * 0.18;

      return w1 + w2 + w3 + w4 + w5; // Approximate range [-1.2, 1.2]
    };

    let startTime: number | null = null;

    const render = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const time = (currentTime - startTime) * 0.0008; // Smooth gentle progression

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. Sleek Deep Space Canvas Backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#061816');       // Deep emerald / obsidian on top-left
      bgGrad.addColorStop(0.25, '#07121b');
      bgGrad.addColorStop(0.55, '#0b081e');
      bgGrad.addColorStop(1, '#120a28');       // Rich violet / dark cosmos on bottom-right
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Ambient Topographic Glow Pools
      // Left Teal Ambient Aura
      const tealAura = ctx.createRadialGradient(
        width * 0.15, height * 0.45, 10,
        width * 0.25, height * 0.5, width * 0.55
      );
      tealAura.addColorStop(0, 'rgba(13, 148, 136, 0.22)');
      tealAura.addColorStop(0.5, 'rgba(4, 47, 46, 0.10)');
      tealAura.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = tealAura;
      ctx.fillRect(0, 0, width, height);

      // Right Violet / Magenta Ambient Aura
      const magentaAura = ctx.createRadialGradient(
        width * 0.85, height * 0.35, 10,
        width * 0.75, height * 0.4, width * 0.65
      );
      magentaAura.addColorStop(0, 'rgba(217, 70, 239, 0.20)');
      magentaAura.addColorStop(0.4, 'rgba(147, 51, 234, 0.12)');
      magentaAura.addColorStop(0.8, 'rgba(76, 29, 149, 0.04)');
      magentaAura.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = magentaAura;
      ctx.fillRect(0, 0, width, height);

      // 3. 3D Architectural Contour Field (Series of Elevation Iso-Lines)
      // Number of elevation lines across vertical space
      const numLines = Math.max(36, Math.min(56, Math.floor(height / 14)));
      const stepY = (height + 160) / numLines;
      const stepX = Math.max(12, Math.min(22, width / 70));

      ctx.lineWidth = 1.35;

      for (let i = 0; i < numLines; i++) {
        const baseY = -60 + i * stepY;
        const normY = i / numLines;

        ctx.beginPath();
        let isFirstPoint = true;

        for (let x = -30; x <= width + 30; x += stepX) {
          const elev = getElevation(x, baseY, time);
          
          // Elevation amplitude scales with position for a dramatic perspective effect
          const amplitude = Math.sin(normY * Math.PI) * 44 + 22;
          const y = baseY + elev * amplitude;

          if (isFirstPoint) {
            ctx.moveTo(x, y);
            isFirstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Generate line color based on elevation depth and horizontal position
        const strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
        
        // Dynamic line opacity: Major index lines are brighter, intermediate lines are subtle
        const isMajorLine = i % 4 === 0;
        const baseOpacity = isMajorLine ? 0.75 : 0.28;

        // Left Teal/Cyan glowing contour line
        strokeGrad.addColorStop(0, `rgba(45, 212, 191, ${baseOpacity * 0.95})`);
        strokeGrad.addColorStop(0.22, `rgba(20, 184, 166, ${baseOpacity * 0.8})`);
        // Mid Transition
        strokeGrad.addColorStop(0.48, `rgba(168, 85, 247, ${baseOpacity * 0.75})`);
        // Right Magenta/Violet glowing contour line
        strokeGrad.addColorStop(0.78, `rgba(232, 121, 249, ${baseOpacity * 0.95})`);
        strokeGrad.addColorStop(1, `rgba(244, 114, 182, ${baseOpacity * 0.85})`);

        ctx.strokeStyle = strokeGrad;
        ctx.lineWidth = isMajorLine ? 1.6 : 1.1;
        ctx.stroke();

        // Subtle under-contour depth shadow / fill on major ridges
        if (isMajorLine) {
          ctx.save();
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
          ctx.lineWidth = 2.5;
          ctx.filter = 'blur(2px)';
          ctx.stroke();
          ctx.restore();
        }
      }

      // 4. Subtle Micro-Coordinates & Crosshairs on Contour Intersections (Architectural Detail)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      const markerIntervalX = width / 6;
      const markerIntervalY = height / 5;
      for (let mx = markerIntervalX * 0.8; mx < width; mx += markerIntervalX) {
        for (let my = markerIntervalY * 0.9; my < height; my += markerIntervalY) {
          const elev = getElevation(mx, my, time);
          const drawY = my + elev * 20;
          
          // Tiny crosshair
          ctx.beginPath();
          ctx.moveTo(mx - 3, drawY);
          ctx.lineTo(mx + 3, drawY);
          ctx.moveTo(mx, drawY - 3);
          ctx.lineTo(mx, drawY + 3);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // 5. Crisp bottom edge softening so it transitions cleanly to the lower page
      const bottomFade = ctx.createLinearGradient(0, height * 0.88, 0, height);
      bottomFade.addColorStop(0, 'rgba(0, 0, 0, 0)');
      bottomFade.addColorStop(0.6, 'rgba(0, 0, 0, 0.5)');
      bottomFade.addColorStop(1, 'rgba(0, 0, 0, 1)');

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, height * 0.88, width, height * 0.12);
      ctx.restore();

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ 
        display: 'block',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)',
      }}
    />
  );
};

export default WorkHeroPatternBackground;
