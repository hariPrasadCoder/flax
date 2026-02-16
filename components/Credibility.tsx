import React from 'react';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

export const Credibility: React.FC = () => {
  return (
    <Section id="credibility" className="bg-background relative border-t border-white/5">
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
              We've built it ourselves. Combined, we have 72K+ followers and 13M+ impressions on LinkedIn. A network of B2B creators ready to deploy. This isn't theory. It's what we do every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/hariprasad20/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-colors group"
              >
                Hari's LinkedIn
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sunjana-ramana/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-primary hover:text-primary transition-colors group"
              >
                Sunjana's LinkedIn
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="glass-panel rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">72K+</div>
                <div className="text-sm text-gray-500">Combined Followers</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">13M+</div>
                <div className="text-sm text-gray-500">Impressions</div>
              </div>
              <div className="text-center p-4 col-span-2">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">B2B</div>
                <div className="text-sm text-gray-500">Creator Network Ready to Deploy</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
};
