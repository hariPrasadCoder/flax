import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

const FlaxLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-7 h-7">
    <defs>
      <linearGradient id="gradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#4A42D8'}}/>
        <stop offset="100%" style={{stopColor:'#6B63E8'}}/>
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="90" height="90" rx="20" fill="url(#gradFoot)"/>
    <g transform="translate(50, 50)">
      <ellipse cx="0" cy="-18" rx="8" ry="14" fill="white" transform="rotate(0)"/>
      <ellipse cx="0" cy="-18" rx="8" ry="14" fill="white" transform="rotate(72)"/>
      <ellipse cx="0" cy="-18" rx="8" ry="14" fill="white" transform="rotate(144)"/>
      <ellipse cx="0" cy="-18" rx="8" ry="14" fill="white" transform="rotate(216)"/>
      <ellipse cx="0" cy="-18" rx="8" ry="14" fill="white" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="8" fill="rgba(74,66,216,0.5)"/>
    </g>
  </svg>
);

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
            data-cal-namespace="strategy-call"
            data-cal-link="joinflax/strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a Free Strategy Call
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <div className="container mx-auto px-6 max-w-7xl pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <a href="#" className="flex items-center gap-2">
          <FlaxLogo />
          <span className="text-white font-semibold">Flax</span>
        </a>
        <div className="text-xs text-gray-600">
          © 2026 Flax
        </div>
      </div>
    </footer>
  );
};
