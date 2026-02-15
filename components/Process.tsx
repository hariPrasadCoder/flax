import React from 'react';
import { Section } from './ui/Section';

export const Process: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Strategy Alignment", 
      desc: "We define positioning, audience, and campaign angle. Clear objectives before any creator outreach.",
      week: "Week 1"
    },
    { 
      num: "02", 
      title: "Creator Deployment", 
      desc: "We activate curated creators in your niche simultaneously. Coordinated messaging, synchronized timing.",
      week: "Week 2"
    },
    { 
      num: "03", 
      title: "Amplification Layer", 
      desc: "Content spreads across platforms within a defined window. Momentum compounds visibility.",
      week: "Week 3-4"
    }
  ];

  return (
    <Section id="methodology" className="bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            From Budget To Millions
            <br />
            <span className="text-gray-600">Of Impressions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-surface border border-white/5 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                      <span className="text-primary font-mono text-lg font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Visual */}
          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-8">Campaign Timeline</h4>
              
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-3 h-3 rounded-full ${i === 2 ? 'bg-primary shadow-[0_0_12px_rgba(74,66,216,0.6)]' : 'bg-white/20'}`}></div>
                      <span className="text-sm font-mono text-gray-400">{step.week}</span>
                      <span className="text-sm text-white">{step.title}</span>
                    </div>
                    <div className="ml-1.5 pl-6 border-l border-white/10">
                      <div 
                        className={`h-2 rounded-full ${
                          i === 0 ? 'w-1/4 bg-gradient-to-r from-primary/60 to-primary/20' :
                          i === 1 ? 'w-2/3 bg-gradient-to-r from-primary/40 to-primary/60' :
                          'w-full bg-gradient-to-r from-primary/60 to-primary'
                        }`}
                      ></div>
                    </div>
                    {i < steps.length - 1 && <div className="h-4"></div>}
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">TYPICAL REACH</div>
                    <div className="text-2xl font-bold text-white">2M - 10M+</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">TIMEFRAME</div>
                    <div className="text-2xl font-bold text-white">30 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
