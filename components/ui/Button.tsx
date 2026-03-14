import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center font-mono font-medium tracking-wide transition-all duration-150 cursor-pointer whitespace-nowrap select-none';

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-xs px-5 py-2.5',
  };

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
