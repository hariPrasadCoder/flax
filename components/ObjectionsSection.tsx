import React from 'react';
import { Reveal } from './ui/Reveal';

const objections = [
  {
    q: 'Does my team need to change anything?',
    a: 'No. They keep using whatever they already use. Flaxie reads what you share with it. Zero disruption, zero onboarding for your team.',
  },
  {
    q: 'Is my meeting data secure?',
    a: 'Yes. Notes are processed and never stored as raw text. Nobody at Flax reads your meetings. Your data stays yours.',
  },
  {
    q: 'What if my notetaker isn\'t supported?',
    a: 'If you can paste text, Flaxie can read it. Granola, Otter, Fireflies, a Google Doc, a raw copy-paste. All work exactly the same.',
  },
];

export const ObjectionsSection: React.FC = () => (
  <section className="py-20 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="label mb-12">Common questions</div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
        {objections.map((item, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="bg-paper px-6 py-6 h-full">
              <h3 className="font-serif font-bold text-ink text-[15px] leading-snug mb-3">
                {item.q}
              </h3>
              <p className="font-mono text-[11px] text-ink-muted leading-5">{item.a}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </section>
);
