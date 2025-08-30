
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = "" }) => {
  return (
    <div 
      className={`bg-primary rounded-lg flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-primary-foreground font-bold text-lg">GI</span>
    </div>
  );
};

export default Logo;
