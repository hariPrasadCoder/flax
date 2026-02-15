import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      {/* Final CTA */}
      <Section className="!py-0 mb-20">
        <div className="text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            If You're Ready To Scale
            <br />
            <span className="text-gray-600">Distribution, Let's Talk.</span>
          </h2>
          
          <div className="mt-12">
            <Button 
              className="!text-lg !px-12 !py-6 !h-auto !rounded-full bg-white text-black hover:bg-gray-100 font-semibold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-all duration-300"
              data-cal-namespace="flax"
              data-cal-link="hari-prasad/flax"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
               Book Strategy Call
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Limited to 5 campaigns per month.
          </p>
        </div>
      </Section>

      {/* Footer Links */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-lg">Flax</span>
        </div>
         
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#methodology" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="mailto:hello@flax.marketing" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600">
            © 2026 Flax
        </div>
      </div>
    </footer>
  );
};
