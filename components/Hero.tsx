import React, { useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      containerRef.current.style.setProperty('--mouse-x', x.toString());
      containerRef.current.style.setProperty('--mouse-y', y.toString());
      containerRef.current.style.setProperty('--cursor-x', clientX + 'px');
      containerRef.current.style.setProperty('--cursor-y', clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Network expansion animation - nodes spreading outward
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      connected: number[];
    }
    
    const nodes: Node[] = [];
    const nodeCount = 40;
    const centerX = width / 2;
    const centerY = height / 2;

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (Math.PI * 2 * i) / nodeCount + Math.random() * 0.5;
        const distance = 50 + Math.random() * 300;
        nodes.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: Math.cos(angle) * 0.2,
          vy: Math.sin(angle) * 0.2,
          radius: 2 + Math.random() * 2,
          alpha: 0.3 + Math.random() * 0.4,
          connected: []
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(74, 66, 216, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Gentle boundary bounce
        if (node.x < 0 || node.x > width) node.vx *= -0.5;
        if (node.y < 0 || node.y > height) node.vy *= -0.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 66, 216, ${node.alpha})`;
        ctx.fill();
      });
      
      // Draw center node (origin point)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(74, 66, 216, 0.8)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(74, 66, 216, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    initNodes();
    draw();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(74, 66, 216, 0.03), transparent 40%)`
        }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-blob opacity-30 mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-4000 opacity-20 mix-blend-screen" />

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <Section className="pt-40 md:pt-48 pb-20 text-center z-20 relative">
        
        <div className="inline-flex items-center justify-center p-[1px] mb-8 overflow-hidden rounded-full relative group cursor-default opacity-0 animate-fade-in-up">
           <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-surface/80 px-4 py-1.5 text-xs font-mono text-gray-400 backdrop-blur-sm border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
              Limited to 5 campaigns per month
           </div>
        </div>

        <div className="relative mb-8 max-w-5xl mx-auto">
           <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-white leading-[1.1] md:leading-[1.05] opacity-0 animate-fade-in-up delay-100">
             Distribution Infrastructure
             <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600">
               for AI & SaaS Companies
             </span>
           </h1>
        </div>

        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          Flax connects funded startups and growing brands with curated creators to generate millions of high-intent impressions in 30 days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <Button 
            className="h-14 px-10 text-base bg-white text-black hover:bg-gray-100 font-semibold"
            data-cal-namespace="flax"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
             Book Strategy Call
          </Button>
          <Button 
            variant="outline"
            className="h-14 px-10 text-base"
            onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
          >
             See How It Works
          </Button>
        </div>

      </Section>
    </div>
  );
};
