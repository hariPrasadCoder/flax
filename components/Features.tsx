import React from 'react';

const features = [
  {
    tag: 'Automation',
    title: 'Flaxi updates docs automatically',
    body: 'No manual input needed. Flaxi reads the meeting and updates the right documents.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1v4M9 13v4M1 9h4M13 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    tag: 'Control',
    title: 'Only asks when uncertain',
    body: 'Flaxi handles clear decisions on its own. It surfaces a diff only when context is ambiguous.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 12v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="15.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: 'Integration',
    title: 'Bot joins your meetings',
    body: 'Powered by Recall.ai. The bot joins any meeting link: Zoom, Meet, Teams. No plugins for your team.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 17l3-4 3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    tag: 'Collaboration',
    title: 'Real-time, shared workspace',
    body: 'Everyone sees the same docs. Role-based access, change history, and live editing built in.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="6.5" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M1 15c0-2.2 2.5-4 5.5-4s5.5 1.8 5.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 12.5c1.7 0 3.5 1 3.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20">

        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="section-label">Features</span>
            <span className="section-label">§ 3</span>
          </div>
          <div className="rule-thick" />
        </div>

        <div className="mb-10">
          <h2 className="font-serif font-black text-ink text-3xl md:text-4xl leading-[1.15] max-w-lg">
            Flaxi does the work.<br />You stay in control.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule shadow-editorial">
          {features.map((f) => (
            <div key={f.title} className="bg-surface p-7 hover:bg-paper transition-colors duration-200 group">
              <div className="flex items-start justify-between mb-5">
                <div className="text-ink p-2 border border-rule bg-paper group-hover:bg-surface transition-colors">
                  {f.icon}
                </div>
                <span className="section-label">{f.tag}</span>
              </div>
              <h3 className="font-serif font-bold text-ink text-[16px] leading-snug mb-2">{f.title}</h3>
              <p className="text-ink-muted text-xs leading-6">{f.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
