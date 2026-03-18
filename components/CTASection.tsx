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
          We're onboarding<br />10 founding teams.
        </h2>

        {/* Spots counter */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`w-4 h-1.5 rounded-full ${i < 7 ? 'bg-flax' : 'bg-white/15'}`} />
            ))}
          </div>
          <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            7 of 10 spots filled
          </span>
        </div>

        <p className="text-white/45 text-base mb-10 max-w-md mx-auto leading-relaxed">
          We work directly with each team. Custom dashboard built from your actual meetings.
          Every commitment tracked. Every follow-up automated. No generic setup.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <button className="btn btn-primary" {...calProps}>
          Request access
        </button>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            '30-minute intro call. No pitch.',
            'Works with any meeting notes',
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
