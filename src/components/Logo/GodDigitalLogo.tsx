import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gradient';
  animated?: boolean;
  className?: string;
}

export const GodDigitalLogo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'gradient',
  animated = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const getGradientId = () => {
    switch (variant) {
      case 'light':
        return 'logoGradientLight';
      case 'dark':
        return 'logoGradientDark';
      default:
        return 'logoGradientDefault';
    }
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        
        <filter id="shadow4d" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
          <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="#ffffff" floodOpacity="0.1"/>
        </filter>
        
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shadow4d)">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={`url(#${getGradientId()})`}
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        />
        
        <path
          d="M30 25 L30 75 L70 75 L70 55 L50 55 L50 45 L70 45 L70 25 Z"
          fill={`url(#${getGradientId()})`}
          opacity="0.9"
        />
        
        <line x1="20" y1="20" x2="25" y2="15" stroke={`url(#${getGradientId()})`} strokeWidth="2" opacity="0.6"/>
        <line x1="75" y1="15" x2="80" y2="20" stroke={`url(#${getGradientId()})`} strokeWidth="2" opacity="0.6"/>
        <line x1="80" y1="80" x2="75" y2="85" stroke={`url(#${getGradientId()})`} strokeWidth="2" opacity="0.6"/>
        <line x1="25" y1="85" x2="20" y2="80" stroke={`url(#${getGradientId()})`} strokeWidth="2" opacity="0.6"/>
        
        <circle
          cx="60"
          cy="40"
          r="3"
          fill={`url(#${getGradientId()})`}
          filter="url(#glow)"
        />
      </g>
    </svg>
  );
};

export const GodDigitalLogoWithText: React.FC<LogoProps & { showTagline?: boolean }> = ({
  size = 'md',
  variant = 'gradient',
  animated = true,
  showTagline = false,
  className = ''
}) => {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-black';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <GodDigitalLogo size={size} variant={variant} animated={animated} />
      <div className="flex flex-col">
        <span className={`font-bold ${textSizes[size]} ${textColor} tracking-tight`}>
          God Digital Marketing
        </span>
        {showTagline && (
          <span className={`${taglineSizes[size]} ${textColor} opacity-70 font-medium`}>
            Divine Digital Solutions
          </span>
        )}
      </div>
    </div>
  );
};

export default GodDigitalLogo;
