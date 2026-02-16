import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { User, Users, ArrowRight } from 'lucide-react';

export const TwoPaths: React.FC = () => {
  return (
    <Section id="paths" className="bg-background relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Two Paths To Distribution</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you want to build your own voice or leverage others', we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Path 1: Build Your Voice */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <User size={24} />
              </div>
              <div>
                <div className="text-xs font-mono text-primary mb-1">PATH 1</div>
                <h3 className="text-xl font-semibold text-white">Build Your Voice</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We turn your work into a content engine. You focus on building — we handle your LinkedIn presence, positioning you as the go-to expert in your space.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Done-for-you LinkedIn content",
                "Extract insights from your real work", 
                "Build founder credibility & inbound",
                "You approve, we publish"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-600 font-mono">BEST FOR</span>
                  <p className="text-sm text-gray-400">Founders starting to build presence</p>
                </div>
                <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </div>
            </div>
          </div>

          {/* Path 2: Leverage Creators */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Users size={24} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 mb-1">PATH 2</div>
                <h3 className="text-xl font-semibold text-white">Leverage Creators</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We deploy our curated network of LinkedIn creators to put your brand in front of millions. Coordinated campaigns, synchronized timing, massive reach.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Access to vetted B2B creators",
                "Coordinated campaign bursts",
                "Reach millions of decision-makers",
                "Full campaign management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-600 font-mono">BEST FOR</span>
                  <p className="text-sm text-gray-400">Funded startups ready to scale</p>
                </div>
                <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Not sure which path is right? Let's figure it out together.</p>
          <Button 
            className="h-12 px-8 text-sm bg-white text-black hover:bg-gray-100 font-semibold"
            data-cal-namespace="flax"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a Free Strategy Call
          </Button>
        </div>

      </div>
    </Section>
  );
};
