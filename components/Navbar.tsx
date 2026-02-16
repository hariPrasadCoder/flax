import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Content', href: '#problem' },
    { label: 'How We Help', href: '#paths' },
    { label: 'About Us', href: '#credibility' },
  ];

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none max-w-full">
        <div className={`
          pointer-events-auto
          flex items-center justify-between 
          transition-all duration-500 ease-out
          w-full
          ${isScrolled 
            ? 'max-w-[calc(100%-2rem)] md:max-w-[600px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-2.5 px-4 rounded-full' 
            : 'max-w-7xl py-3 md:py-4 px-4 md:px-6 bg-transparent border-transparent'
          }
        `}>
          
          <a href="#" className="flex items-center gap-2 group relative z-10 flex-shrink-0">
            <span className="text-base md:text-lg font-semibold tracking-tight text-white">
              Flax
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Button 
              variant="primary" 
              className="!px-5 !py-2 !text-xs !h-9 whitespace-nowrap"
              data-cal-namespace="flax"
              data-cal-link="hari-prasad/flax"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a Call
            </Button>
          </div>

          <button 
            className="md:hidden text-white p-2 pointer-events-auto flex-shrink-0 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl pt-24 px-4 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 items-center text-center min-h-full justify-center pb-20">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-2xl sm:text-3xl font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="w-full max-w-xs h-px bg-white/10 my-4" />
            <Button 
              fullWidth 
              variant="primary" 
              className="max-w-xs"
              onClick={() => setIsMobileMenuOpen(false)}
              data-cal-namespace="flax"
              data-cal-link="hari-prasad/flax"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
