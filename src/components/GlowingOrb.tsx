
import React, { useEffect, useRef } from 'react';

const GlowingOrb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<{ x: number, y: number, z: number }>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 180; // Starting with blue-cyan color

    const render = () => {
      if (!ctx || !canvas) return;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update the orb position with a slight oscillation
      orbRef.current.x = Math.sin(Date.now() * 0.001) * 5;
      orbRef.current.y = Math.cos(Date.now() * 0.0015) * 5;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 50 + Math.sin(Date.now() * 0.002) * 5; // Pulsating effect

      // Update hue for color cycling
      hue = (hue + 0.2) % 360;

      // Create gradient for the orb
      const gradient = ctx.createRadialGradient(
        centerX + orbRef.current.x, 
        centerY + orbRef.current.y, 
        0, 
        centerX, 
        centerY, 
        radius * 1.5
      );
      gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.8)`);
      gradient.addColorStop(0.4, `hsla(${hue}, 100%, 60%, 0.5)`);
      gradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);

      // Draw the main orb
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw highlights
      ctx.beginPath();
      ctx.arc(
        centerX - radius * 0.3 + orbRef.current.x * 0.5, 
        centerY - radius * 0.3 + orbRef.current.y * 0.5, 
        radius * 0.2, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();

      // Draw outer glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      const outerGlow = ctx.createRadialGradient(
        centerX, 
        centerY, 
        radius, 
        centerX, 
        centerY, 
        radius * 2
      );
      outerGlow.addColorStop(0, `hsla(${hue}, 100%, 60%, 0.2)`);
      outerGlow.addColorStop(1, `hsla(${hue}, 100%, 60%, 0)`);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // Continue animation
      animationFrameId = requestAnimationFrame(render);
    };

    // Set canvas size
    const resizeCanvas = () => {
      const size = Math.min(200, window.innerWidth / 3);
      canvas.width = size;
      canvas.height = size;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Start the animation
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative hover-scale">
      <canvas 
        ref={canvasRef} 
        className="w-40 h-40 mx-auto"
        width={200}
        height={200}
      />
      <div className="absolute inset-0 bg-neon-blue/10 rounded-full blur-xl animate-pulse -z-10"></div>
    </div>
  );
};

export default GlowingOrb;
