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
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-lg md:text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Precision Geometric Emblem */}
      <div className={`relative ${sizeClasses.icon} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 border border-blue-400/40 shadow-md shadow-blue-900/30 overflow-hidden`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Subtle grid backing */}
          <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeDasharray="2 2" />
          
          {/* Stylized 'xyz' geometric intersecting node geometry */}
          <path
            d="M12 12L28 28M28 12L12 28"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Node spark representing innovation & claim point */}
          <circle cx="12" cy="12" r="2.2" fill="#60a5fa" />
          <circle cx="28" cy="28" r="2.2" fill="#38bdf8" />
          <circle cx="20" cy="20" r="2" fill="#fbbf24" />
          <circle cx="28" cy="12" r="2.2" fill="#60a5fa" />
          <circle cx="12" cy="28" r="2.2" fill="#38bdf8" />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1.5 leading-none">
          <span className={`font-extrabold tracking-tight text-white font-heading ${sizeClasses.text}`}>
            xyz
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-0.5" />
        </div>
        <span className={`font-mono font-semibold tracking-[0.25em] text-blue-400 uppercase mt-1 leading-none ${sizeClasses.sub}`}>
          IP SERVICES
        </span>
      </div>
    </div>
  );
};
