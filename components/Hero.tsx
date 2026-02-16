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
      containerRef.current.style.setProperty('--cursor-x', clientX + 'px');
      containerRef.current.style.setProperty('--cursor-y', clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number, alpha: number}[] = [];
    const particleCount = 50;

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    initParticles();
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
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-40"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(74, 66, 216, 0.04), transparent 40%)`
        }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none animate-blob opacity-30" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-4000 opacity-20" />

      <Section className="pt-32 md:pt-40 pb-20 text-center z-20 relative">
        
        <div className="relative mb-6 max-w-4xl mx-auto">
          <p className="text-primary font-mono text-sm tracking-wider mb-6 opacity-0 animate-fade-in-up">
            FOR B2B FOUNDERS
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] opacity-0 animate-fade-in-up delay-100">
            Ads Are Dead.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600">
              Content Is King.
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          The best B2B companies win on distribution through content — either by building their founder's voice or by leveraging creators who already have reach.
          <br /><br />
          <span className="text-white">We do both.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <Button 
            className="h-14 px-10 text-base bg-white text-black hover:bg-gray-100 font-semibold"
            data-cal-namespace="flax"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a Call
          </Button>
          <Button 
            variant="outline"
            className="h-14 px-10 text-base"
            onClick={() => document.getElementById('paths')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </div>

      </Section>
    </div>
  );
};
