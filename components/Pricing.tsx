import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isUK, setIsUK] = useState(false);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIsUK(data.country_code === 'GB');
      } catch {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setIsUK(timezone === 'Europe/London');
      }
    };
    detectLocation();
  }, []);

  return (
    <Section id="pricing" className="bg-background relative border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
          Built For
          <br />
          <span className="text-gray-600">Serious Launches</span>
        </h2>

        <p className="text-xl text-secondary mb-12 max-w-xl mx-auto">
          Campaign budgets typically start at {isUK ? '£10,000' : '$10,000'}. We work with teams ready to invest in visibility.
        </p>

        <div className="glass-panel rounded-3xl p-10 md:p-12 mb-8">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="text-xs text-gray-500 font-mono mb-2">STARTER</div>
              <div className="text-2xl font-bold text-white">{isUK ? '£10K' : '$10K'}</div>
              <div className="text-sm text-gray-600">5-10 creators</div>
            </div>
            <div className="text-center border-x border-white/5 px-8">
              <div className="text-xs text-primary font-mono mb-2">GROWTH</div>
              <div className="text-2xl font-bold text-white">{isUK ? '£25K' : '$25K'}</div>
              <div className="text-sm text-gray-600">15-25 creators</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 font-mono mb-2">SCALE</div>
              <div className="text-2xl font-bold text-white">{isUK ? '£50K+' : '$50K+'}</div>
              <div className="text-sm text-gray-600">Full orchestration</div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <Button 
              className="h-14 px-12 text-base bg-white text-black hover:bg-gray-100 font-semibold"
              data-cal-namespace="flax"
              data-cal-link="hari-prasad/flax"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Request Campaign Plan
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Not sure if you're ready? Book a strategy call — no commitment.
        </p>

      </div>
    </Section>
  );
};
