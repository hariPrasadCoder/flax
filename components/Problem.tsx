import React from 'react';
import { Section } from './ui/Section';
import { X } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" className="bg-background relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Big Statement */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05]">
            The Old Playbook
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-red-500 to-red-600">
              Is Broken.
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            What worked 5 years ago doesn't work anymore.
          </p>
        </div>

        {/* Pain Points - More Visual */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { 
              stat: "$33+", 
              label: "CPM on LinkedIn Ads",
              pain: "And people scroll right past them"
            },
            { 
              stat: "2%", 
              label: "Cold Email Reply Rate",
              pain: "Nobody responds to strangers"
            },
            { 
              stat: "0", 
              label: "Inbound When Invisible",
              pain: "Great product, zero distribution"
            }
          ].map((item, i) => (
            <div key={i} className="glass-panel rounded-2xl p-8 text-center group hover:border-red-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <X className="text-red-400" size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.stat}</div>
              <div className="text-white font-medium mb-2">{item.label}</div>
              <div className="text-sm text-gray-500">{item.pain}</div>
            </div>
          ))}
        </div>

        {/* The Shift */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl"></div>
          <div className="relative glass-panel rounded-3xl p-10 md:p-14 text-center">
            <p className="text-2xl md:text-4xl text-white font-light leading-relaxed">
              The winners aren't running more ads.
            </p>
            <p className="text-2xl md:text-4xl text-primary font-semibold mt-2">
              They're building distribution through content.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};
