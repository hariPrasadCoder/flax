import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { User, Users, ArrowRight, Mic, Send, CheckCircle, Network, Megaphone, TrendingUp } from 'lucide-react';

export const TwoPaths: React.FC = () => {
  return (
    <Section id="paths" className="bg-background relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Two Paths to Distribution</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Build your own voice, or leverage creators who already have reach.
          </p>
        </div>

        {/* The Two Paths - Visual Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Path 1: Build Your Voice */}
          <div className="glass-panel rounded-3xl p-8 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <User size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Build Your Voice</h3>
                <p className="text-sm text-gray-500">For founders starting out</p>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mic className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Your work becomes content</p>
                </div>
                <ArrowRight className="text-gray-600" size={16} />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">We write, you approve</p>
                </div>
                <ArrowRight className="text-gray-600" size={16} />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Credibility + Inbound</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-sm text-gray-500">30 mins/week from you</span>
              <span className="text-xs font-mono text-primary">LONG-TERM EQUITY</span>
            </div>
          </div>

          {/* Path 2: Leverage Creators */}
          <div className="glass-panel rounded-3xl p-8 group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Leverage Creators</h3>
                <p className="text-sm text-gray-500">For funded startups ready to scale</p>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Network className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">We match you with creators</p>
                </div>
                <ArrowRight className="text-gray-600" size={16} />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface/50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Megaphone className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Coordinated campaign launch</p>
                </div>
                <ArrowRight className="text-gray-600" size={16} />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Millions of impressions</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-sm text-gray-500">We handle everything</span>
              <span className="text-xs font-mono text-gray-400">IMMEDIATE REACH</span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Not sure which path? Let's figure it out together.</p>
          <Button 
            className="h-12 px-8 text-sm bg-white text-black hover:bg-gray-100 font-semibold"
            data-cal-namespace="strategy-call"
            data-cal-link="joinflax/strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a Free Strategy Call
          </Button>
        </div>

      </div>
    </Section>
  );
};
