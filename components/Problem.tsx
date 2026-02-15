import React from 'react';
import { Section } from './ui/Section';
import { TrendingDown, DollarSign, Shuffle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Great Products Don't
            <br />
            <span className="text-gray-600">Spread Themselves.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { 
              icon: TrendingDown, 
              text: "You raised money but distribution is slow." 
            },
            { 
              icon: DollarSign, 
              text: "Paid ads are expensive and short-term." 
            },
            { 
              icon: Shuffle, 
              text: "Influencer marketing feels chaotic and unreliable." 
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-surface/30 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-500 group-hover:text-white group-hover:bg-white/10 transition-colors">
                <item.icon size={18} />
              </div>
              <p className="text-white text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-primary/50 pl-8 py-2">
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-2">
            You don't need more creators.
          </p>
          <p className="text-2xl md:text-3xl text-primary font-medium">
            You need orchestrated distribution.
          </p>
        </div>
      </div>
    </Section>
  );
};
