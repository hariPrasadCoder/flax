import React from 'react';
import { Reveal } from './ui/Reveal';

export const SocialProof: React.FC = () => (
  <section className="py-24 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="max-w-3xl">
          <p
            className="font-serif font-black text-ink mb-8"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
          >
            Imagine every meeting you ever have   every commitment, every decision, every "I'll handle it"  
            automatically handled and done.
            No chasing. No forgetting. No dropped balls.
          </p>
          <p className="text-ink-muted text-base leading-relaxed max-w-xl">
            That's where Flaxie is going. We're starting with follow-up. We're building toward
            a world where the gap between talking and doing disappears entirely.
          </p>
          <div className="mt-8 pt-8 border-t border-rule">
            <p className="font-mono text-[12px] text-ink-muted">
              Right now, Flaxie handles your meeting follow-up.{' '}
              <span className="text-ink">Next, she handles everything after it.</span>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
