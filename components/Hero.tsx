import React, { useState, useEffect } from 'react';

const DiffMockup: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 900);
    const t2 = setTimeout(() => setStep(2), 2600);
    const t3 = setTimeout(() => setStep(3), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full max-w-[500px] font-mono text-xs select-none">

      {/* Panel 1: Bot joined */}
      <div className="card mb-3 overflow-hidden">
        <div className="flex items-center justify-between px-3.5 py-2 border-b border-rule bg-paper/60">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-sm ${step >= 1 ? 'bg-green-600' : 'bg-rule'} transition-colors duration-300`} />
            <span className="section-label">Backend Sync · 12 Mar 2026</span>
          </div>
          <span className={`section-label transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            Bot joined
          </span>
        </div>
        <div className="px-3.5 py-3 text-[12px] leading-6 text-ink">
          <p className="text-ink-muted text-[10px] mb-1.5">14:22 — Engineering Lead</p>
          <p>"We're deprecating the <span className="bg-yellow-100 px-0.5">v1 REST API</span> by end of Q1. New endpoints move to GraphQL. Agreed unanimously."</p>
        </div>
        <div className={`px-3.5 pb-3 flex items-center gap-2 text-[10px] text-ink-muted transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block w-16 h-0.5 bg-rule overflow-hidden relative align-middle">
            <span className={`absolute left-0 top-0 h-full bg-ink transition-all duration-[1800ms] ${step >= 2 ? 'w-full' : 'w-0'}`} />
          </span>
          {step < 2 ? 'Analyzing…' : <span className="text-green-700">Analysis complete</span>}
        </div>
      </div>

      {/* Panel 2: Diff */}
      <div className={`card mb-3 overflow-hidden transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0 translate-y-1.5'}`}>
        <div className="flex items-center justify-between px-3.5 py-2 border-b border-rule bg-paper/60">
          <span className="section-label">Proposed Changes</span>
          <span className="section-label text-ink-muted">architecture.md</span>
        </div>
        <div className="px-3.5 py-2.5 space-y-1 text-[11px] leading-5">
          <div className="diff-remove px-2 py-0.5 rounded-sm">− v1 REST API is our primary integration layer.</div>
          <div className="diff-add px-2 py-0.5 rounded-sm">+ v1 REST API deprecated — end of Q1 2026.</div>
          <div className="diff-add px-2 py-0.5 rounded-sm">+ GraphQL adopted for all new endpoints.</div>
          <div className="diff-neutral px-2 py-0.5">&nbsp;&nbsp;Auth layer unchanged.</div>
        </div>
        <div className="px-3.5 pb-2.5">
          <div className="text-[10px] font-mono text-ink-muted bg-yellow-50 border border-yellow-200 px-2.5 py-1.5 rounded-sm mb-2">
            ⚠ Flaxie is unsure which doc to update. Confirm?
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-accept">✓ Confirm</button>
            <button className="btn-reject">Skip</button>
            <span className="text-[10px] text-ink-muted ml-auto">3 changes · 1 file</span>
          </div>
        </div>
      </div>

      {/* Panel 3: Done */}
      <div className={`card overflow-hidden transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0 translate-y-1.5'}`}>
        <div className="flex items-center justify-between px-3.5 py-2 border-b border-rule bg-paper/60">
          <span className="section-label">architecture.md</span>
          <span className="section-label text-green-700">✓ Updated just now</span>
        </div>
        <div className="px-3.5 py-2.5 text-[11px] text-ink leading-5 space-y-0.5">
          <p className="text-ink-muted text-[10px] mb-1">Last updated: 12 Mar 2026 via Flax</p>
          <p>v1 REST API deprecated — end of Q1 2026.</p>
          <p>GraphQL adopted for all new endpoints.</p>
          <p>Auth layer unchanged.</p>
        </div>
      </div>

    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-14 border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 w-full">

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="section-label">Documentation Infrastructure</span>
            <span className="section-label">Est. 2025</span>
          </div>
          <div className="rule-thick" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h1 className="font-serif font-black text-ink leading-[1.1] text-4xl md:text-5xl lg:text-[3.3rem] mb-5 animate-on-load animate-fade-in-up">
              Meet Flaxie — the AI that keeps your docs current.
            </h1>

            <p className="text-ink-muted text-sm leading-7 mb-8 max-w-md animate-on-load animate-fade-in-up delay-200">
              Flaxie joins your meetings, understands what changed, and updates your documentation automatically. It only asks for your input when it's not sure.
            </p>

            <div className="flex flex-wrap items-center gap-3 animate-on-load animate-fade-in-up delay-300">
              <a href="#waitlist" className="btn-primary">Get early access</a>
              <a href="#how-it-works" className="btn-outline">See how it works</a>
            </div>

            <div className="mt-10 pt-8 border-t border-rule flex flex-wrap gap-8 animate-on-load animate-fade-in-up delay-400">
              {[
                { value: 'Automatic', label: 'docs update themselves' },
                { value: 'Asks', label: 'only when uncertain' },
                { value: 'Flaxie', label: 'your AI doc agent' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif font-bold text-ink text-base mb-0.5">{s.value}</div>
                  <div className="section-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="hidden lg:flex justify-center animate-on-load animate-fade-in delay-200">
            <DiffMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
