import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, Target, Zap, TrendingUp, Users, FileText, Download, Star } from 'lucide-react';

// ============ LOGO ============

const FlaxLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8">
    <defs>
      <linearGradient id="gradNav" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#4A42D8'}}/>
        <stop offset="100%" style={{stopColor:'#6B63E8'}}/>
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="90" height="90" rx="20" fill="url(#gradNav)"/>
    <g fill="none" stroke="white" strokeWidth="2.5">
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(0, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(72, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(144, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(216, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(288, 50, 50)"/>
    </g>
    <g stroke="white" strokeWidth="1.5" opacity="0.5">
      <line x1="50" y1="50" x2="50" y2="28"/>
      <line x1="50" y1="50" x2="69" y2="37"/>
      <line x1="50" y1="50" x2="62" y2="64"/>
      <line x1="50" y1="50" x2="38" y2="64"/>
      <line x1="50" y1="50" x2="31" y2="37"/>
    </g>
    <circle cx="50" cy="50" r="8" fill="white"/>
    <circle cx="50" cy="50" r="4" fill="url(#gradNav)"/>
  </svg>
);

// ============ COMPONENTS ============

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', showArrow, onClick, type = 'button', disabled }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 px-6 py-3",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-6 py-3"
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className} group`}>
      {children}
      {showArrow && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

// ============ 3D BOOK MOCKUP ============

const BookMockup: React.FC = () => (
  <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[400px]" style={{ perspective: '1000px' }}>
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-violet-500/20 to-primary/30 blur-[60px] opacity-50" />
    
    {/* Book */}
    <div 
      className="relative w-full h-full transition-transform duration-500 hover:scale-105"
      style={{ transform: 'rotateY(-15deg) rotateX(5deg)', transformStyle: 'preserve-3d' }}
    >
      {/* Cover */}
      <div className="absolute inset-0 rounded-r-lg rounded-l-sm bg-gradient-to-br from-primary via-violet-600 to-primary shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 rounded-r-lg rounded-l-sm" />
        
        {/* Content */}
        <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="text-white/60 text-xs font-mono uppercase tracking-widest mb-4">Free Playbook</div>
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-3">
              The LinkedIn Content Playbook
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              For B2B Founders Who Want Distribution
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="text-white/80 text-xs">
              <div className="font-medium">Hari Prasad & Sunjana Ramana</div>
              <div className="text-white/50">Flax</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spine */}
      <div 
        className="absolute top-0 left-0 w-[20px] h-full bg-gradient-to-r from-violet-900 to-primary rounded-l-sm"
        style={{ transform: 'translateX(-20px) rotateY(90deg)', transformOrigin: 'right' }}
      />
      
      {/* Pages */}
      <div 
        className="absolute top-[3px] right-0 w-[15px] h-[calc(100%-6px)] bg-gradient-to-r from-gray-100 to-gray-200 rounded-r-sm"
        style={{ transform: 'translateZ(-2px)' }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-full h-[1px] bg-gray-300" style={{ top: `${10 + i * 12}%` }} />
        ))}
      </div>
    </div>
  </div>
);

// ============ NAVBAR ============

const Navbar: React.FC = () => (
  <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4">
    <div className="flex items-center justify-between w-full max-w-6xl py-3 px-4 md:px-6">
      <a href="/" className="flex items-center gap-2">
        <FlaxLogo />
        <span className="text-lg font-semibold text-white">Flax</span>
        <span className="text-xs text-primary font-mono">/playbook</span>
      </a>
      <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
        ← Back to Flax
      </a>
    </div>
  </nav>
);

// ============ HERO ============

const Hero: React.FC<{ onGetPlaybook: () => void }> = ({ onGetPlaybook }) => (
  <Section className="pt-28 md:pt-36 pb-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,66,216,0.15),transparent_50%)]" />
    
    <div className="relative grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-mono text-primary mb-6">
          <Download className="w-3.5 h-3.5" />
          Free Download
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          The LinkedIn
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
            Content Playbook
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
          Everything we've learned building 72K+ followers and 13M+ impressions. The frameworks, templates, and strategies that actually work for B2B founders.
        </p>
        
        <Button showArrow className="text-lg px-8 py-4" onClick={onGetPlaybook}>
          Get the Free Playbook
        </Button>
        
        <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
      
      <div className="flex justify-center lg:justify-end">
        <BookMockup />
      </div>
    </div>
  </Section>
);

// ============ WHAT'S INSIDE ============

const WhatsInside: React.FC = () => {
  const chapters = [
    { num: '01', title: 'The Distribution Mindset', desc: 'Why most founders fail at content and how to think differently about distribution.' },
    { num: '02', title: 'Finding Your Voice', desc: 'How to develop a unique perspective that cuts through the noise.' },
    { num: '03', title: 'The Content Framework', desc: 'Our repeatable system for creating posts that get engagement and drive leads.' },
    { num: '04', title: 'Hook Formulas That Work', desc: '15 proven hook templates with real examples from top-performing posts.' },
    { num: '05', title: 'The Posting Playbook', desc: 'When to post, how often, and how to build momentum over time.' },
    { num: '06', title: 'From Content to Calls', desc: 'Converting engagement into actual business conversations.' },
  ];

  return (
    <Section className="border-t border-white/5">
      <div className="text-center mb-16">
        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">What's Inside</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          6 Chapters of Actionable Strategy
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          No fluff. No theory. Just the exact playbook we use with our clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <div key={chapter.num} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300">
            <div className="text-primary font-mono text-sm mb-3">Chapter {chapter.num}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{chapter.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{chapter.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// ============ WHO IT'S FOR ============

const WhoItsFor: React.FC = () => {
  const audiences = [
    { icon: Target, title: 'Early-Stage Founders', desc: 'Building from zero and need to establish credibility fast.' },
    { icon: TrendingUp, title: 'Growing Startups', desc: 'Have product-market fit but struggling with distribution.' },
    { icon: Users, title: 'B2B Companies', desc: 'Selling to other businesses and need to reach decision makers.' },
  ];

  return (
    <Section className="border-t border-white/5 bg-white/[0.01]">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Who It's For</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built for founders who are
            <span className="text-gray-500"> done guessing.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            This isn't another generic marketing guide. It's specifically designed for B2B founders who need to build distribution without a massive team or budget.
          </p>
          
          <div className="space-y-4">
            {['You know content matters but don\'t know where to start', 'You\'ve tried posting but aren\'t seeing results', 'You want a system, not random tactics'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {audiences.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ============ AUTHORS ============

const Authors: React.FC = () => (
  <Section className="border-t border-white/5">
    <div className="text-center mb-12">
      <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">From the Authors</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        We've done this <span className="text-gray-500">ourselves.</span>
      </h2>
    </div>

    <div className="max-w-3xl mx-auto">
      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
          <div className="flex -space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center text-white font-bold text-xl border-2 border-background">H</div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl border-2 border-background">S</div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg">Hari Prasad & Sunjana Ramana</h3>
            <p className="text-gray-500">Co-founders at Flax</p>
          </div>
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-6">
          "We wrote this playbook because we wish it existed when we started. Everything in here comes from real experience building our own audiences and helping founders do the same. No theory, no fluff, just what actually works."
        </p>

        <div className="flex flex-wrap gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">72K+</div>
            <div className="text-xs text-gray-500">Combined Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">13M+</div>
            <div className="text-xs text-gray-500">Impressions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs text-gray-500">Founders Helped</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// ============ CTA ============

const FinalCTA: React.FC<{ onGetPlaybook: () => void }> = ({ onGetPlaybook }) => (
  <Section className="border-t border-white/5">
    <div className="text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative">
        <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to fix your distribution?
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Get the playbook and start building your LinkedIn presence today. It's free.
        </p>
        <Button showArrow className="text-lg px-8 py-4" onClick={onGetPlaybook}>
          Download the Playbook
        </Button>
      </div>
    </div>
  </Section>
);

// ============ EMAIL MODAL ============

const EmailModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        {!submitted ? (
          <>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl">×</button>
            
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get the Free Playbook</h3>
              <p className="text-gray-400 text-sm">Enter your email and we'll send it right over.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Sending...' : 'Send Me the Playbook'}
              </Button>
            </form>

            <p className="text-xs text-gray-600 text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Check your inbox!</h3>
            <p className="text-gray-400 text-sm mb-6">
              We've sent the playbook to <span className="text-white">{email}</span>
            </p>
            <Button variant="secondary" onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============ FOOTER ============

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-white font-medium">Flax</span>
        <span className="text-gray-600">/</span>
        <span className="text-gray-400">Playbook</span>
      </div>
      <a href="mailto:contact@joinflax.com" className="text-sm text-gray-500 hover:text-primary transition-colors">
        contact@joinflax.com
      </a>
      <p className="text-xs text-gray-600">© 2026 Flax</p>
    </div>
  </footer>
);

// ============ MAIN APP ============

function PlaybookApp() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero onGetPlaybook={() => setModalOpen(true)} />
        <WhatsInside />
        <WhoItsFor />
        <Authors />
        <FinalCTA onGetPlaybook={() => setModalOpen(true)} />
      </main>
      <Footer />
      <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default PlaybookApp;
