import React from 'react';
import { Section } from './ui/Section';

export const Reframe: React.FC = () => {
  return (
    <Section className="text-center bg-background relative overflow-visible z-20">
       
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

       <div className="max-w-5xl mx-auto relative z-10">
         <h2 className="font-display text-4xl md:text-6xl font-medium mb-12 text-white">
           Who This Is For <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">And Who It Is Not</span>
         </h2>
         
         <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-[#080808] p-8 hover:bg-[#111] transition-colors group relative">
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <h3 className="text-lg font-medium text-white mb-3 group-hover:text-primary transition-colors">For Growing Businesses</h3>
               <p className="text-sm text-gray-500 leading-relaxed mb-4">You have a product or service that works. You have budget for marketing but want ROI. You're ready to scale fast and reach new audiences. You want distribution without becoming a content creator.</p>
               <p className="text-xs text-gray-600">Startups, SaaS, e-commerce, apps, agencies — anyone ready to grow.</p>
            </div>
            <div className="bg-[#080808] p-8 hover:bg-[#111] transition-colors group relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
               <h3 className="text-lg font-medium text-white mb-3 group-hover:text-primary transition-colors">Not For</h3>
               <p className="text-sm text-gray-500 leading-relaxed mb-4">Pre-revenue startups without budget. Companies looking for cheap viral hacks. Anyone expecting overnight miracles without a real product.</p>
               <p className="text-xs text-gray-600">This is a distribution system, not a lottery ticket.</p>
            </div>
         </div>
       </div>
    </Section>
  );
};
