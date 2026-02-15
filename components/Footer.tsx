import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isUK, setIsUK] = useState(false);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const isUKCountry = data.country_code === 'GB';
        setIsUK(isUKCountry);
      } catch (error) {
        console.error('Failed to detect location:', error);
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const isUKTimezone = timezone === 'Europe/London' || timezone === 'Europe/Guernsey' || timezone === 'Europe/Jersey' || timezone === 'Europe/Isle_of_Man';
        const locale = navigator.language || (navigator as any).userLanguage;
        const isUKLocale = locale?.toLowerCase().includes('gb') || locale?.toLowerCase().includes('uk');
        setIsUK(isUKTimezone || isUKLocale);
      }
    };
    
    detectLocation();
  }, []);

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      <Section id="pricing" className="!py-0 mb-32">
         <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Simple Pricing</h2>
            <p className="text-secondary text-lg">Start small. Scale as you grow.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white text-black rounded-3xl p-8 md:p-10 relative flex flex-col order-1 md:order-none hover:scale-[1.01] transition-transform duration-300">
               <div className="absolute top-8 right-8 px-3 py-1 bg-black/5 text-black text-[10px] font-bold tracking-widest uppercase rounded-full">
                  Popular
               </div>
               
               <div className="mb-8">
                  <div className="text-sm font-bold text-black/60 tracking-wider uppercase mb-2">Starter Campaign</div>
                  <div className="text-5xl font-bold mb-2">
                     {isUK ? '£5,000' : '$5,000'}
                  </div>
                  <p className="text-black/60 font-medium mb-3">
                     One-time campaign fee
                  </p>
                  <p className="text-black/80 text-sm leading-relaxed">
                     Perfect for testing influencer marketing. Get your first campaign live and see results.
                  </p>
               </div>
               
               <div className="space-y-4 mb-10 flex-1">
                  {['5-10 influencers in your niche', 'Multi-platform distribution', 'Campaign strategy & creative brief', 'Full reporting & analytics', 'Dedicated campaign manager'].map(i => (
                     <div key={i} className="flex gap-3 text-sm font-medium">
                        <Check size={18} className="text-black shrink-0"/>
                        {i}
                     </div>
                  ))}
               </div>
               <Button 
                 className="w-full !bg-black !text-white hover:!bg-black/80 shadow-none border-none h-14 rounded-xl"
                 data-cal-namespace="flax"
                 data-cal-link="hari-prasad/flax"
                 data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
               >
                 Get Started
               </Button>
            </div>

            {/* Scale Package */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col order-2 md:order-none">
               <div className="mb-8">
                  <div className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-2">Scale Campaign</div>
                  <div className="text-5xl font-bold text-white mb-2">Custom</div>
                  <p className="text-gray-500 mb-3">For larger budgets & ongoing campaigns</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Ready to go big? We'll design a custom campaign strategy based on your goals and budget.
                  </p>
               </div>

               <div className="space-y-4 mb-10 flex-1">
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> 20+ influencers</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Macro & micro influencer mix</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Ongoing campaign management</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Priority support</div>
               </div>
               <Button 
                 variant="outline" 
                 className="w-full h-14 rounded-xl"
                 data-cal-namespace="flax"
                 data-cal-link="hari-prasad/flax"
                 data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
               >
                 Book a Call
               </Button>
            </div>
         </div>
      </Section>

      <Section className="!py-0 mb-20 pb-20">
         <div className="text-center pb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-12">
               Ready to reach<br/>
               <span className="text-gray-600">millions?</span>
            </h2>
            <Button 
               className="!text-xl !px-12 !py-6 !h-auto !rounded-full !bg-gradient-to-r !from-white !to-gray-200 !text-black hover:!from-gray-100 hover:!to-gray-300 !shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:!shadow-[0_0_60px_rgba(255,255,255,0.4)] !scale-110 hover:!scale-115 transition-all duration-300"
               data-cal-namespace="flax"
               data-cal-link="hari-prasad/flax"
               data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
               Book a Free Strategy Call
            </Button>
         </div>
      </Section>

      <div className="container mx-auto px-6 max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
            <span className="text-white font-medium">Flax</span>
         </div>
         
         <div className="flex gap-8 text-sm text-gray-500">
            <a href="#methodology" className="hover:text-white transition-colors">How It Works</a>
            <a href="#why-us" className="hover:text-white transition-colors">Results</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
         </div>

         <div className="text-xs text-gray-600">
             © 2026 Flax Inc.
         </div>
      </div>
    </footer>
  );
};
