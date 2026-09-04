import React, { useState, useRef, useEffect } from 'react';

interface AiModeButtonProps {
  onClick: () => void;
  isAiMode?: boolean;
  size?: 'sm' | 'md';
}

export const AiModeButton: React.FC<AiModeButtonProps> = ({
  onClick,
  isAiMode = false,
  size = 'md',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayAngle, setDisplayAngle] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const isMouseMovingRef = useRef(false);
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth animation loop that smoothly rotates or follows mouse angle
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (isHovered && !isAiMode) {
        if (isMouseMovingRef.current) {
          // Smoothly interpolate current angle towards mouse angle
          let diff = (targetAngleRef.current - currentAngleRef.current) % 360;
          if (diff > 180) diff -= 360;
          if (diff < -180) diff += 360;
          
          currentAngleRef.current += diff * Math.min(1, delta * 15);
        } else {
          // Slow continuous rotation when mouse is still over button
          currentAngleRef.current = (currentAngleRef.current + delta * 90) % 360;
        }
        setDisplayAngle(currentAngleRef.current);
      } else if (isAiMode) {
        // Continuous rotation in AI Mode
        currentAngleRef.current = (currentAngleRef.current + delta * 120) % 360;
        setDisplayAngle(currentAngleRef.current);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, isAiMode]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    updateMouseAngle(e);
    // Initial jump to mouse angle
    currentAngleRef.current = targetAngleRef.current;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    isMouseMovingRef.current = false;
    if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
  };

  const updateMouseAngle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    let deg = rad * (180 / Math.PI) + 90; // Top is 0deg
    if (deg < 0) deg += 360;

    targetAngleRef.current = deg;
    isMouseMovingRef.current = true;

    if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
    mouseTimeoutRef.current = setTimeout(() => {
      isMouseMovingRef.current = false;
    }, 200);
  };

  const isSmall = size === 'sm';

  return (
    <div className="relative group flex items-center">
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={updateMouseAngle}
        className={`relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer select-none ${
          isSmall ? 'p-[1.5px]' : 'p-[1.5px] sm:p-[2px]'
        }`}
      >
        {/* Soft colorful glow aura underneath the button matching video reference */}
        <span
          className={`absolute -inset-0.5 rounded-full blur-[3.5px] transition-opacity duration-300 pointer-events-none ${
            isAiMode ? 'opacity-85' : isHovered ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            background: `conic-gradient(from ${displayAngle}deg at 50% 50%, #4285f4 0deg, #ea4335 90deg, #fbbc05 180deg, #34a853 270deg, #4285f4 360deg)`,
          }}
        />

        {/* Outer boundary container masking the gradient border */}
        <div className="relative rounded-full overflow-hidden p-[1.5px] flex items-center justify-center">
          {/* Default static border background layer (gray border when resting) */}
          <span
            className={`absolute inset-0 rounded-full border border-gray-300/90 transition-opacity duration-200 ${
              isAiMode || isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Rotating Google AI conic colorful gradient border layer tracking mouse position */}
          <span
            className={`absolute -inset-[200%] pointer-events-none transition-opacity duration-200 ${
              isAiMode || isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `conic-gradient(from ${displayAngle}deg at 50% 50%, #4285f4 0deg, #ea4335 90deg, #fbbc05 180deg, #34a853 270deg, #4285f4 360deg)`,
            }}
          />

          {/* Inner button content pill matching exact Google design from video */}
          <div
            className={`relative z-10 rounded-full flex items-center space-x-1.5 shrink-0 select-none transition-colors duration-200 ${
              isSmall ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1.5 text-xs'
            } ${
              isAiMode
                ? 'bg-[#f0f4fe] text-[#1a73e8]'
                : 'bg-white text-[#3c4043] group-hover:bg-[#f8fafd] group-hover:text-[#1a73e8]'
            }`}
          >
            {/* Search Lens + Sparkle Icon matching video frame exact icon */}
            <svg
              className={`${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} shrink-0 transition-colors duration-200 ${
                isAiMode ? 'text-[#1a73e8]' : 'text-[#3c4043] group-hover:text-[#1a73e8]'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="10" r="5" />
              <line x1="13.5" y1="13.5" x2="18" y2="18" />
              <path
                d="M14.5 4.5C14.5 5.6 15.4 6.5 16.5 6.5C15.4 6.5 14.5 7.4 14.5 8.5C14.5 7.4 13.6 6.5 12.5 6.5C13.6 6.5 14.5 5.6 14.5 4.5Z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <span className="font-semibold tracking-tight">AI Mode</span>
          </div>
        </div>
      </button>

      {/* Hover tooltip */}
      <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#1f1f1f] text-white text-[11px] px-2.5 py-1.5 rounded whitespace-nowrap shadow-md z-50 font-sans pointer-events-none">
        Ask AI Mode in Googul Search
      </div>
    </div>
  );
};
