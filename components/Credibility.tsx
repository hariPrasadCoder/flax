import React from 'react';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

export const Credibility: React.FC = () => {
  return (
    <Section className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Statement */}
          <div>
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-6 block">Why Trust Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              We Don't Just Talk
              <br />
              <span className="text-gray-600">About Distribution.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We've built it ourselves. 47K+ followers on LinkedIn. 10M+ impressions. A network of B2B creators. This isn't theory — it's what we do every day.
            </p>
            <a 
              href="https://www.linkedin.com/in/hariprasad20/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-colors group"
            >
              See the proof on LinkedIn
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right - Stats */}
          <div className="glass-panel rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">47K+</div>
                <div className="text-sm text-gray-500">LinkedIn Followers</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
                <div className="text-sm text-gray-500">Impressions</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-gray-500">Founders at Events</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">B2B</div>
                <div className="text-sm text-gray-500">Creator Network</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
};
