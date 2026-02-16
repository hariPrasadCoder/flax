import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      {/* Final CTA */}
      <Section className="!py-0 mb-16">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Ready to Fix
            <br />
            <span className="text-gray-600">Your Distribution?</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Let's figure out the right path for you. No pitch, just strategy.
          </p>
          
          <Button 
            className="!text-lg !px-10 !py-5 !h-auto !rounded-full bg-white text-black hover:bg-gray-100 font-semibold shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300"
            data-cal-namespace="flax"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a Free Strategy Call
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <div className="container mx-auto px-6 max-w-7xl pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white font-semibold">Flax</span>
        <div className="text-xs text-gray-600">
          © 2026 Flax
        </div>
      </div>
    </footer>
  );
};
