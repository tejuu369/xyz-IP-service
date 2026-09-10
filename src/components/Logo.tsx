import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[8.5px]' },
    md: { icon: 'w-9 h-9', text: 'text-lg md:text-xl', sub: 'text-[9.5px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Precision Geometric Gold Emblem */}
      <div className={`relative ${sizeClasses.icon} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-950 border border-gold-500/40 shadow-lg shadow-gold-500/10 overflow-hidden group`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Subtle concentric gold circles */}
          <circle cx="20" cy="20" r="16" stroke="rgba(212,175,55,0.2)" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="20" cy="20" r="12" stroke="rgba(212,175,55,0.1)" strokeWidth="0.6" />
          
          {/* Stylized 'xyz' geometric intersecting node geometry in gold */}
          <path
            d="M12 12L28 28M28 12L12 28"
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Node sparks in gold shades */}
          <circle cx="12" cy="12" r="2.2" fill="#e2c672" />
          <circle cx="28" cy="28" r="2.2" fill="#dcae4d" />
          <circle cx="20" cy="20" r="2.2" fill="#ffffff" />
          <circle cx="28" cy="12" r="2.2" fill="#e2c672" />
          <circle cx="12" cy="28" r="2.2" fill="#dcae4d" />
        </svg>
      </div>

      {/* Typographic Wordmark in svpconstructions style */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1.5 leading-none">
          <span className={`font-serif font-bold tracking-tight text-white ${sizeClasses.text}`}>
            xyz
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mb-0.5" />
        </div>
        <span className={`font-sans font-medium tracking-[0.3em] text-gold-500 uppercase mt-1 leading-none ${sizeClasses.sub}`}>
          IP SERVICES
        </span>
      </div>
    </div>
  );
};
