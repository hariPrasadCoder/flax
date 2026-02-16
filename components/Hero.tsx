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

  // Canvas Particle Animation (Stars)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number, alpha: number}[] = [];
    const particleCount = 60;

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.5 + 0.1
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
      
      {/* Animated Canvas Background (Stars/Particles) */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Dynamic Cursor Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(255, 255, 255, 0.04), transparent 40%)`
        }}
      />

      {/* Moving Ambient Blobs (Aurora Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-blob opacity-40 mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000 opacity-40 mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-4000 opacity-30 mix-blend-screen" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      
      {/* Floating Parallax Elements (Abstract Shapes) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Top Right Abstract Shape: Glass Cube */}
         <div 
            className="absolute top-[10%] right-[10%] w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 backdrop-blur-sm hidden lg:block animate-spin-reverse-slow opacity-60"
             style={{ 
              transform: 'translate(calc(var(--mouse-x) * 15px), calc(var(--mouse-y) * -15px)) rotate(45deg)',
              transition: 'transform 0.2s ease-out'
            }}
         />

          {/* Bottom Left Abstract Shape: Circle */}
         <div 
            className="absolute bottom-[10%] left-[10%] w-32 h-32 rounded-full border border-dashed border-white/10 hidden lg:block animate-spin-slow opacity-40"
             style={{ 
              transform: 'translate(calc(var(--mouse-x) * -25px), calc(var(--mouse-y) * 25px))',
              transition: 'transform 0.2s ease-out'
            }}
         />
      </div>

      {/* Shooting Star Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[20%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-[shimmer_3s_infinite_2s] rotate-45"></div>
         <div className="absolute top-[10%] right-[30%] w-[1px] h-[150px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 animate-[shimmer_5s_infinite_0s] rotate-12"></div>
      </div>

      <Section className="pt-32 md:pt-40 pb-20 text-center z-20 relative">
        
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center justify-center p-[1px] mb-8 overflow-hidden rounded-full relative group cursor-default opacity-0 animate-fade-in-up hover:scale-105 transition-transform duration-300">
           <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#222_0%,#fff_50%,#222_100%)] opacity-30" />
           <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-4 py-1.5 text-xs font-mono text-gray-300 backdrop-blur-3xl border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
              FOR B2B FOUNDERS
           </div>
        </div>

        <div className="relative mb-6 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] opacity-0 animate-fade-in-up delay-100">
            Ads Are Dead.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600">
              Content Is King.
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          The best B2B companies win on distribution through content. Either by building their founder's voice or by leveraging creators who already have reach.
          <br /><br />
          <span className="text-white">We do both.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <Button 
            className="h-14 px-10 text-base bg-white text-black hover:bg-gray-200 hover:scale-105 transition-transform duration-200 font-semibold"
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
