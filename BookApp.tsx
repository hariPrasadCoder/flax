import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Users, Lightbulb, Rocket, Quote, Mail, Sparkles, Target, Zap } from 'lucide-react';

// ============ 3D BOOK COMPONENT ============

const Book3D: React.FC = () => {
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bookRef.current) return;
      const rect = bookRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 20;
      const rotateX = ((centerY - e.clientY) / window.innerHeight) * 10;
      bookRef.current.style.transform = `perspective(1000px) rotateY(${rotateY - 15}deg) rotateX(${rotateX}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[440px]" style={{ perspective: '1000px' }}>
      {/* Glow effect behind book */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-violet-500/30 to-primary/40 blur-[60px] opacity-60 animate-pulse-glow" />
      
      {/* 3D Book Container */}
      <div 
        ref={bookRef}
        className="relative w-full h-full transition-transform duration-200 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateY(-15deg) rotateX(0deg)'
        }}
      >
        {/* Book Cover (Front) */}
        <div 
          className="absolute inset-0 rounded-r-lg rounded-l-sm overflow-hidden"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(15px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(74, 66, 216, 0.15)'
          }}
        >
          {/* Cover Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000] border border-white/10">
            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-violet-500 to-primary" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
              {/* Top section */}
              <div>
                <div className="text-[10px] md:text-xs font-mono text-primary/80 tracking-[0.3em] uppercase mb-4">
                  Flax
                </div>
              </div>
              
              {/* Center - Title */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary via-violet-400 to-violet-600 leading-none mb-3">
                  50
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight mb-2">
                  AI Founders
                </h2>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  The Playbook for Building<br />Products That Win
                </p>
              </div>
              
              {/* Bottom section */}
              <div className="flex items-end justify-between">
                <div className="text-[10px] md:text-xs text-gray-500">
                  Hari Prasad & Sunjana Ramana
                </div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-6 md:h-8 bg-gradient-to-t from-primary/60 to-transparent rounded-full" 
                      style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Spine */}
        <div 
          className="absolute top-0 left-0 w-[30px] h-full bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-l-sm"
          style={{ 
            transform: 'rotateY(-90deg) translateX(-15px)',
            transformOrigin: 'left'
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-violet-500" />
          <div className="h-full flex items-center justify-center">
            <span className="text-[8px] font-mono text-gray-500 tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>
              50 AI FOUNDERS
            </span>
          </div>
        </div>

        {/* Book Pages (Side) */}
        <div 
          className="absolute top-[3px] right-0 w-[25px] h-[calc(100%-6px)] rounded-r-sm overflow-hidden"
          style={{ 
            transform: 'rotateY(90deg) translateX(12px)',
            transformOrigin: 'right',
            background: 'linear-gradient(to right, #f5f5f5 0%, #e8e8e8 10%, #f0f0f0 50%, #e5e5e5 100%)'
          }}
        >
          {/* Page lines */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full h-[1px] bg-gray-300/50" style={{ marginTop: `${4 + i * 5}%` }} />
          ))}
        </div>

        {/* Book Back Cover */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#000000] rounded-r-lg rounded-l-sm border border-white/5"
          style={{ transform: 'translateZ(-15px)' }}
        />
      </div>
    </div>
  );
};

// ============ UI COMPONENTS ============

const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}> = ({ children, variant = 'primary', showArrow = false, className = '', onClick, type = 'button' }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95 tracking-wide relative overflow-hidden group";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    outline: "bg-transparent text-gray-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5"
  };
  
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 opacity-50" />
      )}
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
      {children}
    </div>
  </section>
);

// ============ NAVBAR ============

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <div className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out w-full
        ${isScrolled 
          ? 'max-w-[calc(100%-2rem)] md:max-w-[600px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-2.5 px-4 rounded-full' 
          : 'max-w-7xl py-3 md:py-4 px-4 md:px-6 bg-transparent border-transparent'
        }`}>
        
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-base md:text-lg font-semibold tracking-tight text-white">Flax</span>
          <span className="text-xs text-primary font-mono">/book</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#lessons" className="text-sm text-gray-400 hover:text-white transition-colors">What's Inside</a>
          <a href="#founders" className="text-sm text-gray-400 hover:text-white transition-colors">Founders</a>
        </div>

        <Button className="!px-5 !py-2 !text-xs !h-9" onClick={() => document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' })}>
          Get Notified
        </Button>
      </div>
    </nav>
  );
};

// ============ HERO ============

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty('--cursor-x', e.clientX + 'px');
      containerRef.current.style.setProperty('--cursor-y', e.clientY + 'px');
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
    
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 60; i++) {
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
    <div ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{ background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(74, 66, 216, 0.06), transparent 40%)` }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-blob opacity-40 mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000 opacity-40 mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-4000 opacity-30 mix-blend-screen" />

      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <Section className="pt-32 md:pt-40 pb-20 z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center justify-center p-[1px] mb-8 overflow-hidden rounded-full relative group cursor-default opacity-0 animate-fade-in-up">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#222_0%,#4A42D8_50%,#222_100%)] opacity-50" />
              <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-4 py-1.5 text-xs font-mono text-gray-300 backdrop-blur-3xl border border-white/5">
                <BookOpen className="w-3.5 h-3.5 mr-2 text-primary" />
                Coming 2026
              </div>
            </div>

            {/* Title */}
            <div className="relative mb-8">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1] opacity-0 animate-fade-in-up delay-100">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">50</span> AI Founders.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
                  50 Lessons That Won.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
              The playbook for building AI products that actually work. Straight from the founders who did it. Real stories. Real strategies. No theory.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up delay-300">
              <Button showArrow className="h-12 px-8 text-base" onClick={() => document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Early Access
              </Button>
              <p className="text-sm text-gray-500 self-center">
                Be first to know when it drops
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 opacity-0 animate-fade-in-up delay-500">
              {[
                { value: '50+', label: 'Founders' },
                { value: '$2B+', label: 'Valuation' },
                { value: '100+', label: 'Strategies' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - 3D Book */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-up delay-200">
            <Book3D />
          </div>
        </div>
      </Section>
    </div>
  );
};

// ============ ABOUT SECTION ============

const About: React.FC = () => (
  <Section id="about" className="bg-surface">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 text-primary text-sm font-mono mb-6">
          <Target className="w-4 h-4" />
          THE CONCEPT
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          Not another <span className="text-gray-500">startup book.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          This is a collection of <span className="text-white font-medium">battle-tested lessons</span> from founders who built AI companies that actually won. No fluffy advice. No hypotheticals.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Each chapter is a conversation with a founder who faced the same challenges you're facing and figured it out. From that one crazy marketing hack that 10x'd their growth, to the pivot that saved everything.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Product Strategy', 'Go-to-Market', 'Fundraising', 'Team Building', 'Growth Hacks'].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-500/20 blur-3xl opacity-30" />
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10">
          <Quote className="w-10 h-10 text-primary/50 mb-6" />
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
            "The best lessons aren't in textbooks. They're in the war stories of founders who lived it."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-violet-500" />
            <div>
              <div className="text-white font-medium">Hari Prasad & Sunjana Ramana</div>
              <div className="text-gray-500 text-sm">Authors & Curators</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// ============ LESSONS SECTION ============

const Lessons: React.FC = () => (
  <Section id="lessons">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 text-primary text-sm font-mono mb-6">
        <Lightbulb className="w-4 h-4" />
        WHAT'S INSIDE
      </div>
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
        The lessons that <span className="text-primary">actually matter</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Every chapter answers a question you've probably asked yourself at 2am.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          icon: Rocket,
          title: "The First 100 Users",
          desc: "How they got traction when nobody knew who they were."
        },
        {
          icon: Zap,
          title: "The Growth Hack That Worked",
          desc: "One unconventional strategy that changed everything."
        },
        {
          icon: Target,
          title: "Finding Product-Market Fit",
          desc: "The moment they knew they had something real."
        },
        {
          icon: Users,
          title: "Building the Team",
          desc: "Who they hired first, and why it mattered."
        },
        {
          icon: Sparkles,
          title: "The AI Moat",
          desc: "How they stayed ahead when everyone had access to GPT."
        },
        {
          icon: BookOpen,
          title: "The Pivot Story",
          desc: "When they threw away the plan and won anyway."
        },
      ].map((item, i) => (
        <div key={i} className="group p-6 bg-surface border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

// ============ FOUNDERS SECTION ============

const Founders: React.FC = () => (
  <Section id="founders" className="bg-surface">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 text-primary text-sm font-mono mb-6">
        <Users className="w-4 h-4" />
        THE FOUNDERS
      </div>
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
        50 founders. <span className="text-gray-500">50 stories.</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        From YC alumni to bootstrapped unicorns. The founders who are shaping AI.
      </p>
    </div>

    <div className="relative">
      {/* Placeholder founder avatars */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center text-gray-600 text-xs font-mono">
            ?
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-gray-500 mb-4">Founder lineup revealed soon</p>
        <div className="inline-flex items-center gap-2 text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Interviews in progress
        </div>
      </div>
    </div>
  </Section>
);

// ============ NOTIFY SECTION ============

const Notify: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el: any) => {
          el.src = el.dataset.tallySrc;
        });
      }
    };
    script.onerror = script.onload;
    document.body.appendChild(script);
  }, []);

  return (
    <Section id="notify" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-mono mb-6">
          <Mail className="w-4 h-4" />
          GET NOTIFIED
        </div>
        
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
          Don't miss the drop.
        </h2>
        
        <p className="text-gray-400 text-lg mb-10">
          Be the first to get the book, plus exclusive founder interviews and behind-the-scenes content.
        </p>

        {/* Tally Form Embed */}
        <div className="max-w-md mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/jaPg7a?hideTitle=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="177"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Get Notified"
          />
        </div>

        <p className="text-xs text-gray-600 mt-6">
          No spam. Just book updates and founder stories.
        </p>
      </div>
    </Section>
  );
};

// ============ FOOTER ============

const BookFooter: React.FC = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Flax</span>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400">Book</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="/" className="hover:text-white transition-colors">Main Site</a>
          <a href="mailto:hello@joinflax.com" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600">
          © 2026 Flax
        </div>
      </div>
    </div>
  </footer>
);

// ============ MAIN APP ============

function BookApp() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Lessons />
        <Founders />
        <Notify />
      </main>
      <BookFooter />
    </div>
  );
}

export default BookApp;
