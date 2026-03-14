import React, { useState, useEffect } from 'react';

/* ─── App window mockup (loops) ────────────────────────────────── */
const AppMockup: React.FC = () => {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 900),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => setStep(3), 3900),
      setTimeout(() => setStep(4), 5300),
      setTimeout(() => setCycle(c => c + 1), 8400), // pause then loop
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

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
          <span className="font-mono text-[11px] text-white/35">architecture.md · Flax</span>
        </div>
        <div className={`flex items-center gap-1.5 transition-opacity duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[10px] text-white/45">Flaxie active</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex bg-surface" style={{ height: '400px' }}>

        {/* Sidebar — hidden on small screens */}
        <div className="hidden sm:flex w-44 shrink-0 border-r border-rule bg-paper flex-col p-3 gap-1">
          <div className="label mb-2 px-1">Meetings</div>
          <div className={`px-2 py-2 rounded-sm text-[11px] font-mono transition-all duration-500
            ${step >= 1 ? 'bg-ink text-white' : 'text-ink-muted'}`}>
            <div className="font-medium">Backend Sync</div>
            <div className={`text-[9px] mt-0.5 ${step >= 1 ? 'text-white/45' : 'text-ink-muted/60'}`}>
              {step >= 1 ? '● Live · 12 Mar' : '12 Mar'}
            </div>
          </div>
          {['Planning Review', 'Design Sync', 'All Hands'].map((name, i) => (
            <div key={name} className="px-2 py-2 text-[11px] font-mono text-ink-muted/60">
              <div>{name}</div>
              <div className="text-[9px]">{['10 Mar','8 Mar','5 Mar'][i]}</div>
            </div>
          ))}
        </div>

        {/* Document */}
        <div className="flex-1 min-w-0 px-5 md:px-7 py-5 md:py-6">
          <h2 className="font-serif font-bold text-ink text-base md:text-lg mb-5">Architecture Overview</h2>

          {/* Database */}
          <div className="mb-6">
            <div className="label mb-2">Database Layer</div>
            <div className="font-mono text-[11px] md:text-[12px] leading-5 space-y-1">
              {step >= 3 ? (
                <>
                  <div className="diff-remove px-1.5 py-0.5 rounded-sm line-through">
                    We use MongoDB as our primary data store.
                  </div>
                  <div className="diff-add px-1.5 py-0.5 rounded-sm">
                    + PostgreSQL as primary data store (migrating Q1 2026).
                  </div>
                  <div className="text-[10px] text-ink-muted/55 italic pl-1 mt-0.5">
                    ↑ Updated by Flaxie · just now
                  </div>
                </>
              ) : (
                <div className="text-ink px-1.5 py-0.5">
                  We use{' '}
                  <span className={step >= 2 ? 'bg-yellow-100 px-0.5' : ''}>MongoDB</span>
                  {' '}as our primary data store.
                </div>
              )}
            </div>
          </div>

          {/* API */}
          <div className="mb-5">
            <div className="label mb-2">API Layer</div>
            <div className="font-mono text-[11px] md:text-[12px] leading-5 space-y-1">
              {step >= 4 ? (
                <>
                  <div className="diff-remove px-1.5 py-0.5 rounded-sm line-through">
                    The v1 REST API is our primary integration layer.
                  </div>
                  <div className="diff-add px-1.5 py-0.5 rounded-sm">+ v1 REST API deprecated, Q1 2026.</div>
                  <div className="diff-add px-1.5 py-0.5 rounded-sm">+ GraphQL adopted for all new endpoints.</div>
                  <div className="text-[10px] text-ink-muted/55 italic pl-1 mt-0.5">
                    ↑ Updated by Flaxie · just now
                  </div>
                </>
              ) : (
                <div className="text-ink px-1.5 py-0.5">
                  The{' '}
                  <span className={step >= 2 ? 'bg-yellow-100 px-0.5' : ''}>v1 REST API</span>
                  {' '}is our primary integration layer.
                </div>
              )}
            </div>
          </div>

          {/* Status */}
          <div className={`flex items-center gap-2 text-[10px] font-mono text-ink-muted
            transition-opacity duration-500 ${step >= 2 && step < 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-1 h-1 rounded-full bg-flax animate-pulse" />
            Flaxie is reading the transcript…
          </div>
          {step >= 4 && (
            <div className="flex items-center gap-2 text-[10px] font-mono text-green-700">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              2 sections updated · no review needed
            </div>
          )}
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
          style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.25rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
        >
          Your meetings<br />write your docs.
        </h1>

        <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-lg mx-auto opacity-0-start animate-fade-in-up delay-200">
          Flaxie joins every meeting, reads what was decided,
          and updates your docs, automatically.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap opacity-0-start animate-fade-in-up delay-300">
          <button className="btn btn-primary" data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Book a demo</button>
          <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
        </div>
      </div>

      {/* App window */}
      <div className="opacity-0-start animate-fade-in delay-400">
        <AppMockup />
      </div>

      {/* Partner trust bar — below mockup */}
      <div className="mt-12 pt-10 border-t border-rule flex flex-col items-center gap-5 opacity-0-start animate-fade-in delay-500">
        <span className="label">Supported by</span>
        <div className="flex flex-wrap items-center justify-center gap-14">
          {[
            { src: '/Antler_logo.svg',  alt: 'Antler',          h: 28 },
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
