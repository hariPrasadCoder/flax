import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { User, Users, ArrowDown, Sparkles } from 'lucide-react';

export const TwoPaths: React.FC = () => {
  return (
    <Section id="paths" className="bg-background relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Story Lead-in */}
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">The New Playbook</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
            Content Wins. But How?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            There are two ways to build distribution through content. The right choice depends on where you are.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Start Point */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                <Sparkles className="text-gray-400" size={24} />
              </div>
              <div className="text-sm text-gray-500 font-mono mb-1">TODAY</div>
              <p className="text-white font-medium">You have a great product</p>
              <p className="text-gray-500 text-sm">But no one knows about it</p>
            </div>

            {/* Decision Point */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                <ArrowDown className="text-primary" size={24} />
              </div>
              <div className="text-sm text-primary font-mono mb-1">CHOOSE YOUR PATH</div>
              <p className="text-white font-medium">Two ways to win</p>
              <p className="text-gray-500 text-sm">Both work. Pick what fits.</p>
            </div>

            {/* End Point */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="text-sm text-green-500 font-mono mb-1">RESULT</div>
              <p className="text-white font-medium">Distribution solved</p>
              <p className="text-gray-500 text-sm">Inbound, credibility, growth</p>
            </div>
          </div>
        </div>

        {/* The Two Paths */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Path 1: Build Your Voice */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <User size={24} />
              </div>
              <div>
                <div className="text-xs font-mono text-primary mb-1">PATH 1</div>
                <h3 className="text-xl font-semibold text-white">Build Your Voice</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Become the go-to founder in your space. We turn your work into LinkedIn content that builds your reputation and drives inbound.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">We extract content from your work</p>
                  <p className="text-gray-500 text-xs">Calls, docs, decisions — we turn it into signal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">We write and position you strategically</p>
                  <p className="text-gray-500 text-xs">Thought leadership without the cringe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">You approve, we publish</p>
                  <p className="text-gray-500 text-xs">30 mins/week from you, max</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <span className="text-xs text-gray-600 font-mono">BEST FOR</span>
              <p className="text-sm text-white mt-1">Founders who want long-term credibility and inbound</p>
            </div>
          </div>

          {/* Path 2: Leverage Creators */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Users size={24} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 mb-1">PATH 2</div>
                <h3 className="text-xl font-semibold text-white">Leverage Creators</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Skip the slow build. We deploy our network of LinkedIn creators to put your brand in front of millions, fast.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">We match you with the right creators</p>
                  <p className="text-gray-500 text-xs">Vetted B2B voices in your niche</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">We coordinate the campaign</p>
                  <p className="text-gray-500 text-xs">Synchronized posts for maximum impact</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Your brand reaches millions</p>
                  <p className="text-gray-500 text-xs">In weeks, not months</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <span className="text-xs text-gray-600 font-mono">BEST FOR</span>
              <p className="text-sm text-white mt-1">Funded startups who need reach now</p>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Not sure which path? Most founders aren't. Let's figure it out.</p>
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
