import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  showArrow?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95 tracking-wide relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    secondary: "bg-surfaceHighlight text-white border border-white/10 hover:border-white/20 hover:bg-white/5",
    outline: "bg-transparent text-gray-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 opacity-50" />
      )}
      
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};
