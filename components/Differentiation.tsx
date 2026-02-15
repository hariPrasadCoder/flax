import React from 'react';
import { Section } from './ui/Section';
import { Users, Zap, MessageSquare } from 'lucide-react';

export const Differentiation: React.FC = () => {
  return (
    <Section id="differentiation" className="bg-background relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Why Flax Wins
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              num: "01",
              title: "Curated LinkedIn Network",
              desc: "We don't blast cold outreach to random creators. Every LinkedIn creator in our network is vetted for authentic engagement and B2B relevance.",
              highlight: "Quality over quantity"
            },
            {
              icon: Zap,
              num: "02", 
              title: "Coordinated Launch Windows",
              desc: "Momentum beats randomness. We synchronize creator posts to create a wave effect — your brand appears across LinkedIn feeds simultaneously.",
              highlight: "Simultaneous deployment"
            },
            {
              icon: MessageSquare,
              num: "03",
              title: "Strategic Narrative Control",
              desc: "Messaging stays aligned with your business goals. We work with creators to ensure your story is told right — professional, on-brand, effective.",
              highlight: "Brand-safe execution"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={22} />
                </div>
                <span className="text-xs font-mono text-gray-600">{item.num}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <div className="pt-6 border-t border-white/5">
                <span className="text-xs font-mono text-primary">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};
