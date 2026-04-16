import React, { useState, useEffect } from 'react';
import { Reveal } from './components/ui/Reveal';

/* ── Cal embed ─────────────────────────────────────────────── */

function useCalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = (a: any, ar: any) => a.q.push(ar);
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
        if (ar[0] === L) { const api: any = function () { p(api, arguments); }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['initNamespace', ns]); } else p(cal, ar); return; } p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');
    const w = window as any;
    w.Cal('init', 'strategy-call', { origin: 'https://app.cal.com' });
    w.Cal.ns['strategy-call']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, []);
}

/* ── Navbar ────────────────────────────────────────────────── */

function HireNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const textColor = scrolled ? '#111' : '#fff';

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '14px 20px', zIndex: 100, pointerEvents: 'none' }}>
        <nav style={{
          maxWidth: 1060, margin: '0 auto', height: 52, borderRadius: 100,
          background: scrolled ? 'rgba(248,246,242,0.96)' : 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.14)',
          display: 'flex', alignItems: 'center',
          padding: '0 24px', pointerEvents: 'auto',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 0 0 1px rgba(255,255,255,0.06) inset',
        }}>
          {/* Logo — flex:1 so it anchors left and balances the CTA on right */}
          <div style={{ flex: 1 }}>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <img src="/logo.svg" alt="Flax" width={22} height={22} />
              <span style={{ fontFamily: 'Merriweather, serif', fontSize: 15, fontWeight: 700, color: textColor, transition: 'color 0.3s' }}>
                Flax
              </span>
            </a>
          </div>

          {/* Center links — desktop only */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
            <a href="#roster" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: scrolled ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}>Roles</a>
            <a href="#faq"    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: scrolled ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}>FAQ</a>
          </div>

          {/* CTA — flex:1 + justify-end so it anchors right */}
          <div className="hidden md:flex" style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <button
              className="btn btn-primary btn-sm"
              style={{ borderRadius: 100 }}
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a call
            </button>
          </div>

          {/* Burger — mobile only */}
          <button className="md:hidden ml-auto" onClick={() => setMenuOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 18, height: 2, background: textColor, borderRadius: 2, transition: 'background 0.3s' }} />
              ))}
            </div>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 24, right: 28, background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 28, lineHeight: 1 }}>
            ×
          </button>
          <a href="#roster" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'Merriweather, serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>Roles</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'Merriweather, serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>FAQ</a>
          <button
            className="btn btn-primary"
            style={{ marginTop: 12 }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={() => setMenuOpen(false)}
          >
            Book a call
          </button>
        </div>
      )}
    </>
  );
}

/* ── Hero ──────────────────────────────────────────────────── */

const PARTICLES = [
  { left: '6%',  top: '88%', size: 1.5, dur: 9,  delay: 0   },
  { left: '11%', top: '72%', size: 1,   dur: 13, delay: 1.5 },
  { left: '17%', top: '83%', size: 2,   dur: 8,  delay: 3.2 },
  { left: '23%', top: '65%', size: 1,   dur: 14, delay: 0.8 },
  { left: '30%', top: '91%', size: 1.5, dur: 10, delay: 2.4 },
  { left: '37%', top: '77%', size: 1,   dur: 7,  delay: 4.1 },
  { left: '43%', top: '86%', size: 2,   dur: 11, delay: 1.0 },
  { left: '50%', top: '70%', size: 1,   dur: 13, delay: 2.9 },
  { left: '56%', top: '93%', size: 1.5, dur: 9,  delay: 3.7 },
  { left: '62%', top: '75%', size: 1,   dur: 8,  delay: 0.4 },
  { left: '68%', top: '84%', size: 2,   dur: 12, delay: 1.9 },
  { left: '74%', top: '67%', size: 1,   dur: 10, delay: 4.6 },
  { left: '80%', top: '89%', size: 1.5, dur: 7,  delay: 2.1 },
  { left: '86%', top: '76%', size: 1,   dur: 11, delay: 0.6 },
  { left: '92%', top: '82%', size: 2,   dur: 9,  delay: 3.3 },
  { left: '4%',  top: '42%', size: 1,   dur: 15, delay: 1.1 },
  { left: '28%', top: '32%', size: 1,   dur: 12, delay: 2.7 },
  { left: '73%', top: '36%', size: 1,   dur: 14, delay: 0.9 },
  { left: '95%', top: '48%', size: 1,   dur: 11, delay: 3.8 },
  { left: '52%', top: '55%', size: 1,   dur: 16, delay: 5.2 },
];

function HireHero() {
  return (
    <section className="dot-grid" style={{
      background: '#0f0f0f', position: 'relative', overflow: 'hidden',
      paddingTop: 160, paddingBottom: 120, minHeight: '100vh',
      display: 'flex', alignItems: 'center',
    }}>
      <style>{`
        @keyframes ember-rise {
          0%   { transform: translateY(0px) scale(1);     opacity: 0; }
          8%   { opacity: 1; }
          85%  { opacity: 0.6; }
          100% { transform: translateY(-90px) scale(0.4); opacity: 0; }
        }
      `}</style>

      {/* ── Background: layered glows ── */}
      {/* Central orb */}
      <div className="glow-drift" style={{
        position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(90,83,225,0.18) 0%,rgba(90,83,225,0.04) 50%,transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Bottom-left satellite */}
      <div style={{
        position: 'absolute', bottom: '-5%', left: '-10%',
        width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(90,83,225,0.16) 0%,transparent 65%)',
        animation: 'glow-drift 20s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Top-right satellite */}
      <div style={{
        position: 'absolute', top: '0%', right: '-12%',
        width: 440, height: 440, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(90,83,225,0.13) 0%,transparent 65%)',
        animation: 'glow-drift 15s ease-in-out infinite reverse',
        pointerEvents: 'none', zIndex: 0,
      }} />


      {/* ── Background: ember particles ── */}
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: p.left, top: p.top,
          width: p.size + 1, height: p.size + 1, borderRadius: '50%',
          background: 'rgba(120,110,255,0.9)',
          boxShadow: '0 0 4px rgba(90,83,225,0.6)',
          pointerEvents: 'none', zIndex: 0,
          animation: `ember-rise ${p.dur}s ease-in ${p.delay}s infinite`,
        }} />
      ))}

      {/* ── Content ── */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', width: '100%', zIndex: 1 }}>
        <div style={{ animationName: 'fade-in', animationDuration: '0.6s', animationFillMode: 'both', marginBottom: 28 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#5A53E1',
            border: '1px solid rgba(90,83,225,0.3)',
            padding: '5px 14px', borderRadius: 100,
          }}>
            Available now
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Merriweather, serif',
          fontSize: 'clamp(2.2rem,4.8vw,3.8rem)',
          fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#fff',
          marginBottom: 28,
          animationName: 'fade-in-up', animationDuration: '0.7s', animationDelay: '0.1s', animationFillMode: 'both',
        }}>
          Your next employee<br />
          <span style={{ color: '#5A53E1' }}>doesn't need a salary.</span>
        </h1>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.95rem,1.8vw,1.05rem)',
          color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto 44px', lineHeight: 1.9,
          animationName: 'fade-in-up', animationDuration: '0.7s', animationDelay: '0.2s', animationFillMode: 'both',
        }}>
          Fully managed AI employees for early-stage teams. Pick a role. We configure it, integrate it, and run it. Live in 48 hours.
        </p>

        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          animationName: 'fade-in-up', animationDuration: '0.7s', animationDelay: '0.3s', animationFillMode: 'both',
        }}>
          <button
            className="btn btn-primary"
            style={{ padding: '13px 30px', fontSize: '0.95rem' }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a call
          </button>
          <a href="#roster" className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.5)', padding: '13px 30px', fontSize: '0.95rem',
          }}>
            See the roles
          </a>
        </div>

        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          animationName: 'fade-in', animationDuration: '1s', animationDelay: '0.6s', animationFillMode: 'both',
        }}>
          {[
            { value: '48 hrs', label: 'from call to live' },
            { value: '$70K+',  label: 'saved per year' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              padding: '28px 0',
              borderRight: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 8 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Supported by Antler */}
        <div style={{
          marginTop: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          animationName: 'fade-in', animationDuration: '1s', animationDelay: '0.8s', animationFillMode: 'both',
        }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            Supported by
          </span>
          <img
            src="/Antler_logo.svg"
            alt="Antler"
            style={{ height: 22, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.25, transition: 'opacity 0.2s ease' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.25')}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Roster ────────────────────────────────────────────────── */

const ROLES = [
  { id: 'ea',     init: 'EA', title: 'Executive Assistant',  desc: 'Takes over your inbox, calendar, and follow-ups so you only touch what actually needs you.',                tasks: ['Email triage and drafts', 'Calendar and scheduling', 'Meeting prep and summaries'],   saves: '$68,000', color: '#5A53E1', active: true  },
  { id: 'fa',     init: 'FA', title: "Founder's Associate",  desc: 'Runs research, investor comms, decks, and the ops tasks that fall through the cracks.',                    tasks: ['Investor research and outreach', 'Pitch deck drafts', 'Weekly ops reports'],          saves: '$62,000', color: '#5A53E1', active: true  },
  { id: 'gtm',    init: 'GT', title: 'GTM Strategist',       desc: 'Builds your go-to-market engine: leads, messaging, positioning, and campaign ops.',                        tasks: ['Lead list building', 'Positioning documents', 'Campaign setup and tracking'],         saves: '$90,000', color: '#5A53E1', active: true  },
  { id: 'sales',  init: 'SE', title: 'Sales Executive',      desc: 'Runs outbound sequences, keeps your CRM clean, and drafts proposals before you ask.',                     tasks: ['Outreach sequences', 'CRM hygiene', 'Proposal and quote drafts'],                     saves: '$95,000', color: '#5A53E1', active: true  },
  { id: 'ra',     init: 'RA', title: 'Research Analyst',     desc: 'Delivers competitive intelligence, market sizing, and decision-ready summaries on demand.',               tasks: ['Competitive landscape reports', 'Market sizing research', 'Weekly briefings'],        saves: '$65,000', color: '#5A53E1', active: true  },
  { id: 'custom', init: '+',  title: 'Custom role',          desc: 'Have a role in mind that is not listed? Describe it and we will assess AI coverage and build it for you.', tasks: ['Legal and compliance ops', 'Finance and bookkeeping', 'Customer success'],           saves: null,      color: '#5A53E1', active: true  },
];

function RoleCard({ role }: { role: typeof ROLES[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? 'rgba(90,83,225,0.3)' : '#ece9e4'}`,
        borderRadius: 12, padding: '28px 24px',
        display: 'flex', flexDirection: 'column', height: '100%',
        opacity: role.active ? 1 : 0.55,
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: hovered ? '0 4px 32px rgba(90,83,225,0.08)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.08em', color: '#5A53E1',
        }}>
          {role.init}
        </span>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: role.active ? '#059669' : '#bbb',
          background: role.active ? 'rgba(5,150,105,0.07)' : '#f5f5f5',
          padding: '3px 10px', borderRadius: 100,
        }}>
          {role.active ? 'Available' : 'Coming soon'}
        </span>
      </div>

      <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: 10 }}>
        {role.title}
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#777', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
        {role.desc}
      </p>

      <div style={{ borderTop: '1px solid #f2efea', paddingTop: 16, marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {role.tasks.map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#d0cce8', flexShrink: 0 }} />
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: '#888', lineHeight: 1.4 }}>{t}</span>
          </div>
        ))}
      </div>

      {role.saves ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderTop: '1px solid #f2efea', paddingTop: 16 }}>
          <div>
            <span style={{ fontFamily: 'Merriweather, serif', fontSize: '1.1rem', fontWeight: 900, color: '#111' }}>{role.saves}</span>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: '#aaa', marginLeft: 6 }}>/yr saved</span>
          </div>
          <button
            style={{
              fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.04em',
              background: '#5A53E1', color: '#fff', border: 'none', borderRadius: 8,
              padding: '8px 16px', cursor: 'pointer', transition: 'opacity 0.15s',
            }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Hire this role
          </button>
        </div>
      ) : (
        <div style={{ borderTop: '1px solid #f2efea', paddingTop: 16 }}>
          <button
            style={{
              fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.04em',
              background: 'none', border: '1px solid #e0ddd8', color: '#888', borderRadius: 8,
              padding: '8px 16px', cursor: 'pointer', width: '100%',
            }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Describe your role
          </button>
        </div>
      )}
    </div>
  );
}

function RosterSection() {
  return (
    <section id="roster" style={{ background: '#fff', padding: '120px 0', borderTop: '1px solid #f0eeea' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A53E1' }}>
            Available roles
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 14, marginBottom: 14, color: '#111' }}>
            Pick a role. We fill it.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#888', maxWidth: 480, lineHeight: 1.8, marginBottom: 60 }}>
            Every role is fully managed. You describe what you need, we configure, deploy, and maintain your AI worker.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
          {ROLES.map((role, i) => (
            <Reveal key={role.id} delay={i * 60}>
              <RoleCard role={role} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How it works ──────────────────────────────────────────── */

const STEPS = [
  { n: '01', title: 'Tell us the role in 30 minutes', desc: 'One call. You describe the responsibilities, the tools you use, and how you work. We take it from there.' },
  { n: '02', title: 'We build and integrate everything', desc: 'Our team configures your AI worker, connects it to your stack, and runs thorough testing before it goes live. No code required from you.' },
  { n: '03', title: 'Results from day one, improving every week', desc: 'Your AI worker handles the work automatically from launch day. We monitor, maintain, and improve it continuously based on real usage.' },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ background: '#fff', padding: '120px 0', borderTop: '1px solid #f0eeea' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A53E1' }}>
            The process
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 14, marginBottom: 72, color: '#111' }}>
            From conversation to running<br />in 48 hours.
          </h2>
        </Reveal>

        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 100}>
            <div style={{
              display: 'grid', gridTemplateColumns: '72px 1fr', gap: 40, alignItems: 'flex-start',
              padding: '40px 0',
              borderTop: '1px solid #f0eeea',
            }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#5A53E1', paddingTop: 4 }}>
                {step.n}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.975rem', color: '#777', lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div style={{ borderTop: '1px solid #f0eeea' }} />
      </div>
    </section>
  );
}

/* ── JD Analyzer ───────────────────────────────────────────── */

interface JDResult {
  aiTasks: string[];
  humanTasks: string[];
  coverage: number;
  annualSavings: number;
  roleName: string;
  rationale: string;
}

const GEMINI_PROMPT = (jd: string) => `You are an AI workforce consultant at Flax, a company that deploys fully managed AI employees for businesses.

Analyze the following job description and determine what an AI employee can and cannot do for this role.

Job Description:
"""
${jd}
"""

Return a JSON object with this exact structure (no markdown, just raw JSON):
{
  "roleName": "short role title (e.g. Executive Assistant, Sales Executive)",
  "aiTasks": ["task 1", "task 2", "task 3", "task 4", "task 5", "task 6"],
  "humanTasks": ["task 1", "task 2", "task 3"],
  "coverage": 82,
  "annualSavings": 54000,
  "rationale": "One sentence explanation of the savings estimate."
}

Rules:
- aiTasks: 5-7 specific tasks from the JD that AI can fully or largely handle
- humanTasks: 2-4 tasks that genuinely require human judgment, relationships, or authority
- coverage: integer percentage (60-90)
- annualSavings: estimated annual cost saving in USD vs hiring a human
- rationale: one concise sentence
- Return ONLY valid JSON, no extra text`;

async function analyzeJDWithGemini(jd: string): Promise<JDResult> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return fallbackAnalyze(jd);
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: GEMINI_PROMPT(jd) }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 2048, responseMimeType: 'application/json', thinkingConfig: { thinkingBudget: 0 } },
      }),
    }
  );
  if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
  const data = await res.json();
  const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const parsed = JSON.parse(text) as JDResult;
  return {
    roleName: parsed.roleName ?? 'this role',
    aiTasks: (parsed.aiTasks ?? []).slice(0, 7),
    humanTasks: (parsed.humanTasks ?? []).slice(0, 4),
    coverage: Math.min(95, Math.max(50, parsed.coverage ?? 80)),
    annualSavings: parsed.annualSavings ?? 54000,
    rationale: parsed.rationale ?? '',
  };
}

function fallbackAnalyze(jd: string): JDResult {
  const AI_SIGNALS = [
    { re: /schedul|calendar|appoint|meeting/i, label: 'Calendar management and scheduling' },
    { re: /email|inbox|correspond|reply/i,      label: 'Email triage and responses' },
    { re: /research|analy[sz]|report|summar/i,  label: 'Research and report generation' },
    { re: /data|track|monitor|dashboard/i,      label: 'Data tracking and monitoring' },
    { re: /draft|writ|content|document|copy/i,  label: 'Document drafting and editing' },
    { re: /follow.?up|remind|alert|notif/i,     label: 'Follow-ups and reminders' },
    { re: /crm|salesforce|hubspot|pipeline/i,   label: 'CRM hygiene and updates' },
    { re: /travel|book|logistics|arrang/i,       label: 'Travel and logistics coordination' },
    { re: /outreach|prospect|lead|sourc/i,      label: 'Lead research and outreach' },
    { re: /brief|agenda|minutes|recap/i,         label: 'Meeting briefs and summaries' },
  ];
  const HUMAN_SIGNALS = [
    { re: /lead|manag|mentor|coach/i,   label: 'Team leadership and mentoring' },
    { re: /negotiat|deal|partner/i,     label: 'Relationship building and negotiation' },
    { re: /strateg|vision|roadmap/i,    label: 'Strategic decisions and direction' },
    { re: /hire|recruit|interview/i,    label: 'Hiring and culture decisions' },
  ];
  const FALLBACK_AI = ['Daily status updates', 'Task coordination', 'Vendor communication', 'Report compilation'];
  const aiTasks = AI_SIGNALS.filter(s => s.re.test(jd)).map(s => s.label);
  const humanTasks = HUMAN_SIGNALS.filter(s => s.re.test(jd)).map(s => s.label);
  const padded = [...aiTasks];
  for (const t of FALLBACK_AI) { if (padded.length >= 6) break; padded.push(t); }
  if (humanTasks.length === 0) humanTasks.push('Stakeholder relationships', 'Final decisions and approvals');
  const total = padded.length + humanTasks.length;
  const coverage = Math.round((padded.length / total) * 100);
  return { roleName: 'this role', aiTasks: padded.slice(0, 6), humanTasks: humanTasks.slice(0, 3), coverage, annualSavings: Math.round(72000 * (coverage / 100) * 0.75), rationale: 'Based on typical market salaries and task automation coverage.' };
}

function JDAnalyzerSection() {
  const [jd, setJd] = useState('');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState<JDResult | null>(null);
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (status !== 'analyzing') return;
    const iv = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 400);
    return () => clearInterval(iv);
  }, [status]);

  const handleAnalyze = async () => {
    if (jd.trim().length < 30) { setStatus('error'); setErrorMsg('Please add more detail to get an accurate analysis.'); return; }
    setStatus('analyzing'); setResult(null); setErrorMsg('');
    try { const r = await analyzeJDWithGemini(jd); setResult(r); setStatus('done'); }
    catch (err) { setStatus('error'); setErrorMsg(`Analysis failed: ${err instanceof Error ? err.message : String(err)}`); }
  };

  return (
    <section id="jd-analyzer" style={{ background: '#0f0f0f', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-drift" style={{ position: 'absolute', top: '20%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(90,83,225,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <Reveal>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A53E1' }}>
            Free analysis
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 14, marginBottom: 14, color: '#fff' }}>
            What would AI handle<br />in your next hire?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', maxWidth: 480, lineHeight: 1.85, marginBottom: 40 }}>
            Paste any job description. We will show you exactly what an AI employee covers and how much it saves you per year.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px' }}>
            <textarea
              value={jd}
              onChange={e => { setJd(e.target.value); if (status === 'error') setStatus('idle'); }}
              placeholder={'Paste the job description here...\n\nExample: "We are looking for an Executive Assistant to manage calendars, handle correspondence, coordinate travel, and support the CEO with research and administrative tasks..."'}
              style={{
                width: '100%', minHeight: 180, resize: 'vertical',
                background: 'transparent', border: 'none', outline: 'none',
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.82rem', lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)', padding: 0, boxSizing: 'border-box',
              }}
            />
            {status === 'error' && errorMsg && (
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: '#f87171', marginTop: 8 }}>{errorMsg}</p>
            )}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={handleAnalyze} disabled={status === 'analyzing'} className="btn btn-primary">
                {status === 'analyzing' ? `Analyzing${dots}` : 'Analyze with AI'}
              </button>
            </div>
          </div>
        </Reveal>

        {status === 'done' && result && (
          <div style={{ marginTop: 20, animationName: 'fade-in-up', animationDuration: '0.5s', animationFillMode: 'both' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div style={{ background: 'rgba(90,83,225,0.08)', border: '1px solid rgba(90,83,225,0.2)', borderRadius: 10, padding: '20px 24px' }}>
                <div style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, color: '#5A53E1', lineHeight: 1 }}>{result.coverage}%</div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'rgba(90,83,225,0.6)', marginTop: 6, letterSpacing: '0.06em' }}>AI-ready tasks</div>
              </div>
              <div style={{ background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.2)', borderRadius: 10, padding: '20px 24px' }}>
                <div style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#34d399', lineHeight: 1 }}>${result.annualSavings.toLocaleString()}</div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'rgba(52,211,153,0.6)', marginTop: 6, letterSpacing: '0.06em' }}>saved per year</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 22px' }}>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d399', marginBottom: 16 }}>AI handles</div>
                {result.aiTasks.map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: '#34d399', flexShrink: 0, fontSize: '0.7rem', marginTop: 2 }}>+</span>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 22px' }}>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: 16 }}>Still needs you</div>
                {result.humanTasks.map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: '#f87171', flexShrink: 0, fontSize: '0.7rem', marginTop: 2 }}>x</span>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {result.rationale && (
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.22)', marginBottom: 16, lineHeight: 1.6, textAlign: 'center' }}>{result.rationale}</p>
            )}

            <div style={{ background: 'rgba(90,83,225,0.08)', border: '1px solid rgba(90,83,225,0.2)', borderRadius: 10, padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: 4 }}>
                  Ready to build your AI {result.roleName}?
                </p>
                <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)' }}>One call. Live in 48 hours.</p>
              </div>
              <button
                className="btn btn-primary"
                data-cal-link="joinflax/strategy-call"
                data-cal-namespace="strategy-call"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >Let's build it</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Fully managed ─────────────────────────────────────────── */

const HANDLED = [
  'Onboarding and setup', 'API integrations', 'Training on your data', 'Workflow configuration',
  'Ongoing maintenance', 'Security and compliance', 'Performance monitoring', '24/7 availability',
  'Error handling', 'Tool updates', 'Version control', 'Weekly improvements',
];

function FullyManagedSection() {
  return (
    <section style={{ background: '#fff', padding: '120px 0', borderTop: '1px solid #f0eeea' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <Reveal>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A53E1' }}>
                Zero overhead
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.7rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.12, marginTop: 14, marginBottom: 20, color: '#111' }}>
                Not a tool.<br />A worker we run.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.975rem', color: '#777', lineHeight: 1.85, marginBottom: 32 }}>
                Every other product gives you a builder. We give you the built thing. Integrated, tested, and improving every week.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <blockquote style={{ borderLeft: '2px solid #5A53E1', paddingLeft: 20, margin: 0 }}>
                <p style={{ fontFamily: 'Merriweather, serif', fontSize: '0.95rem', fontStyle: 'italic', color: '#444', lineHeight: 1.7, marginBottom: 10 }}>
                  "You do not need to know anything about AI to hire an AI employee."
                </p>
                <cite style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: '#bbb', letterSpacing: '0.06em', fontStyle: 'normal' }}>
                  The Flax promise
                </cite>
              </blockquote>
            </Reveal>
          </div>

          <div>
            <Reveal delay={120}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {HANDLED.map((item, i) => (
                  <Reveal key={item} delay={120 + i * 30}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: '#fafaf9', border: '1px solid #ece9e4', borderRadius: 7 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#5A53E1', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: '#666', lineHeight: 1.3 }}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Day in the life ───────────────────────────────────────── */

type DayRole = 'ea' | 'sales' | 'research';

const DAY_ENTRIES: Record<DayRole, Array<{ time: string; action: string }>> = {
  ea: [
    { time: '8:00 am',  action: 'Triaged 47 emails. Flagged 3 that need your attention.' },
    { time: '9:15 am',  action: 'Conflicting meeting request declined and rescheduled to Thursday.' },
    { time: '11:30 am', action: 'Investor brief prepared with latest metrics and agenda.' },
    { time: '2:00 pm',  action: 'Follow-ups sent to 6 warm leads from last week.' },
    { time: '5:30 pm',  action: 'Daily summary delivered to your Slack. Zero missed tasks.' },
  ],
  sales: [
    { time: '8:00 am',  action: '18 personalized outreach emails drafted, reviewed, and queued.' },
    { time: '10:30 am', action: 'CRM updated with all notes and outcomes from yesterday.' },
    { time: '12:00 pm', action: 'Proposal for Acme Corp drafted and ready for your review.' },
    { time: '3:00 pm',  action: 'Follow-up sequence triggered for 9 leads who opened but did not reply.' },
    { time: '5:30 pm',  action: "Pipeline report with this week's activity sent to your inbox." },
  ],
  research: [
    { time: '8:00 am',  action: 'Competitor pricing updated across 8 companies in your market.' },
    { time: '10:00 am', action: 'Weekly market brief compiled and formatted for distribution.' },
    { time: '1:00 pm',  action: 'Due diligence summary for potential partnership finished and filed.' },
    { time: '3:30 pm',  action: 'Earnings call notes summarized from 3 relevant public companies.' },
    { time: '5:30 pm',  action: 'Research digest emailed with sources linked and highlights called out.' },
  ],
};

const DAY_LABELS: Record<DayRole, string> = { ea: 'Executive Assistant', sales: 'Sales Executive', research: 'Research Analyst' };

function DayInLifeSection() {
  const [activeRole, setActiveRole] = useState<DayRole>('ea');
  const entries = DAY_ENTRIES[activeRole];

  return (
    <section style={{ background: '#fff', padding: '120px 0', borderTop: '1px solid #f0eeea' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A53E1' }}>
            A day in the life
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 14, marginBottom: 12, color: '#111' }}>
            See what actually gets handled.
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.975rem', color: '#888', lineHeight: 1.8, marginBottom: 36 }}>
            This is a real day for a Flax AI employee. No prompting. No mid-day instructions. Just work, done.
          </p>
        </Reveal>

        <Reveal delay={170}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 48, flexWrap: 'wrap' }}>
            {(Object.entries(DAY_LABELS) as Array<[DayRole, string]>).map(([role, label]) => (
              <button key={role} onClick={() => setActiveRole(role)} style={{
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.04em',
                padding: '7px 16px', borderRadius: 100, cursor: 'pointer',
                background: activeRole === role ? '#5A53E1' : 'transparent',
                color: activeRole === role ? '#fff' : '#888',
                border: activeRole === role ? '1px solid #5A53E1' : '1px solid #e8e4de',
                transition: 'all 0.2s',
              }}>
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 76, top: 0, bottom: 0, width: 1, background: '#ece9e4' }} />

          {entries.map((entry, i) => (
            <Reveal key={`${activeRole}-${i}`} delay={i * 70}>
              <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20, paddingBottom: 16, position: 'relative' }}>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: '#bbb', paddingTop: 13, textAlign: 'right', paddingRight: 18, letterSpacing: '0.04em' }}>
                  {entry.time}
                </div>
                <div style={{ position: 'absolute', left: 71, top: 13, width: 10, height: 10, borderRadius: '50%', background: '#5A53E1', border: '2px solid #fff', zIndex: 1 }} />
                <div style={{
                  background: '#fafaf9', border: '1px solid #ece9e4', borderRadius: 9, padding: '12px 18px',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#333', lineHeight: 1.65,
                }}>
                  {entry.action}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={entries.length * 70 + 30}>
            <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20 }}>
              <div />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 4 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: '#34d399', letterSpacing: '0.04em' }}>Done. Ready for tomorrow.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ───────────────────────────────────────────────────── */

const FAQS = [
  { q: 'What if the AI makes a mistake?',             a: 'We monitor everything. Anything sensitive requires your explicit sign-off before it goes out. Think of it as a highly capable first draft that you review and approve. Over time the AI learns your preferences and mistakes become rare.' },
  { q: 'How is this different from ChatGPT or a VA?', a: 'ChatGPT answers questions when you ask. A VA needs active management. Your Flax AI employee works without prompting. It is wired into your tools, knows your context and preferences, and takes action automatically.' },
  { q: 'How long does setup take?',                   a: 'One 30-minute call is all we need. Most roles are live within 48 hours. Complex integrations might take a few extra days, but you will see output in the first week.' },
  { q: 'What does it cost?',                          a: 'Significantly less than a human hire. Pricing is role-dependent and based on scope. Book a call and we will give you an exact number in the first 15 minutes.' },
  { q: 'What access does the AI need?',               a: 'Read and write access to the tools relevant to the role: Gmail, Google Calendar, Notion, Slack, and others depending on what the role requires. All access is scoped, documented in writing, and fully reversible at any time.' },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: '#fff', padding: '120px 0', borderTop: '1px solid #f0eeea' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A53E1' }}>
            Common questions
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 14, marginBottom: 60, color: '#111' }}>
            Before you book the call.
          </h2>
        </Reveal>

        {FAQS.map((faq, i) => (
          <Reveal key={i} delay={i * 50}>
            <div style={{ borderTop: '1px solid #f0eeea', ...(i === FAQS.length - 1 ? { borderBottom: '1px solid #f0eeea' } : {}) }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '22px 0', gap: 24, textAlign: 'left',
              }}>
                <span style={{ fontFamily: 'Merriweather, serif', fontSize: '1rem', fontWeight: 700, color: '#111', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                  background: openIndex === i ? '#5A53E1' : 'rgba(0,0,0,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}>
                  <span style={{ color: openIndex === i ? '#fff' : '#888', fontSize: '1rem', lineHeight: 1, fontWeight: 300, display: 'block', transform: openIndex === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s, color 0.2s' }}>+</span>
                </div>
              </button>
              {openIndex === i && (
                <div style={{ paddingBottom: 22, animationName: 'fade-in-up', animationDuration: '0.25s', animationFillMode: 'both' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#666', lineHeight: 1.85, margin: 0, maxWidth: 540 }}>{faq.a}</p>
                </div>
              )}
            </div>
          </Reveal>
        ))}

        <Reveal delay={320}>
          <p style={{ marginTop: 44, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', color: '#ccc', textAlign: 'center' }}>
            Still have questions?{' '}
            <a href="mailto:contact@joinflax.com" style={{ color: '#5A53E1', textDecoration: 'none' }}>Email us directly.</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA ───────────────────────────────────────────────────── */

function HireCTASection() {
  return (
    <section style={{ background: '#0f0f0f', padding: '140px 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div className="glow-drift" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(90,83,225,0.14) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 580, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(2.2rem,5.5vw,4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.06, marginBottom: 20, color: '#fff' }}>
            Let's scope your<br />first AI hire.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', maxWidth: 400, margin: '0 auto 48px', lineHeight: 1.9 }}>
            One 30-minute call. We identify the right role, show you what AI covers, and have your first AI employee live in 48 hours.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              style={{ padding: '14px 36px', fontSize: '1rem' }}
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a call
            </button>
            <a href="mailto:contact@joinflax.com" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>
              or email us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────── */

function HireFooter() {
  return (
    <footer style={{ background: '#0a0a0a', padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/logo.svg" alt="Flax" width={20} height={20} />
          <span style={{ fontFamily: 'Merriweather, serif', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Flax</span>
        </a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:contact@joinflax.com" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}>contact@joinflax.com</a>
          <a href="/privacy"  style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}>Privacy</a>
          <a href="/security" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}>Security</a>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.1)' }}>2026 Flax</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Main ──────────────────────────────────────────────────── */

export default function HireApp() {
  useCalEmbed();
  useEffect(() => {
    document.title = 'Flax | Hire your AI Employee';
  }, []);
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
      <HireNavbar />
      <HireHero />
      <RosterSection />
      <HowItWorksSection />
      <JDAnalyzerSection />
      <FullyManagedSection />
      <DayInLifeSection />
      <FAQSection />
      <HireCTASection />
      <HireFooter />
    </div>
  );
}
