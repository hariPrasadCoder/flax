import React from 'react';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

export const Proof: React.FC = () => {
  return (
    <Section id="proof" className="bg-background relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Statement */}
          <div>
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-6 block">Why Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
              Distribution Is Our
              <br />
              <span className="text-gray-600">Unfair Advantage</span>
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              We don't just talk about distribution. We've built it for ourselves first.
            </p>
            <a 
              href="https://www.linkedin.com/in/hariprasad20/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-colors group"
            >
              See the founder's distribution 
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right - Metrics Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-violet-500/10 rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Hari Prasad</div>
                  <div className="text-sm text-gray-500">Flax Founder</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-surface/50 rounded-xl p-5 border border-white/5">
                  <div className="text-xs text-gray-500 font-mono mb-2">LINKEDIN AUDIENCE</div>
                  <div className="text-3xl font-bold text-white">47K+</div>
                </div>
                <div className="bg-surface/50 rounded-xl p-5 border border-white/5">
                  <div className="text-xs text-gray-500 font-mono mb-2">IMPRESSIONS</div>
                  <div className="text-3xl font-bold text-white">10M+</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Built audience by turning real work into signal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Organized founder summits with 100+ attendees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Network of creators across AI & SaaS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
