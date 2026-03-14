import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';

export const CTASection: React.FC = () => {
  const [email, setEmail]   = useState('');
  const [done, setDone]     = useState(false);
  const [focused, setFocused] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section id="waitlist" style={{ background: 'hsl(0,0%,10%)' }} className="py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <Reveal>
          <div className="label mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Early Access
          </div>
          <h2 className="font-serif font-black text-white mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            Give Flaxie<br />to your team.
          </h2>
          <p className="text-white/45 text-base mb-10 max-w-sm mx-auto leading-relaxed">
            Free during beta. We're onboarding a small number of teams. Apply to get early access.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {done ? (
            <div className="inline-block text-center py-4">
              <div className="font-serif font-bold text-white text-xl mb-2">You're on the list.</div>
              <p className="text-white/40 text-sm font-mono">We'll be in touch when your spot opens.</p>
            </div>
          ) : (
            <form onSubmit={submit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="you@company.com"
                className="w-full sm:flex-1 font-mono text-sm px-4 py-3 text-white
                  placeholder-white/30 outline-none rounded-md transition-all duration-150"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: `1px solid ${focused ? '#5A53E1' : 'rgba(255,255,255,0.15)'}`,
                  borderRadius: '5px',
                }}
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap shrink-0">
                Request access
              </button>
            </form>
          )}
        </Reveal>

        {/* Trust line */}
        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              'Works with Zoom, Meet & Teams',
              'Connects to Notion, Confluence, Google Docs',
              'No setup for your team',
            ].map(t => (
              <span key={t} className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
