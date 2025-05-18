
import React, { useEffect, useRef } from 'react';

const CodeRainAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to fullscreen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Characters to display in the rain (code-like characters)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]=+-*&^%$#@!;:,.?|~`'.split('');
    
    // Number of columns based on canvas width
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array for drops - one per column
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      // Start at random position
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    // Color selection for the matrix effect
    const colors = [
      'rgba(0, 238, 255, 0.7)',  // neon-blue
      'rgba(138, 43, 226, 0.7)',  // neon-purple
      'rgba(0, 255, 200, 0.7)',   // teal
      'rgba(255, 255, 255, 0.5)'  // white
    ];
    
    const animate = () => {
      // Semi-transparent black background to show trail
      ctx.fillStyle = 'rgba(10, 0, 31, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set color and font
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Random color from our palette with depth effect (faster drops are brighter)
        const speed = Math.abs(drops[i] % 10) / 10;
        const colorIndex = Math.floor(speed * colors.length);
        ctx.fillStyle = colors[colorIndex] || colors[0];
        
        // x coordinate of the drop
        const x = i * fontSize;
        
        // y coordinate of the drop
        const y = drops[i] * fontSize;
        
        // Draw the character
        ctx.fillText(char, x, y);
        
        // Move the drop down
        drops[i]++;
        
        // Reset when drop reaches bottom of screen with random reset height
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = Math.floor(Math.random() * -20);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default CodeRainAnimation;
