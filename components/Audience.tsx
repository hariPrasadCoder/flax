import React from 'react';
import { Section } from './ui/Section';
import { Cpu, Rocket, TrendingUp, Globe } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <Section id="audience" className="bg-background relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Built For
            <br />
            <span className="text-gray-600">High-Leverage Teams</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            { 
              icon: Cpu, 
              title: "AI Startups", 
              desc: "Post-seed to Series B. You've built something real and need the market to know." 
            },
            { 
              icon: Rocket, 
              title: "SaaS Companies", 
              desc: "Launching new product lines. Entering new markets. Need velocity." 
            },
            { 
              icon: TrendingUp, 
              title: "Fundraising Founders", 
              desc: "Building public signal before your next round. Visibility creates leverage." 
            },
            { 
              icon: Globe, 
              title: "Market Expansion", 
              desc: "Entering new geographies or verticals. Need awareness, fast." 
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="glass-panel rounded-2xl p-8 group hover:border-white/10 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface/30 rounded-2xl border border-white/5 p-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-full bg-gray-700 rounded-full flex-shrink-0"></div>
            <div>
              <h4 className="text-gray-400 font-medium mb-3">Not a fit right now:</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pre-revenue startups still validating product-market fit. Teams without marketing budget allocated. 
                Companies looking for cheap viral hacks instead of strategic distribution.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
