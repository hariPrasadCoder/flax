import React from 'react';
import { Section } from './ui/Section';

export const Stats: React.FC = () => {
  const stats = [
    { value: "6.5x", label: "Average ROI", sublabel: "on influencer marketing spend", source: "Influencer Marketing Hub" },
    { value: "92%", label: "Trust Creators", sublabel: "over traditional advertising", source: "Nielsen" },
    { value: "11x", label: "Higher ROI", sublabel: "than banner ads", source: "TapInfluence" },
    { value: "49%", label: "Of Consumers", sublabel: "depend on influencer recommendations", source: "Digital Marketing Institute" }
  ];

  return (
    <Section className="bg-background relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">The Data</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
            Creator Marketing Works.
            <span className="text-gray-600"> The Numbers Prove It.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="glass-panel rounded-2xl p-6 md:p-8 text-center group hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500 mb-4">{stat.sublabel}</div>
              <div className="text-[10px] text-gray-600 font-mono">
                Source: {stat.source}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};
