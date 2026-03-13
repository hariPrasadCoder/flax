import React, { useEffect, useRef, useState } from 'react';

const flowSteps = [
  {
    num: '01',
    title: 'Meeting happens',
    sub: 'Your team talks',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 15l3-3 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Bot joins',
    sub: 'Auto-transcribed',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'AI extracts',
    sub: 'Decisions & changes',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M2 8h8M2 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="12.5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Diff proposed',
    sub: 'Per document',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 5h12M2 8h7M2 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M11 9l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Docs updated',
    sub: 'Auto or confirmed',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const HowItWorks: React.FC = () => {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          flowSteps.forEach((_, i) => {
            setTimeout(() => setActive(i), i * 280);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20">

        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="section-label">How It Works</span>
            <span className="section-label">§ 2</span>
          </div>
          <div className="rule-thick" />
        </div>

        <div className="mb-12">
          <h2 className="font-serif font-black text-ink text-3xl md:text-4xl leading-[1.15] max-w-xl">
            Flaxie joins every meeting.<br />Your docs stay current.
          </h2>
        </div>

        {/* Flow diagram */}
        <div ref={ref} className="relative">

          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-start gap-0">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.num}>
                <div
                  className={`flex-1 transition-all duration-400 ${active >= i ? 'opacity-100' : 'opacity-25'}`}
                >
                  <div className={`card p-4 transition-shadow duration-300 ${active >= i ? 'shadow-editorial' : 'shadow-none'}`}>
                    <div className={`text-ink-muted mb-3 transition-colors duration-300 ${active >= i ? 'text-ink' : ''}`}>
                      {step.icon}
                    </div>
                    <div className="section-label mb-1">{step.num}</div>
                    <div className="font-serif font-bold text-ink text-[13px] leading-snug">{step.title}</div>
                    <div className="text-[10px] text-ink-muted font-mono mt-0.5">{step.sub}</div>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < flowSteps.length - 1 && (
                  <div className={`flex items-center justify-center w-8 shrink-0 pt-5 transition-opacity duration-300 ${active > i ? 'opacity-100' : 'opacity-20'}`}>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                      <path d="M0 5h16M13 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden space-y-2">
            {flowSteps.map((step, i) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="card w-9 h-9 flex items-center justify-center shrink-0 text-ink">
                    {step.icon}
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="w-px h-6 bg-rule mt-1" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="font-serif font-bold text-ink text-sm">{step.title}</div>
                  <div className="text-[11px] text-ink-muted font-mono">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 pt-8 border-t border-rule flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted font-mono max-w-md leading-6">
            Flaxie updates docs on its own for clear decisions. When context is ambiguous, it surfaces a diff and asks you to confirm — then updates immediately.
          </p>
          <a href="#waitlist" className="btn-outline self-start md:self-auto shrink-0">
            Get early access →
          </a>
        </div>

      </div>
    </section>
  );
};
