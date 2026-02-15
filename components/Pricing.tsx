import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowRight, Zap, Rocket } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Built For
            <br />
            <span className="text-gray-600">Serious Launches</span>
          </h2>
          <p className="text-xl text-secondary max-w-xl mx-auto">
            We work with teams ready to invest in visibility. Campaign scope is customized to your goals and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Pilot Campaign */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-primary/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-xs font-mono text-primary mb-1">START HERE</div>
                <h3 className="text-xl font-semibold text-white">Pilot Campaign</h3>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Test the waters with a single campaign. See the results, understand the process — no long-term commitment required.
            </p>

            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                5-10 curated creators
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                Full campaign orchestration
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                Complete reporting & analytics
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                30-day execution window
              </li>
            </ul>

            <div className="pt-6 border-t border-white/5">
              <span className="text-sm text-gray-500">Perfect for: First-time creator marketing, testing new markets</span>
            </div>
          </div>

          {/* Ongoing Partnership */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 group hover:border-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white">
                <Rocket size={20} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 mb-1">SCALE</div>
                <h3 className="text-xl font-semibold text-white">Ongoing Partnership</h3>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Continuous distribution infrastructure. Monthly campaigns, strategic planning, dedicated support — distribution becomes a growth engine.
            </p>

            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-white/40"></div>
                20+ creators per campaign
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-white/40"></div>
                Monthly campaign cycles
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-white/40"></div>
                Strategic planning sessions
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1 h-1 rounded-full bg-white/40"></div>
                Priority creator access
              </li>
            </ul>

            <div className="pt-6 border-t border-white/5">
              <span className="text-sm text-gray-500">Perfect for: Sustained growth, product launches, fundraising visibility</span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="h-14 px-12 text-base bg-white text-black hover:bg-gray-100 font-semibold"
            data-cal-namespace="flax"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Discuss Your Campaign
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            We'll scope a campaign based on your goals. No commitment on the first call.
          </p>
        </div>

      </div>
    </Section>
  );
};
