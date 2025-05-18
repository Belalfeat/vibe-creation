
import React, { useEffect, useRef } from 'react';

const FloatingCodeBlocks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Code snippets to display in the floating blocks
    const codeSnippets = [
      'const chatbot = new AI();',
      'function generateResponse() {',
      'import { BotVibex } from "ai";',
      'const data = await fetch("/api");',
      'return model.predict(prompt);',
      'export default AIService;',
      '<ChatBot intelligence={0.99} />',
      'class NeuralNetwork extends AI {',
      'const response = gpt4.execute();',
      'prompt.engineering("expert");',
    ];
    
    // Create 15 floating code blocks
    const createBlocks = () => {
      // Clear previous blocks if any
      container.innerHTML = '';
      
      for (let i = 0; i < 15; i++) {
        // Create a code block
        const block = document.createElement('div');
        block.className = 'absolute glass-card p-3 text-sm code-block';
        
        // Random code snippet
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        block.innerHTML = `<pre><code class="text-neon-blue">${randomSnippet}</code></pre>`;
        
        // Random position, scale and opacity
        const scale = 0.5 + Math.random() * 0.8;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const posZ = -100 - (Math.random() * 900); // Z depth
        const rotate = (Math.random() - 0.5) * 30;
        
        block.style.transform = `translate3d(${posX}vw, ${posY}vh, ${posZ}px) scale(${scale}) rotateY(${rotate}deg)`;
        block.style.opacity = (0.3 + Math.random() * 0.5).toString();
        
        // Add animation duration and delay
        const duration = 20 + Math.random() * 40;
        const delay = Math.random() * -40;
        block.style.animationDuration = `${duration}s`;
        block.style.animationDelay = `${delay}s`;
        
        container.appendChild(block);
      }
    };
    
    createBlocks();
    
    // Recreate blocks on window resize
    const handleResize = () => {
      createBlocks();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none perspective z-0"
      style={{ perspective: '1000px' }}
    />
  );
};

export default FloatingCodeBlocks;
