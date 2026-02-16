import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mic, Play, Radio, Sparkles, Users, Zap, MessageSquare, TrendingUp, Award, ChevronRight } from 'lucide-react';

// ============ ANIMATED WAVEFORM ============

const AudioWaveform: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-[3px] ${className}`}>
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-primary via-violet-400 to-primary rounded-full"
          style={{
            height: `${Math.random() * 40 + 20}px`,
            animation: `waveform ${0.8 + Math.random() * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};

// ============ FLOATING MIC ============

const FloatingMic: React.FC = () => {
  const micRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!micRef.current) return;
      const rect = micRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 15;
      const rotateX = ((centerY - e.clientY) / window.innerHeight) * 10;
      micRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-[280px] h-[320px] md:w-[320px] md:h-[380px]" style={{ perspective: '1000px' }}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-violet-500/30 to-primary/40 blur-[80px] opacity-60 animate-pulse-glow" />
      
      {/* Floating container */}
      <div 
        ref={micRef}
        className="relative w-full h-full transition-transform duration-200 ease-out flex items-center justify-center"
      >
        {/* Outer ring */}
        <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-white/10 animate-spin-slow" />
        <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-primary/20" style={{ animation: 'spin 20s linear infinite reverse' }} />
        
        {/* Inner glow circle */}
        <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-violet-500/10 blur-xl" />
        
        {/* Mic icon container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border border-white/10 flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
          <Mic className="w-12 h-12 md:w-16 md:h-16 text-primary" strokeWidth={1.5} />
          
          {/* Live indicator */}
          <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono text-white uppercase tracking-wider">Recording</span>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ============ BUTTON ============

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', showArrow, onClick, href }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 px-6 py-3",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-6 py-3"
  };
  
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className} group`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className} group`}>
      {content}
    </button>
  );
};

// ============ SECTION ============

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-24 md:py-32 px-6 ${className}`}>
    <div className="container mx-auto max-w-7xl">
      {children}
    </div>
  </section>
);

// ============ NAVBAR ============

const StudiosNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-base md:text-lg font-semibold tracking-tight text-white">Flax</span>
          <span className="text-xs text-primary font-mono">/studios</span>
        </a>

        <div className="flex items-center gap-4">
          <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            ← Back to Flax
          </a>
          <Button className="!px-5 !py-2 !text-xs !h-9" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
            Be a Guest
          </Button>
        </div>
      </div>
    </nav>
  );
};

// ============ HERO ============

const StudiosHero: React.FC = () => (
  <Section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,66,216,0.15),transparent_50%)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
    
    <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      {/* Left side - Content */}
      <div className="text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center relative mb-8 opacity-0 animate-fade-in-up">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#222_0%,#4A42D8_50%,#222_100%)] opacity-50" />
          <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-4 py-1.5 text-xs font-mono text-gray-300 backdrop-blur-3xl border border-white/5">
            <Radio className="w-3.5 h-3.5 mr-2 text-primary" />
            Coming Soon
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight opacity-0 animate-fade-in-up delay-100">
          Raw Founder
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">
            Stories.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          Unfiltered conversations with founders building the future. The pivots, the failures, the wins. No scripts. No fluff. Just real talk.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-300">
          <Button showArrow onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
            Apply to Be a Guest
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </div>
      </div>

      {/* Right side - Floating Mic */}
      <div className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-up delay-200">
        <FloatingMic />
      </div>
    </div>
  </Section>
);

// ============ WHY SECTION ============

const WhySection: React.FC = () => (
  <Section id="why" className="relative">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Why Flax Studios</span>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          Your story deserves <span className="text-gray-500">an audience.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          We're building a library of founder stories that actually matter. Not surface-level success porn. The real stuff that helps other founders navigate the chaos.
        </p>
      </div>

      {/* Value props for guests */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: TrendingUp,
            title: "Reach 72K+ Founders",
            desc: "Your story gets amplified across our combined LinkedIn audience and creator network."
          },
          {
            icon: Award,
            title: "Build Authority",
            desc: "Position yourself as a thought leader. Great for fundraising, hiring, and partnerships."
          },
          {
            icon: Users,
            title: "Join the Network",
            desc: "Connect with other founders in our community. Collaborations, intros, and support."
          }
        ].map((item, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// ============ FORMAT SECTION ============

const FormatSection: React.FC = () => (
  <Section className="relative border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-3xl blur-2xl" />
          <div className="relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10">
            {/* Episode preview card */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <div>
                  <div className="text-xs text-primary font-mono mb-1">EPISODE 001</div>
                  <div className="text-white font-medium">Coming Soon</div>
                </div>
              </div>
              
              <AudioWaveform className="justify-center py-4" />
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>00:00</span>
                <span>~45 min</span>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2">
                {['Pivots', 'Fundraising', 'Product', 'Growth', 'Team'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">The Format</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            45 minutes.
            <br />
            <span className="text-gray-500">Zero scripts.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            We dig into the stories that don't make it to the press release. The 3am decisions. The pivots that saved the company. The failures that taught you everything.
          </p>

          <div className="space-y-4">
            {[
              "Your origin story and what made you start",
              "The hardest decisions you've had to make",
              "What you wish you knew earlier",
              "Tactical advice for founders at your stage"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// ============ COMING SOON EPISODES ============

const ComingSoon: React.FC = () => (
  <Section className="relative border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Episodes</span>
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
        First episodes <span className="text-gray-500">dropping soon.</span>
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
        We're currently recording with some incredible founders. Subscribe to be the first to know when we launch.
      </p>

      {/* Placeholder episode cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 border-dashed hover:border-primary/30 transition-all duration-300">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-white/5 to-transparent mb-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <Mic className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="h-4 w-3/4 bg-white/5 rounded mb-2 mx-auto" />
            <div className="h-3 w-1/2 bg-white/5 rounded mx-auto" />
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Want to be featured? <button onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary hover:underline">Apply below</button>
      </p>
    </div>
  </Section>
);

// ============ APPLY SECTION ============

const ApplySection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission
    setSubmitted(true);
  };

  return (
    <Section id="apply" className="relative border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-violet-500/10 mb-8">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Got a story worth telling?
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            We're looking for founders with real stories. Not everything has to be a success. The best lessons come from the hard stuff.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <Button className="whitespace-nowrap">
                  Apply Now
                </Button>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                We'll reach out within 48 hours if it's a fit.
              </p>
            </form>
          ) : (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-md mx-auto">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-white font-medium mb-2">Application received!</p>
              <p className="text-gray-400 text-sm">We'll be in touch soon.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

// ============ FOOTER ============

const StudiosFooter: React.FC = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Flax</span>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400">Studios</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors">Flax Home</a>
          <a href="/book" className="text-sm text-gray-500 hover:text-white transition-colors">Book</a>
        </div>

        <p className="text-xs text-gray-600">
          © 2026 Flax. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// ============ MAIN APP ============

function StudiosApp() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <StudiosNavbar />
      <main>
        <StudiosHero />
        <WhySection />
        <FormatSection />
        <ComingSoon />
        <ApplySection />
      </main>
      <StudiosFooter />

      {/* Global styles for animations */}
      <style>{`
        @keyframes waveform {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}

export default StudiosApp;
