import React from 'react';
import { Reveal } from './ui/Reveal';

const calProps = {
  'data-cal-link': 'joinflax/strategy-call',
  'data-cal-namespace': 'strategy-call',
  'data-cal-config': '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
};

export const CTASection: React.FC = () => (
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
          We're accepting 5 design partners. The product is built and working. Join early, use it with your team, and help us shape what comes next.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <button className="btn btn-primary" {...calProps}>
          Book a demo
        </button>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            'Works with Zoom, Meet & Teams',
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
