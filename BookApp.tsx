import React, { useEffect, useRef, useState } from 'react';

// ============ 3D BOOK ============

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
    <div className="relative w-[260px] h-[360px] md:w-[300px] md:h-[420px]" style={{ perspective: '1000px' }}>
      {/* Subtle shadow behind */}
      <div className="absolute inset-x-8 bottom-0 h-8 bg-black/10 blur-xl rounded-full" />

      <div
        ref={bookRef}
        className="relative w-full h-full transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-15deg) rotateX(0deg)' }}
      >
        {/* Front cover */}
        <div
          className="absolute inset-0 rounded-r-md rounded-l-sm overflow-hidden"
          style={{ transform: 'translateZ(15px)', boxShadow: '0 20px 48px rgba(0,0,0,0.18)' }}
        >
          <div className="absolute inset-0 bg-ink flex flex-col justify-between p-6 md:p-8">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-flax" />

            <div className="font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase mt-2">
              Flax
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="font-serif font-black text-flax leading-none mb-3"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 5rem)' }}>
                50
              </div>
              <div className="font-serif font-bold text-white text-xl md:text-2xl leading-snug mb-2">
                AI Founders
              </div>
              <p className="font-mono text-[10px] text-white/40 leading-relaxed tracking-wide">
                The Playbook for Building<br />Products That Win
              </p>
            </div>

            <div className="font-mono text-[9px] text-white/25 tracking-wide">
              Hari Prasad & Sunjana Ramana
            </div>
          </div>
        </div>

        {/* Spine */}
        <div
          className="absolute top-0 left-0 w-[28px] h-full bg-flax-dark rounded-l-sm"
          style={{ transform: 'rotateY(-90deg) translateX(-14px)', transformOrigin: 'left' }}
        >
          <div className="h-full flex items-center justify-center">
            <span className="font-mono text-[7px] text-white/50 tracking-widest rotate-180"
              style={{ writingMode: 'vertical-rl' }}>
              50 AI FOUNDERS
            </span>
          </div>
        </div>

        {/* Pages side */}
        <div
          className="absolute top-[3px] right-0 w-[22px] h-[calc(100%-6px)] rounded-r-sm overflow-hidden"
          style={{
            transform: 'rotateY(90deg) translateX(11px)',
            transformOrigin: 'right',
            background: 'linear-gradient(to right, #f0ede8 0%, #e8e4de 20%, #ede9e3 60%, #e5e0da 100%)',
          }}
        >
          {[...Array(18)].map((_, i) => (
            <div key={i} className="w-full h-[1px] bg-black/8" style={{ marginTop: `${5 + i * 5}%` }} />
          ))}
        </div>

        {/* Back cover */}
        <div
          className="absolute inset-0 bg-ink rounded-r-md rounded-l-sm border border-white/5"
          style={{ transform: 'translateZ(-15px)' }}
        />
      </div>
    </div>
  );
};

// ============ NAVBAR ============

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-rule' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-serif font-black text-ink text-lg">Flax</span>
          <span className="font-mono text-[11px] text-flax">/book</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {[
            { label: 'About',       href: '#about' },
            { label: "What's Inside", href: '#lessons' },
            { label: 'Founders',    href: '#founders' },
          ].map(l => (
            <a key={l.label} href={l.href}
              className="font-mono text-[12px] text-ink-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#notify" className="btn btn-primary btn-sm"
          style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}>
          Get notified
        </a>
      </div>
    </nav>
  );
};

// ============ HERO ============

const Hero: React.FC = () => (
  <section className="pt-14 pb-0 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">
      <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Copy */}
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 mb-7 opacity-0-start animate-fade-in">
            <div className="w-1.5 h-1.5 rounded-full bg-flax" />
            <span className="label">Coming 2026</span>
          </div>

          <h1 className="font-serif font-black text-ink mb-6 opacity-0-start animate-fade-in-up delay-100"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            50 AI Founders.<br />50 Lessons That Won.
          </h1>

          <p className="text-ink-muted text-lg leading-relaxed mb-8 max-w-sm opacity-0-start animate-fade-in-up delay-200">
            The playbook for building AI products that actually work. Straight from the founders who did it. Real stories. Real strategies. No theory.
          </p>

          <div className="flex items-center gap-3 flex-wrap opacity-0-start animate-fade-in-up delay-300">
            <a href="#notify" className="btn btn-primary">Get early access</a>
            <a href="#lessons" className="btn btn-ghost">See what's inside</a>
          </div>

          {/* Stats */}
          <div className="mt-10 pt-8 border-t border-rule grid grid-cols-3 gap-4 opacity-0-start animate-fade-in-up delay-400">
            {[
              { value: '50+',  label: 'Founders' },
              { value: '$2B+', label: 'Combined valuation' },
              { value: '100+', label: 'Strategies' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-serif font-black text-ink text-2xl md:text-3xl">{s.value}</div>
                <div className="label mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Book */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end opacity-0-start animate-fade-in delay-200">
          <Book3D />
        </div>

      </div>
    </div>
  </section>
);

// ============ ABOUT ============

const About: React.FC = () => (
  <section id="about" className="py-24 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <div>
          <div className="label mb-5">The concept</div>
          <h2 className="font-serif font-black text-ink mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            Not another<br />startup book.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            This is a collection of battle-tested lessons from founders who built AI companies that actually won. No fluffy advice. No hypotheticals.
          </p>
          <p className="text-ink-muted text-base leading-relaxed mb-8">
            Each chapter is a conversation with a founder who faced the same challenges you're facing and figured it out. From that one crazy marketing hack that 10x'd their growth, to the pivot that saved everything.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Product Strategy', 'Go-to-Market', 'Fundraising', 'Team Building', 'Growth Hacks'].map(tag => (
              <span key={tag} className="font-mono text-[11px] text-ink-muted border border-rule px-2.5 py-1 bg-paper rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="card p-8">
          <div className="w-8 h-8 text-flax mb-6 font-serif font-black text-4xl leading-none select-none">"</div>
          <p className="font-serif text-ink text-lg md:text-xl leading-relaxed mb-8">
            The best lessons aren't in textbooks. They're in the war stories of founders who lived it.
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-rule">
            <div className="w-10 h-10 rounded-full bg-flax flex items-center justify-center shrink-0">
              <span className="font-serif font-black text-white text-sm">H</span>
            </div>
            <div>
              <div className="font-mono text-[12px] text-ink font-medium">Hari Prasad & Sunjana Ramana</div>
              <div className="label mt-0.5">Authors & Curators</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ============ LESSONS ============

const lessons = [
  { title: 'The First 100 Users',        desc: 'How they got traction when nobody knew who they were.' },
  { title: 'The Growth Hack That Worked', desc: 'One unconventional strategy that changed everything.' },
  { title: 'Finding Product-Market Fit',  desc: 'The moment they knew they had something real.' },
  { title: 'Building the Team',           desc: 'Who they hired first, and why it mattered.' },
  { title: 'The AI Moat',                 desc: 'How they stayed ahead when everyone had access to GPT.' },
  { title: 'The Pivot Story',             desc: 'When they threw away the plan and won anyway.' },
];

const Lessons: React.FC = () => (
  <section id="lessons" className="py-24 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <div className="mb-16">
        <div className="label mb-4">What's inside</div>
        <h2 className="font-serif font-black text-ink"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
          The lessons that actually matter.
        </h2>
      </div>

      <div className="space-y-0 divide-y divide-rule border-t border-b border-rule">
        {lessons.map((l, i) => (
          <div key={l.title}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-7 hover:bg-surface/60 transition-colors duration-200 px-4 -mx-4">
            <div className="flex items-baseline gap-4">
              <span className="label w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-serif font-bold text-ink text-lg">{l.title}</span>
            </div>
            <p className="text-ink-muted text-base leading-relaxed md:pl-4">{l.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

// ============ FOUNDERS ============

const Founders: React.FC = () => (
  <section id="founders" className="py-24 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">

      <div className="label mb-5">The founders</div>
      <h2 className="font-serif font-black text-ink mb-16"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
        50 founders.<br />50 stories.
      </h2>

      <div className="flex flex-wrap gap-3 mb-12">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i}
            className="w-12 h-12 rounded-full bg-paper border border-rule flex items-center justify-center">
            <span className="font-mono text-[10px] text-rule">?</span>
          </div>
        ))}
        <div className="w-12 h-12 rounded-full border border-dashed border-rule flex items-center justify-center">
          <span className="font-mono text-[10px] text-ink-muted">+32</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span className="label">Interviews in progress</span>
      </div>

    </div>
  </section>
);

// ============ NOTIFY ============

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
    <section id="notify" className="py-28">
      <div className="max-w-5xl mx-auto px-6 text-center" style={{ background: 'inherit' }}>

        <div className="label mb-6">Get notified</div>
        <h2 className="font-serif font-black text-ink mb-5"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
          Don't miss the drop.
        </h2>
        <p className="text-ink-muted text-base mb-10 max-w-sm mx-auto leading-relaxed">
          Be the first to get the book, plus exclusive founder interviews and behind-the-scenes content.
        </p>

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

        <p className="font-mono text-[11px] text-ink-muted/50 mt-6">
          No spam. Just book updates and founder stories.
        </p>
      </div>
    </section>
  );
};

// ============ FOOTER ============

const BookFooter: React.FC = () => (
  <footer className="bg-paper border-t border-rule">
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-serif font-black text-ink text-xl">Flax</span>
          <span className="text-rule">·</span>
          <span className="font-mono text-[11px] text-ink-muted">Book</span>
        </div>
        <div className="flex gap-6">
          <a href="/" className="font-mono text-[12px] text-ink-muted hover:text-ink transition-colors">
            Main site
          </a>
          <a href="mailto:contact@joinflax.com"
            className="font-mono text-[12px] text-ink-muted hover:text-ink transition-colors">
            contact@joinflax.com
          </a>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-rule">
        <span className="font-mono text-[10px] text-ink-muted">© 2026 Flax. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

// ============ APP ============

function BookApp() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Navbar />
      <main>
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
