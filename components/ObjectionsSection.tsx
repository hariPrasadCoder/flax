import React from 'react';
import { Reveal } from './ui/Reveal';

const objections = [
  {
    q: 'Does my team need to change anything?',
    a: 'Nothing. They keep using Granola, Zoom, Otter, Google Meet   whatever they already use. Flaxie reads what you share with it. Zero disruption, zero onboarding for your team.',
  },
  {
    q: 'Will Flaxie train AI on my meeting data?',
    a: 'Never. Your meetings are yours. We process notes to extract commitments, then discard the raw text. Your data is never used to train models   not ours, not anyone\'s.',
  },
  {
    q: 'What does Flaxie actually do vs. just track?',
    a: 'She acts. Not just tracks. She drafts the follow-up email, creates the Jira ticket, schedules the calendar invite. You approve before anything goes out. That\'s the difference.',
  },
  {
    q: 'What if my notetaker isn\'t listed?',
    a: 'If you can paste text, Flaxie can read it. Any format, any tool. Paste from a Google Doc, a Notion page, a raw transcript   it all works exactly the same.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. The free plan covers the essentials. If you want more   more meetings, more integrations, more automation   there\'s a Pro plan with a 14-day free trial.',
  },
  {
    q: 'How long does setup take?',
    a: 'Under 10 minutes for you. Zero for your team. Connect your calendar and email, paste your first meeting notes, and Flaxie is working.',
  },
];

export const ObjectionsSection: React.FC = () => (
  <section className="py-20 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="label mb-12">Common questions</div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
        {objections.map((item, i) => (
          <Reveal key={i} delay={i * 50}>
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
