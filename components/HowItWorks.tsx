import React from 'react';
import { Section } from './ui/Section';

export const HowItWorks: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Strategy Call", 
      desc: "We learn about your business, goals, and audience. Figure out which path makes sense for you."
    },
    { 
      num: "02", 
      title: "Custom Plan", 
      desc: "We design a distribution strategy — whether that's building your voice, creator campaigns, or both."
    },
    { 
      num: "03", 
      title: "Execution", 
      desc: "We handle everything. You approve content and watch the distribution happen."
    }
  ];

  return (
    <Section id="how" className="bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
            Simple. Effective.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <span className="text-primary font-mono text-xl font-bold">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};
