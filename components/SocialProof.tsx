import React from 'react';
import { Reveal } from './ui/Reveal';

export const SocialProof: React.FC = () => (
  <section className="py-20 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            Built for founders who are tired of being the one who remembers everything.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
