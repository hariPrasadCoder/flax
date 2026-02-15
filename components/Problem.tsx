import React from 'react';
import { Section } from './ui/Section';
import { Clock, TrendingUp, Users, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" className="bg-background relative border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Distribution is the bottleneck. <br/>
            <span className="text-gray-600">Not your product.</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            You've built something great. But nobody knows about it. Marketing feels expensive, slow, and unpredictable.
          </p>
        </div>
        <div className="hidden md:block h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="grid md:grid-cols-4 gap-4">
         {[
            { icon: AlertCircle, title: "Zero Reach", text: "Your product sits in the dark. No matter how good it is, no audience means no revenue." },
            { icon: TrendingUp, title: "Slow Growth", text: "Organic takes years. Paid ads burn cash. You need faster, more efficient distribution." },
            { icon: Users, title: "Wrong Audience", text: "Generic marketing wastes money. You need your message in front of the right people." },
            { icon: Clock, title: "No Time", text: "You're busy building. You don't have time to become a marketing expert." }
         ].map((item, i) => (
            <div key={i} className="bg-surface/50 border border-white/5 p-8 rounded-2xl hover:bg-surface hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                 <item.icon size={20} />
               </div>
               <h3 className="text-white font-medium text-lg mb-3">{item.title}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </div>
         ))}
      </div>
    </Section>
  );
};
