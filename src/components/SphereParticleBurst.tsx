import React, { useEffect, useRef } from 'react';

interface Particle {
  // Base spherical coordinates
  theta: number; // 0 to 2*PI
  phi: number;   // 0 to PI
  baseRadius: number;
  radius: number;
  burstOffset: number;
  burstSpeed: number;
  
  // Velocity & rotation
  size: number;
  baseAlpha: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  orbitSpeed: number;
  ring: number;
}

interface Shockwave {
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
}

interface SphereParticleBurstProps {
  isTyping?: boolean;
  className?: string;
}

export const SphereParticleBurst: React.FC<SphereParticleBurstProps> = ({ 
  isTyping = false,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isTypingRef = useRef(isTyping);

  useEffect(() => {
    isTypingRef.current = isTyping;
  }, [isTyping]);

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

    // 3D Sphere Configuration
    const PARTICLE_COUNT = 380;
    const FOV = 480;
    let rotX = 0.2;
    let rotY = 0;
    let rotZ = 0;

    const particles: Particle[] = [];
    const sphereRadius = Math.min(width, height) * 0.38;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Golden Spiral distribution on sphere surface for uniform density
      const phi = Math.acos(1 - 2 * (i + 0.5) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      const rVariance = 0.85 + Math.random() * 0.3;
      const baseR = sphereRadius * rVariance;

      particles.push({
        theta,
        phi,
        baseRadius: baseR,
        radius: baseR,
        burstOffset: Math.random() * Math.PI * 2,
        burstSpeed: 0.02 + Math.random() * 0.03,
        size: 1.0 + Math.random() * 2.2,
        baseAlpha: 0.25 + Math.random() * 0.65,
        alpha: 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.04,
        orbitSpeed: (Math.random() - 0.5) * 0.003,
        ring: Math.floor(Math.random() * 3),
      });
    }

    // Outer shockwave rings for bursting effect
    const shockwaves: Shockwave[] = [
      { radius: sphereRadius * 0.4, maxRadius: sphereRadius * 1.8, speed: 2.2, alpha: 0.6 },
      { radius: sphereRadius * 0.8, maxRadius: sphereRadius * 2.0, speed: 2.0, alpha: 0.4 },
      { radius: sphereRadius * 1.2, maxRadius: sphereRadius * 2.2, speed: 1.8, alpha: 0.2 },
    ];

    let startTime: number | null = null;

    const render = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const t = (currentTime - startTime) * 0.0015;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Deep Black / Charcoal Radial Background
      const cx = width / 2;
      const cy = height * 0.45; // Centered behind the answer cards

      const bgGrad = ctx.createRadialGradient(
        cx, cy, 10,
        cx, cy, Math.max(width, height) * 0.75
      );
      bgGrad.addColorStop(0, '#161619');       // Soft graphite core
      bgGrad.addColorStop(0.35, '#0e0e11');    // Dark charcoal
      bgGrad.addColorStop(0.7, '#070709');     // Deep obsidian
      bgGrad.addColorStop(1, '#040405');       // Pure black edge
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Silver / Platinum Core Nebula Glow
      const coreAura = ctx.createRadialGradient(
        cx, cy, 10,
        cx, cy, sphereRadius * 1.2
      );
      coreAura.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      coreAura.addColorStop(0.4, 'rgba(200, 205, 220, 0.03)');
      coreAura.addColorStop(0.8, 'rgba(100, 105, 120, 0.01)');
      coreAura.addColorStop(1, 'transparent');
      ctx.fillStyle = coreAura;
      ctx.fillRect(0, 0, width, height);

      // Rotate sphere in 3D
      const rotSpeed = isTypingRef.current ? 0.008 : 0.003;
      rotY += rotSpeed;
      rotX += rotSpeed * 0.4;
      rotZ += rotSpeed * 0.2;

      // Update & Draw Expanding Shockwave Halo Rings from Sphere Burst
      shockwaves.forEach((sw) => {
        sw.radius += sw.speed * (isTypingRef.current ? 1.6 : 1.0);
        if (sw.radius > sw.maxRadius) {
          sw.radius = sphereRadius * 0.3;
        }

        const normProgress = (sw.radius - sphereRadius * 0.3) / (sw.maxRadius - sphereRadius * 0.3);
        const ringAlpha = (1 - normProgress) * 0.22 * (isTypingRef.current ? 1.5 : 1.0);

        ctx.beginPath();
        ctx.arc(cx, cy, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(220, 225, 235, ${ringAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([6, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 3D Projection coordinates
      const projected: Array<{
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
        isHighlight: boolean;
      }> = [];

      particles.forEach((p) => {
        // Continuous burst & breathing rhythm
        p.burstOffset += p.burstSpeed * (isTypingRef.current ? 2.0 : 1.0);
        p.pulsePhase += p.pulseSpeed;

        // Dynamic radial explosion wave
        const burstWave = Math.sin(p.burstOffset) * (isTypingRef.current ? 42 : 24);
        const harmonicRipple = Math.cos(p.theta * 4 + t * 3) * 14;
        const currentR = p.baseRadius + burstWave + harmonicRipple;

        // Spherical to 3D Cartesian
        let x = currentR * Math.sin(p.phi) * Math.cos(p.theta);
        let y = currentR * Math.sin(p.phi) * Math.sin(p.theta);
        let z = currentR * Math.cos(p.phi);

        // Apply 3D Rotations (Euler angles)
        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Rotate Z
        const cosZ = Math.cos(rotZ);
        const sinZ = Math.sin(rotZ);
        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = y2 * cosZ + x1 * sinZ;

        // Perspective Projection
        const distance = FOV + z2;
        const scale = FOV / Math.max(10, distance + 200);

        const screenX = cx + x3 * scale;
        const screenY = cy + y3 * scale;

        // Depth cueing: particles in front (z2 > 0) are brighter & larger
        const depthFactor = (z2 + sphereRadius * 1.5) / (sphereRadius * 3);
        const clampedDepth = Math.max(0.1, Math.min(1.0, depthFactor));
        const pulse = (Math.sin(p.pulsePhase) + 1) * 0.25 + 0.5;

        const alpha = p.baseAlpha * clampedDepth * pulse * (isTypingRef.current ? 1.2 : 0.9);
        const size = Math.max(0.6, p.size * scale * (0.8 + clampedDepth * 0.6));

        projected.push({
          x: screenX,
          y: screenY,
          z: z2,
          size,
          alpha: Math.min(0.95, alpha),
          isHighlight: p.size > 2.0 && clampedDepth > 0.6,
        });
      });

      // Sort by Z for proper depth rendering (back to front)
      projected.sort((a, b) => a.z - b.z);

      // Draw particle interconnected spider-web burst lines (for nearest neighbors in 3D)
      const connectDist = 58;
      ctx.lineWidth = 0.75;

      for (let i = 0; i < projected.length; i += 2) {
        const p1 = projected[i];
        if (p1.alpha < 0.15) continue;

        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            const lineAlpha = (1 - dist / connectDist) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(215, 225, 240, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw all sphere particles
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Pure crisp white / glowing platinum
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Glowing corona on foreground high-energy particles
        if (p.isHighlight) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(235, 240, 255, ${p.alpha * 0.28})`;
          ctx.fill();
        }
      });

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

export default SphereParticleBurst;
