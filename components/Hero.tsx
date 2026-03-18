import React, { useState, useEffect } from 'react';

/* ─── War Room Dashboard Mockup (loops) ────────────────────────── */
const DashboardMockup: React.FC = () => {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3400),
      setTimeout(() => setStep(4), 4600),
      setTimeout(() => setCycle(c => c + 1), 8500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const people = [
    { name: 'Alex',  overdue: 3, done: 4 },
    { name: 'Sam', overdue: 2, done: 5 },
    { name: 'Nina', overdue: 1, done: 6 },
  ];

  const projects = [
    { name: 'Product Hunt Launch', pct: 72 },
    { name: 'Investor Deck',       pct: 40 },
    { name: 'Hiring Pipeline',     pct: 58 },
  ];

  const nudges = [
    { icon: '⚡', text: 'Alex · 6 items open' },
    { icon: '⏰', text: 'Nina · deadline in 3 days' },
    { icon: '👻', text: 'Sam · 14 days silent' },
  ];

  return (
    <div className="w-full rounded-lg overflow-hidden border border-rule"
      style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.13)' }}>

      {/* Chrome */}
      <div className="bg-ink px-4 py-2.5 flex items-center gap-3 select-none">
        <div className="flex gap-1.5">
          {['#FF5F57','#FFBD2E','#28C840'].map(c => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.75 }} />
          ))}
        </div>
        <div className="flex-1 text-center">
          <span className="font-mono text-[11px] text-white/35">War Room · Flaxie</span>
        </div>
        <div className={`flex items-center gap-1.5 transition-opacity duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[10px] text-white/45">Flaxie active</span>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`px-5 py-3 border-b border-rule bg-paper flex items-center gap-6
        transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <span className="font-mono text-[11px] text-ink-muted">3 projects</span>
        <span className="font-mono text-[11px] text-red-500 font-medium">6 overdue</span>
        <span className="font-mono text-[11px] text-amber-600 font-medium">1 urgent</span>
      </div>

      {/* Body */}
      <div className="flex bg-surface" style={{ height: '340px' }}>

        {/* People sidebar */}
        <div className="hidden sm:flex w-44 shrink-0 border-r border-rule bg-paper flex-col p-3 gap-1">
          <div className="label mb-2 px-1">People</div>
          {people.map((p, i) => (
            <div key={p.name}
              className={`px-2 py-2 rounded-sm transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-ink font-medium">{p.name}</span>
                <span className="font-mono text-[10px] text-red-500">{p.overdue} overdue</span>
              </div>
              <div className="font-mono text-[9px] text-green-700 mt-0.5">{p.done} done ✓</div>
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="flex-1 min-w-0 px-5 py-5">
          <div className="label mb-3">Projects</div>
          <div className="space-y-4">
            {projects.map((proj, i) => (
              <div key={proj.name}
                className={`transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-ink">{proj.name}</span>
                  <span className="font-mono text-[10px] text-ink-muted">{proj.pct}%</span>
                </div>
                <div className="h-1.5 bg-rule rounded-full overflow-hidden">
                  <div
                    className="h-full bg-flax rounded-full transition-all duration-700"
                    style={{
                      width: step >= 3 ? `${proj.pct}%` : '0%',
                      transitionDelay: `${i * 80 + 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Nudge lines */}
          <div className={`mt-6 pt-5 border-t border-rule space-y-2
            transition-opacity duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            {nudges.map((n, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[11px]">{n.icon}</span>
                <span className="font-mono text-[10px] text-ink-muted">{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Hero ──────────────────────────────────────────────────────── */
export const Hero: React.FC = () => (
  <section className="pt-14 pb-16">
    <div className="max-w-5xl mx-auto px-6">

      {/* Copy */}
      <div className="pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-8 opacity-0-start animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-flax" />
          <span className="label">Early Access</span>
        </div>

        <h1
          className="font-serif font-black text-ink opacity-0-start animate-fade-in-up delay-100"
          style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.25rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
        >
          <span style={{ textDecoration: 'line-through', opacity: 0.35 }}>Meeting Note Taker.</span>
          <br />
          Meeting Action Taker.
        </h1>

        <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-md mx-auto opacity-0-start animate-fade-in-up delay-200">
          Integrates your meeting notes. Flaxie tracks every commitment and follows up before things go quiet.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap opacity-0-start animate-fade-in-up delay-300">
          <button className="btn btn-primary" data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Book a demo</button>
          <a href="#how-it-works" className="btn btn-ghost">How it works ↓</a>
        </div>
      </div>

      {/* Dashboard window */}
      <div className="opacity-0-start animate-fade-in delay-400">
        <DashboardMockup />
      </div>

      {/* Partner trust bar */}
      <div className="mt-12 pt-10 border-t border-rule flex flex-col items-center gap-5 opacity-0-start animate-fade-in delay-500">
        <span className="label">Supported by</span>
        <div className="flex flex-wrap items-center justify-center gap-14">
          {[
            { src: '/Antler_logo.svg', alt: 'Antler', h: 28 },
          ].map(({ src, alt, h }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              height={h}
              style={{
                height: `${h}px`,
                width: 'auto',
                filter: 'grayscale(1)',
                opacity: 0.4,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}
            />
          ))}
        </div>
      </div>

    </div>
  </section>
);
